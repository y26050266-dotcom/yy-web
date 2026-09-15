'use client';

import { Effect, EffectComposer, EffectPass, RenderPass } from 'postprocessing';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './PixelBlast.css';

const SHAPE_MAP = {
  square: 0,
  circle: 1,
  triangle: 2,
  diamond: 3,
};

const MAX_CLICKS = 10;

const VERTEX_SHADER = `
void main() {
  gl_Position = vec4(position, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;
uniform int uShapeType;

const int SHAPE_SQUARE = 0;
const int SHAPE_CIRCLE = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND = 3;
const int MAX_CLICKS = 10;

uniform vec2 uClickPos[MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2.0 + a.y * a.y * 0.75);
}

#define Bayer4(a) (Bayer2(0.5 * (a)) * 0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(0.5 * (a)) * 0.25 + Bayer2(a))

float hash11(float n) {
  return fract(sin(n) * 43758.5453);
}

float vnoise(vec3 p) {
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0, 0.0, 0.0), vec3(1.0, 57.0, 113.0)));
  float n100 = hash11(dot(ip + vec3(1.0, 0.0, 0.0), vec3(1.0, 57.0, 113.0)));
  float n010 = hash11(dot(ip + vec3(0.0, 1.0, 0.0), vec3(1.0, 57.0, 113.0)));
  float n110 = hash11(dot(ip + vec3(1.0, 1.0, 0.0), vec3(1.0, 57.0, 113.0)));
  float n001 = hash11(dot(ip + vec3(0.0, 0.0, 1.0), vec3(1.0, 57.0, 113.0)));
  float n101 = hash11(dot(ip + vec3(1.0, 0.0, 1.0), vec3(1.0, 57.0, 113.0)));
  float n011 = hash11(dot(ip + vec3(0.0, 1.0, 1.0), vec3(1.0, 57.0, 113.0)));
  float n111 = hash11(dot(ip + vec3(1.0, 1.0, 1.0), vec3(1.0, 57.0, 113.0)));
  vec3 w = fp * fp * fp * (fp * (fp * 6.0 - 15.0) + 10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  return mix(mix(x00, x10, w.y), mix(x01, x11, w.y), w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t) {
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < 5; ++i) {
    sum += amp * vnoise(p * freq);
    freq *= 1.25;
    amp *= 1.0;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float coverage) {
  float r = sqrt(coverage) * 0.25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return coverage * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float coverage) {
  if (mod(id.x + id.y, 2.0) > 0.5) p.x = 1.0 - p.x;
  float r = sqrt(coverage);
  float d = p.y - r * (1.0 - p.x);
  return coverage * clamp(0.5 - d / fwidth(d), 0.0, 1.0);
}

float maskDiamond(vec2 p, float coverage) {
  float r = sqrt(coverage) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main() {
  vec2 fragCoord = gl_FragCoord.xy - uResolution * 0.5;
  float aspectRatio = uResolution.x / uResolution.y;
  vec2 pixelId = floor(fragCoord / uPixelSize);
  vec2 pixelUV = fract(fragCoord / uPixelSize);
  float cellPixelSize = 8.0 * uPixelSize;
  vec2 cellCoord = floor(fragCoord / cellPixelSize) * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float feed = fbm2(uv, uTime * 0.05) * 0.5 - 0.65 + (uDensity - 0.5) * 0.3;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i) {
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      vec2 cuv = ((pos - uResolution * 0.5 - cellPixelSize * 0.5) / uResolution) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float ring = exp(-pow((r - uRippleSpeed * t) / uRippleThickness, 2.0));
      float attenuation = exp(-t) * exp(-10.0 * r);
      feed = max(feed, ring * attenuation * uRippleIntensity);
    }
  }

  float bw = step(0.5, feed + Bayer8(fragCoord / uPixelSize) - 0.5);
  float randomValue = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float coverage = bw * (1.0 + (randomValue - 0.5) * uPixelJitter);
  float mask;
  if (uShapeType == SHAPE_CIRCLE) mask = maskCircle(pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) mask = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND) mask = maskDiamond(pixelUV, coverage);
  else mask = coverage;

  if (uEdgeFade > 0.0) {
    vec2 normalized = gl_FragCoord.xy / uResolution;
    float edge = min(min(normalized.x, normalized.y), min(1.0 - normalized.x, 1.0 - normalized.y));
    mask *= smoothstep(0.0, uEdgeFade, edge);
  }

  vec3 srgbColor = mix(
    uColor * 12.92,
    1.055 * pow(uColor, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, uColor)
  );
  fragColor = vec4(srgbColor, mask);
}
`;

function createTouchTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('2D context not available');

  const texture = new THREE.Texture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;
  const trail = [];
  let last = null;
  let radius = size * 0.1;

  const update = () => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, size, size);

    for (let index = trail.length - 1; index >= 0; index -= 1) {
      const point = trail[index];
      const force = point.force * (1 / 64) * (1 - point.age / 64);
      point.x += point.vx * force;
      point.y += point.vy * force;
      point.age += 1;
      if (point.age > 64) trail.splice(index, 1);
    }

    trail.forEach((point) => {
      const position = { x: point.x * size, y: (1 - point.y) * size };
      const age = point.age;
      const intensity = age < 19.2
        ? Math.sin((age / 19.2) * Math.PI * 0.5) * point.force
        : (-((1 - (age - 19.2) / 44.8) * ((1 - (age - 19.2) / 44.8) - 2)) || 0) * point.force;
      const color = `${((point.vx + 1) / 2) * 255}, ${((point.vy + 1) / 2) * 255}, ${intensity * 255}`;
      const offset = size * 5;
      context.shadowOffsetX = offset;
      context.shadowOffsetY = offset;
      context.shadowBlur = radius;
      context.shadowColor = `rgba(${color},${0.22 * intensity})`;
      context.beginPath();
      context.fillStyle = 'rgba(255,0,0,1)';
      context.arc(position.x - offset, position.y - offset, radius, 0, Math.PI * 2);
      context.fill();
    });
    texture.needsUpdate = true;
  };

  return {
    texture,
    addTouch(point) {
      let force = 0;
      let vx = 0;
      let vy = 0;
      if (last) {
        const dx = point.x - last.x;
        const dy = point.y - last.y;
        if (dx === 0 && dy === 0) return;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        vx = dx / distance;
        vy = dy / distance;
        force = Math.min((dx * dx + dy * dy) * 10000, 1);
      }
      last = { x: point.x, y: point.y };
      trail.push({ ...point, age: 0, force, vx, vy });
    },
    update,
    setRadiusScale(value) {
      radius = size * 0.1 * value;
    },
    dispose() {
      texture.dispose();
    },
  };
}

function createLiquidEffect(texture, strength, frequency) {
  return new Effect(
    'LiquidEffect',
    `
      uniform sampler2D uTexture;
      uniform float uStrength;
      uniform float uTime;
      uniform float uFreq;
      void mainUv(inout vec2 uv) {
        vec4 tex = texture2D(uTexture, uv);
        float wave = 0.5 + 0.5 * sin(uTime * uFreq + tex.b * 6.2831853);
        uv += (tex.rg * 2.0 - 1.0) * uStrength * tex.b * wave;
      }
    `,
    {
      uniforms: new Map([
        ['uTexture', new THREE.Uniform(texture)],
        ['uStrength', new THREE.Uniform(strength)],
        ['uTime', new THREE.Uniform(0)],
        ['uFreq', new THREE.Uniform(frequency)],
      ]),
    },
  );
}

