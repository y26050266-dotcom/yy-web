type ProjectItem = {
  index: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  className: string;
  label: string;
  href: string | null;
};

const projects: ProjectItem[] = [
  {
    index: '01',
    title: '3D环境设计',
    subtitle: '环境叙事 · 空间构图 · 场景搭建',
    image: '/projects/3d-environment/cover.png',
    alt: '竹林小径与石灯笼构成的中式古寺三维环境场景',
    className: 'project-card project-card--wide',
    label: 'CATEGORY · 3D ENVIRONMENT',
    href: '/projects/3d-environment',
  },
  {
    index: '02',
    title: '道具设计',
    subtitle: '造型设计 · PBR材质 · 细节叙事',
    image: '/project-observatory.png',
    alt: '被苔藓和浅水覆盖的粗野主义天文台概念场景',
    className: 'project-card',
    label: 'CATEGORY · PROP DESIGN',
    href: null,
  },
  {
    index: '03',
    title: 'SYNTHETIC MEMORY',
    subtitle: 'AIGC 实验 · 视觉开发 · 材质研究',
    image: '/project-memory.png',
    alt: '暗色展厅中的透明地质记忆核心抽象视觉',
    className: 'project-card',
    label: 'CONCEPT PLACEHOLDER',
    href: '/projects/synthetic-memory',
  },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  const content = (
    <>
      <img src={project.image} alt={project.alt} loading="lazy" />
      <div className="project-overlay" />
      <div className="project-topline">
        <span>{project.label} / {project.index}</span>
        <span>↗</span>
      </div>
      <div className="project-meta">
        <span>{project.index}</span>
        <div>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
      </div>
    </>
  );

  if (project.href) {
    return (
      <a
        className={project.className}
        href={project.href}
        aria-label={`查看${project.title}`}
      >
        {content}
      </a>
    );
  }

  return <article className={project.className}>{content}</article>;
}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section className="hero" id="top">
        <div className="hero-stage">
          <div className="hero-star-rail hero-star-rail--top" aria-hidden="true">
            ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦
          </div>
            <div className="hero-shade" />
            <div className="scanlines" aria-hidden="true" />

            <header className="site-header hero-shell">
              <a className="terminal-brand" href="#top" aria-label="回到首页">
                <span>YY_OS / PLAYER 01</span>
                <small>PORTFOLIO SYSTEM · 2026</small>
              </a>
              <nav className="main-nav" aria-label="主要导航">
                <a href="#profile">PROFILE</a>
                <a href="#projects">PROJECTS</a>
              </nav>
              <a className="contact-pill" href="mailto:yangying25of@163.com">
                CONTACT ↗
              </a>
            </header>

            <div className="hero-content hero-shell">
              <div className="hero-kicker">
                <span>TOP SCORE: 002026</span>
                <span>PLAYS:000003 · SKILLS:000004</span>
              </div>

              <div className="hero-title-block">
                <div className="arcade-scoreboard">
                  <strong>TOP : 002026</strong>
                  <span>PLAYS : 000003</span>
                  <span>SKILLS : 000004</span>
                </div>
                <div className="arcade-title-panel">
                  <i className="panel-screw panel-screw--tl" aria-hidden="true" />
                  <i className="panel-screw panel-screw--tr" aria-hidden="true" />
                  <i className="panel-screw panel-screw--bl" aria-hidden="true" />
                  <i className="panel-screw panel-screw--br" aria-hidden="true" />
                  <span className="arcade-mascot arcade-mascot--robot" aria-hidden="true">
                    <img src="/pixel-mascots-v1.png" alt="" />
                  </span>
                  <span className="arcade-mascot arcade-mascot--rocket" aria-hidden="true">
                    <img src="/pixel-mascots-v1.png" alt="" />
                  </span>
                  <p className="panel-player">杨颖 · PORTFOLIO 2026</p>
                  <h1 aria-label="PORTFOLIO">
                    <span className="arcade-word">
                      <i>P</i><i>O</i><i>R</i><i>T</i>
                    </span>
                    <span className="arcade-word">
                      <i>F</i><i>O</i><i>L</i><i>I</i><i>O</i>
                    </span>
                  </h1>
                  <div className="title-colorbar" aria-hidden="true">
                    <span /><span /><span /><span /><span /><span />
                  </div>
                </div>
                <h2 className="arcade-subtitle">选择你的关卡</h2>
                <nav className="arcade-menu" aria-label="首屏快捷导航">
                  <a href="#profile"><b>01</b><span>个人经历</span></a>
                  <a href="#projects"><b>02</b><span>精选项目</span></a>
                  <a href="#contact"><b>03</b><span>联系方式</span></a>
                </nav>
                <p className="hero-role">游戏场景设计 · AI 视觉设计 · 3D 建模 · 视觉设计</p>
              </div>

              <div className="hero-bottom">
                <div className="terminal-stat terminal-stat--identity">
                  <span>01 / PROFILE</span>
                  <strong>YANG YING · 杨颖</strong>
                </div>
                <div className="terminal-stat terminal-stat--cn">
                  <span>02 / 专业方向</span>
                  <strong>游戏场景构建 + AIGC</strong>
                </div>
                <div className="terminal-stat terminal-stat--cn">
                  <span>03 / 教育背景</span>
                  <strong>游戏美术设计 · 硕士</strong>
                </div>
                <a className="scroll-cue" href="#profile">
                  开始浏览 <span>↓</span>
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
            <div className="profile-side">
              <figure className="portrait-panel">
                <img
                  src="/avatar.jpg"
                  alt="杨颖个人照片"
                  width="300"
                  height="400"
                />
                <figcaption>
                  <span>YANG YING</span>
                  <span>23 / SHENZHEN</span>
                </figcaption>
              </figure>

              <aside className="skills-panel" aria-labelledby="skills-panel-title">
                <div className="skills-panel__header">
                  <span id="skills-panel-title">SKILLSET / 技能与软件</span>
                  <small>04 类目</small>
                </div>
                <div className="skill-groups">
                  <div className="skill-group">
                    <b>01</b>
                    <div>
                      <h3>3D 设计</h3>
                      <p>Blender · Maya · ZBrush · Substance 3D Painter · Procreate</p>
                    </div>
                  </div>
                  <div className="skill-group">
                    <b>02</b>
                    <div>
                      <h3>AIGC</h3>
                      <p>Midjourney · 即梦 · 可灵 · ChatGPT · Nano Banana</p>
                    </div>
                  </div>
                  <div className="skill-group">
                    <b>03</b>
                    <div>
                      <h3>新媒体运营</h3>
                      <p>抖音 · Instagram · 内容策划 · 摄影 · 短视频运营 · Canva</p>
                    </div>
                  </div>
                  <div className="skill-group">
                    <b>04</b>
                    <div>
                      <h3>视频制作</h3>
                      <p>剪映 · 短视频剪辑 · 基础视觉包装</p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            <div className="profile-story">
              <p className="overline">GAME ART · AI VISUAL · DESIGN</p>
              <h2>
                <span
                  className="profile-title-line"
                  data-text="我用空间、材质与光"
                >
                  我用<span className="accent">空间、材质与光</span>
                </span>
                <span
                  className="profile-title-line"
                  data-text="构建可以被感受的世界"
                >
                  构建可以被感受的<span className="world-word">世界</span>
                </span>
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

          <div className="stats-grid stats-grid--two">
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
            <h2>精选作品</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-wash" />
        <div className="contact-shell shell">
          <div className="section-heading section-heading--contact">
            <div className="section-label">
              <span>04</span>
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
