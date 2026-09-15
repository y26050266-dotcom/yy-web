import type { Metadata } from 'next';

const description =
  '《球形侦察无人机》是一项以球形机体、模块化装甲与蓝色发光组件为核心的科幻道具设计作品。';

export const metadata: Metadata = {
  title: '球形侦察无人机 | 杨颖作品集',
  description,
  openGraph: {
    title: '球形侦察无人机 | 杨颖作品集',
    description,
    images: ['/projects/prop-design/spherical-scout-drone/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '球形侦察无人机 | 杨颖作品集',
    description,
    images: ['/projects/prop-design/spherical-scout-drone/cover.png'],
  },
};

const gallery = [
  {
    src: '/projects/prop-design/spherical-scout-drone/front.png',
    alt: '球形侦察无人机正面结构渲染',
    label: '正面结构 / 02',
  },
  {
    src: '/projects/prop-design/spherical-scout-drone/top.png',
    alt: '球形侦察无人机底部结构渲染',
    label: '底部结构 / 03',
  },
  {
    src: '/projects/prop-design/spherical-scout-drone/cover.png',
    alt: '灰黑装甲与蓝色发光组件构成的球形侦察无人机主视觉',
    label: '机体主视图 / 04',
  },
  {
    src: '/projects/prop-design/spherical-scout-drone/rear.png',
    alt: '球形侦察无人机顶部发光结构渲染',
    label: '顶部结构 / 05',
  },
];

const detailGallery = [
  {
    src: '/projects/prop-design/spherical-scout-drone/detail-sensor.png',
    alt: '球形侦察无人机侧面蓝色感应器细节',
    label: '侧面感应器 / 01',
  },
  {
    src: '/projects/prop-design/spherical-scout-drone/detail-thruster.png',
    alt: '球形侦察无人机底部推进组件细节',
    label: '底部推进组件 / 02',
  },
  {
    src: '/projects/prop-design/spherical-scout-drone/detail-body.png',
    alt: '球形侦察无人机机身标识与金属材质细节',
    label: '机身标识与材质 / 03',
  },
  {
    src: '/projects/prop-design/spherical-scout-drone/detail-light-vents.png',
    alt: '球形侦察无人机侧舷照明与散热结构细节',
    label: '侧舷照明结构 / 04',
  },
];

const responsibilities = ['造型设计', '硬表面建模', '材质表现', '结构细节', '灯光', '渲染'];

export default function SphericalScoutDroneProject() {
  return (
    <main className="project-detail-page">
      <header className="project-detail-nav shell">
        <a href="/projects/prop-design">← 返回道具设计</a>
        <div>
          <span>PROJECT / 01</span>
          <small>PROP DESIGN</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-detail-hero shell">
        <div className="project-detail-header project-detail-header--compact">
          <div className="project-detail-title">
            <p>PROP DESIGN · PERSONAL PROJECT</p>
            <div className="project-detail-tags" aria-label="项目内容">
              {responsibilities.map((item, index) => (
                <span key={item}><b>{String(index + 1).padStart(2, '0')}</b>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="project-detail-gallery project-detail-gallery--no-bar shell" aria-labelledby="prop-gallery-title">
        <div className="project-detail-gallery-intro">
          <h2 id="prop-gallery-title">球形侦察<br />无人机</h2>
          <div className="project-detail-gallery-copy">
            <p>以紧凑的球形轮廓为核心，将灰黑金属装甲、模块化分区与蓝色发光组件整合为统一的视觉语言，突出侦察装置的工业质感、结构层级与未来科技感。</p>
          </div>
        </div>

        <div className="project-detail-gallery-grid">
          <figure className="project-detail-shot project-detail-shot--prop project-detail-shot--featured">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/projects/prop-design/spherical-scout-drone/perspective.png"
              aria-label="球形侦察无人机 360 度旋转展示"
            >
              <source src="/projects/prop-design/spherical-scout-drone/turntable.mp4" type="video/mp4" />
            </video>
            <figcaption>360° 旋转展示 / 01</figcaption>
          </figure>

          {gallery.map((item) => (
            <figure
              className="project-detail-shot project-detail-shot--prop"
              key={item.src}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="project-detail-closeups shell" aria-labelledby="prop-detail-title">
        <h3 id="prop-detail-title">细节特写</h3>
        <div className="project-detail-closeup-grid">
          {detailGallery.map((item) => (
            <figure className="project-detail-shot project-detail-shot--closeup" key={item.src}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="project-detail-footer shell">
        <span>YANG YING · PORTFOLIO 2026</span>
        <a href="/projects/prop-design">返回道具设计作品 ↑</a>
      </footer>
    </main>
  );
}