export default function PixelBlast({
  variant = 'square',
  pixelSize = 3,
  color = '#B497CF',
  className = '',
  patternScale = 2,
  patternDensity = 1,
  pixelSizeJitter = 0,
  enableRipples = true,
  rippleIntensityScale = 1,
  rippleThickness = 0.1,
  rippleSpeed = 0.3,
  liquid = false,
  liquidStrength = 0.1,
  liquidRadius = 1,
  liquidWobbleSpeed = 4.5,
  speed = 0.5,
  edgeFade = 0.5,
  transparent = true,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    if (transparent) renderer.setClearAlpha(0);
    else renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    const uniforms = {
      uResolution: { value: new THREE.Vector2(1, 1) },
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uClickPos: { value: Array.from({ length: MAX_CLICKS }, () => new THREE.Vector2(-1, -1)) },
      uClickTimes: { value: new Float32Array(MAX_CLICKS) },
      uShapeType: { value: SHAPE_MAP[variant] ?? 0 },
      uPixelSize: { value: pixelSize * renderer.getPixelRatio() },
      uScale: { value: patternScale },
      uDensity: { value: patternDensity },
      uPixelJitter: { value: pixelSizeJitter },
      uEnableRipples: { value: enableRipples ? 1 : 0 },
      uRippleSpeed: { value: rippleSpeed },
      uRippleThickness: { value: rippleThickness },
      uRippleIntensity: { value: rippleIntensityScale },
      uEdgeFade: { value: edgeFade },
    };

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
      glslVersion: THREE.GLSL3,
    });
    const quad = new THREE.Mesh(geometry, material);
    scene.add(quad);

    let composer;
    let touchTexture;
    let liquidEffect;
    if (liquid) {
      touchTexture = createTouchTexture();
      touchTexture.setRadiusScale(liquidRadius);
      liquidEffect = createLiquidEffect(touchTexture.texture, liquidStrength, liquidWobbleSpeed);
      composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(scene, camera));
      const effectPass = new EffectPass(camera, liquidEffect);
      effectPass.renderToScreen = true;
      composer.addPass(effectPass);
    }

    const resize = () => {
      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(renderer.domElement.width, renderer.domElement.height);
      uniforms.uPixelSize.value = pixelSize * renderer.getPixelRatio();
      composer?.setSize(renderer.domElement.width, renderer.domElement.height);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const mapPointer = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const scaleX = renderer.domElement.width / rect.width;
      const scaleY = renderer.domElement.height / rect.height;
      const x = (event.clientX - rect.left) * scaleX;
      const y = (rect.height - (event.clientY - rect.top)) * scaleY;
      return { x, y, width: renderer.domElement.width, height: renderer.domElement.height };
    };

    let clickIndex = 0;
    const handlePointerDown = (event) => {
      const { x, y } = mapPointer(event);
      uniforms.uClickPos.value[clickIndex].set(x, y);
      uniforms.uClickTimes.value[clickIndex] = uniforms.uTime.value;
      clickIndex = (clickIndex + 1) % MAX_CLICKS;
    };
    const handlePointerMove = (event) => {
      if (!touchTexture) return;
      const { x, y, width, height } = mapPointer(event);
      touchTexture.addTouch({ x: x / width, y: y / height });
    };
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    const clock = new THREE.Clock();
    const timeOffset = Math.random() * 1000;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrame = 0;
    const renderFrame = () => {
      uniforms.uTime.value = timeOffset + clock.getElapsedTime() * (reducedMotion ? 0 : speed);
      if (liquidEffect) liquidEffect.uniforms.get('uTime').value = uniforms.uTime.value;
      touchTexture?.update();
      if (composer) composer.render();
      else renderer.render(scene, camera);
      if (!reducedMotion) animationFrame = window.requestAnimationFrame(renderFrame);
    };
    renderFrame();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      resizeObserver.disconnect();
      touchTexture?.dispose();
      composer?.dispose();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [
    color,
    edgeFade,
    enableRipples,
    liquid,
    liquidRadius,
    liquidStrength,
    liquidWobbleSpeed,
    patternDensity,
    patternScale,
    pixelSize,
    pixelSizeJitter,
    rippleIntensityScale,
    rippleSpeed,
    rippleThickness,
    speed,
    transparent,
    variant,
  ]);

  return (
    <div
      ref={containerRef}
      className={`pixel-blast-container ${className}`}
      aria-hidden="true"
    />
  );
}
