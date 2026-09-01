const projects = [
  {
    index: '01',
    title: 'MONOLITH FIELD',
    subtitle: '场景构建 · 氛围灯光 · PBR 材质',
    image: '/project-monolith.png',
    alt: '黑色巨型科幻建筑矗立在潮湿平原上的概念场景',
    className: 'project-card project-card--wide',
  },
  {
    index: '02',
    title: 'THE LAST OBSERVATORY',
    subtitle: '环境叙事 · 废墟材质 · 空间构图',
    image: '/project-observatory.png',
    alt: '被苔藓和浅水覆盖的粗野主义天文台概念场景',
    className: 'project-card',
  },
  {
    index: '03',
    title: 'SYNTHETIC MEMORY',
    subtitle: 'AIGC 实验 · 视觉开发 · 材质研究',
    image: '/project-memory.png',
    alt: '暗色展厅中的透明地质记忆核心抽象视觉',
    className: 'project-card',
  },
];

const strengths = [
  {
    index: '01',
    title: '3D ENVIRONMENT',
    cn: '游戏场景与资产制作',
    description:
      '从空间白盒、环境资产到最终场景，兼顾画面构图、尺度关系与叙事氛围。',
    tools: ['Blender', 'Maya', 'ZBrush'],
  },
  {
    index: '02',
    title: 'MATERIAL & LIGHT',
    cn: '材质与灯光氛围',
    description:
      '理解 PBR 材质逻辑，通过表面细节、色彩与光影建立可信且有情绪的空间。',
    tools: ['Substance 3D Painter', 'PBR', 'Lighting'],
  },
  {
    index: '03',
    title: 'AI VISUAL',
    cn: 'AIGC 视觉开发',
    description:
      '将 AI 生成融入 3D 设计流程，用于场景概念、画面探索与短内容创作。',
    tools: ['Midjourney', '即梦 AI', '可灵 AI'],
  },
  {
    index: '04',
    title: 'VISUAL STORY',
    cn: '视觉叙事与内容表达',
    description:
      '以构图、摄影、色彩和剪辑组织视觉信息，让场景拥有明确的观看节奏。',
    tools: ['Photography', '剪映', 'Visual Design'],
  },
];

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section className="hero" id="top">
        <div className="hero-stage">
          <div className="hero-star-rail hero-star-rail--top" aria-hidden="true">
            ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦
          </div>
            <video
              className="hero-media"
              autoPlay
              muted
              loop
              playsInline
              poster="/project-monolith.png"
              aria-hidden="true"
            >
              <source src="/hero-loop.mp4" type="video/mp4" />
            </video>
            <img
              className="hero-console"
              src="/hero-console-v1.png"
              alt="复古未来风格的便携游戏机插画"
            />
            <div className="hero-shade" />
            <div className="scanlines" aria-hidden="true" />

            <header className="site-header hero-shell">
              <a className="terminal-brand" href="#top" aria-label="回到首页">
                <span>YY® / 2026</span>
                <small>GAME ART &amp; VISUAL DESIGN</small>
              </a>
              <nav className="main-nav" aria-label="主要导航">
                <a href="#profile">PROFILE</a>
                <a href="#projects">PROJECTS</a>
                <a href="#strengths">CAPABILITIES</a>
              </nav>
              <a className="contact-pill" href="mailto:yangying25of@163.com">
                CONTACT ↗
              </a>
            </header>

            <div className="hero-content hero-shell">
              <div className="hero-kicker">
                <span>NICE TO E-MEET YOU!</span>
                <span>SHENZHEN, CN · AVAILABLE FOR WORK</span>
              </div>

              <div className="hero-title-block">
                <p className="hero-year">DESIGN PORTFOLIO <span>20—26</span></p>
                <h1>
                  <span>PORT</span>
                  <span>FOLIO</span>
                </h1>
                <p className="hero-about">ABOUT YANG YING / 杨颖</p>
                <p className="hero-role">
                  GAME ENVIRONMENT / AI VISUAL<br />3D MODELING / VISUAL DESIGN
                </p>
                <a className="hero-enter" href="#projects">
                  VIEW SELECTED WORK <span>↘</span>
                </a>
              </div>

              <div className="hero-bottom">
                <div className="terminal-stat">
                  <span>01 / PROFILE</span>
                  <strong>YANG YING · 杨颖</strong>
                </div>
                <div className="terminal-stat">
                  <span>02 / FOCUS</span>
                  <strong>WORLD BUILDING + AIGC</strong>
                </div>
                <div className="terminal-stat">
                  <span>03 / EDUCATION</span>
                  <strong>GAME ART DESIGN · MA</strong>
                </div>
                <a className="scroll-cue" href="#profile">
                  SCROLL TO EXPLORE <span>↓</span>
                </a>
              </div>
            </div>

            <div className="hero-index" aria-hidden="true">
              GAME WORLDS / VISUAL SYSTEM<span>—01</span>
            </div>
          <div className="hero-star-rail hero-star-rail--bottom" aria-hidden="true">
            ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦
          </div>
        </div>
      </section>

      <section className="profile-section section-pad" id="profile">
        <div className="shell">
          <div className="section-heading">
            <div className="section-label">
              <span>02</span>
              <span>PROFILE / 个人经历</span>
            </div>
            <p>基于简历信息整理 · 2026</p>
          </div>

          <div className="profile-grid">
            <figure className="portrait-panel">
              <img
                src="/avatar.jpg"
                alt="杨颖简历中使用的猫咪头像"
                width="200"
                height="200"
              />
              <figcaption>
                <span>YANG YING</span>
                <span>23 / SHENZHEN</span>
              </figcaption>
            </figure>

            <div className="profile-story">
              <p className="overline">GAME ART · AI VISUAL · DESIGN</p>
              <h2>
                我用<span>空间、材质与光</span>
                <br />
                构建可以被感受的世界。
              </h2>
              <p className="lead">
                目前就读于英国赫特福德大学游戏美术设计硕士，拥有动画与游戏美术背景。
                我关注环境资产、PBR 材质与灯光叙事，也在持续探索 AIGC 与 3D
                设计结合的视觉工作流。
              </p>

              <div className="profile-facts">
                <div>
                  <span>EDUCATION / 01</span>
                  <strong>赫特福德大学</strong>
                  <p>游戏美术设计 · 硕士</p>
                  <small>2025—2027 · 专业前 10%</small>
                </div>
                <div>
                  <span>EDUCATION / 02</span>
                  <strong>河北美术学院</strong>
                  <p>动画 · 本科</p>
                  <small>2021—2025 · 专业前 10%</small>
                </div>
                <div>
                  <span>CONTACT</span>
                  <strong>yangying25of@163.com</strong>
                  <p>136 8957 2668</p>
                  <small>期待城市 · 深圳</small>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <strong>02<span>×</span></strong>
              <p>两个学习阶段<br />专业排名前 10%</p>
            </div>
            <div className="stat-item">
              <strong>03<span>+</span></strong>
              <p>3D · AIGC · 视觉<br />跨方向创作能力</p>
            </div>
            <div className="stat-item">
              <strong>10<span>+</span></strong>
              <p>软件与创作工具<br />覆盖完整视觉链路</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section section-pad" id="projects">
        <div className="shell">
          <div className="section-heading section-heading--light">
            <div className="section-label">
              <span>03</span>
              <span>SELECTED PROJECTS / 精选项目</span>
            </div>
            <p>VISUAL CONCEPT PLACEHOLDERS</p>
          </div>

          <div className="projects-intro">
            <h2>
              SELECTED
              <br />
              <span>WORKS.</span>
            </h2>
            <p>
              当前作品图为基础版概念占位，用于确认网站的视觉方向与版式。
              后续替换为你的真实项目图、过程图与项目说明。
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={project.className} key={project.title}>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <div className="project-overlay" />
                <div className="project-topline">
                  <span>CONCEPT PLACEHOLDER / {project.index}</span>
                  <span>↗</span>
                </div>
                <div className="project-meta">
                  <span>{project.index}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="strengths-section section-pad" id="strengths">
        <div className="shell">
          <div className="section-heading">
            <div className="section-label">
              <span>04</span>
              <span>CAPABILITIES / 个人优势</span>
            </div>
            <p>HOW I BUILD VISUALS</p>
          </div>

          <div className="strengths-intro">
            <h2>
              A HYBRID
              <br />
              <span>CREATIVE TOOLKIT.</span>
            </h2>
            <p>
              从场景资产到最终画面，我在技术执行与视觉表达之间建立连接，
              让工具服务于氛围、叙事与清晰的设计意图。
            </p>
          </div>

          <div className="strength-grid">
            {strengths.map((strength) => (
              <article className="strength-card" key={strength.index}>
                <div className="strength-number">{strength.index}</div>
                <div className="strength-glyph" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <h3>{strength.title}</h3>
                <h4>{strength.cn}</h4>
                <p>{strength.description}</p>
                <div className="tool-list">
                  {strength.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <img
          className="contact-image"
          src="/project-memory.png"
          alt=""
          aria-hidden="true"
        />
        <div className="contact-wash" />
        <div className="contact-shell shell">
          <div className="section-heading section-heading--contact">
            <div className="section-label">
              <span>05</span>
              <span>CONTACT / 联系方式</span>
            </div>
            <p>AVAILABLE FOR OPPORTUNITIES</p>
          </div>

          <div className="contact-main">
            <p>有新的场景、视觉或 AI 创意想法？</p>
            <h2>
              LET&apos;S MAKE
              <br />
              SOMETHING <span>UNREAL.</span>
            </h2>
            <a href="mailto:yangying25of@163.com" className="email-link">
              <span>yangying25of@163.com</span>
              <i>↗</i>
            </a>
          </div>

          <footer className="site-footer">
            <div>
              <span>BASE</span>
              <strong>SHENZHEN · CN</strong>
            </div>
            <div>
              <span>PHONE</span>
              <a href="tel:+8613689572668">+86 136 8957 2668</a>
            </div>
            <p>© 2026 YANG YING PORTFOLIO</p>
            <a className="back-top" href="#top">
              BACK TO TOP ↑
            </a>
          </footer>
        </div>
      </section>
    </main>
  );
}
