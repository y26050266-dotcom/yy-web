import type { Metadata } from 'next';

const description =
  '《无人机控制器》是一项融合便携式终端、实体控制模块与未来工业语言的科幻道具设计作品。';

export const metadata: Metadata = {
  title: '无人机控制器 | 杨颖作品集',
  description,
  openGraph: {
    title: '无人机控制器 | 杨颖作品集',
    description,
    images: ['/projects/prop-design/drone-controller/cover.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '无人机控制器 | 杨颖作品集',
    description,
    images: ['/projects/prop-design/drone-controller/cover.webp'],
  },
};

const gallery = [
  {
    src: '/projects/prop-design/drone-controller/front-three-quarter.webp',
    alt: '无人机控制器正面三分之四视图',
    label: '正面三分之四视图 / 02',
  },
  {
    src: '/projects/prop-design/drone-controller/front-view.webp',
    alt: '无人机控制器正面视图',
    label: '正面视图 / 03',
  },
  {
    src: '/projects/prop-design/drone-controller/side-three-quarter.webp',
    alt: '无人机控制器侧面三分之四视图',
    label: '侧面三分之四视图 / 04',
  },
];

const detailGallery = [
  {
    src: '/projects/prop-design/drone-controller/detail-screen.webp',
    alt: '无人机控制器屏幕界面细节',
    label: '屏幕界面 / 01',
  },
  {
    src: '/projects/prop-design/drone-controller/detail-controls.webp',
    alt: '无人机控制器控制模块细节',
    label: '控制模块 / 02',
  },
  {
    src: '/projects/prop-design/drone-controller/detail-power.webp',
    alt: '无人机控制器电源按键细节',
    label: '电源按键 / 03',
  },
  {
    src: '/projects/prop-design/drone-controller/detail-joystick.webp',
    alt: '无人机控制器操控摇杆与麦克风细节',
    label: '摇杆与麦克风 / 04',
  },
];

const responsibilities = ['造型设计', '硬表面建模', '材质表现', '屏幕界面', '灯光', '渲染'];

export default function DroneControllerProject() {
  return (
    <main className="project-detail-page project-detail-page--controller">
      <header className="project-detail-nav shell">
        <a href="/projects/prop-design">← 返回道具设计</a>
        <div>
          <span>PROJECT / 02</span>
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

      <section className="project-detail-gallery project-detail-gallery--no-bar shell" aria-labelledby="controller-gallery-title">
        <div className="project-detail-gallery-intro">
          <h2 id="controller-gallery-title">无人机<br />控制器</h2>
          <div className="project-detail-gallery-copy">
            <p>以便携式无人机控制终端为核心，将显示屏、实体操控组件、信号天线与硬表面护甲整合为分区清晰的设备造型，突出工业结构、操作逻辑与未来科技感。</p>
            <div className="project-detail-software">
              <span>使用软件</span>
              <ul>
                <li>Maya</li>
                <li>ZBrush</li>
                <li>Substance 3D Painter</li>
                <li>procreate</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project-detail-gallery-grid project-detail-controller-grid">
          <figure className="project-detail-shot project-detail-shot--controller project-detail-shot--featured">
            <img
              src="/projects/prop-design/drone-controller/cover.webp"
              alt="无人机控制器主视觉"
            />
            <figcaption>机体主视图 / 01</figcaption>
          </figure>

          {gallery.map((item) => (
            <figure className="project-detail-shot project-detail-shot--controller" key={item.src}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="project-detail-closeups shell" aria-labelledby="controller-detail-title">
        <h3 id="controller-detail-title">细节特写</h3>
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
