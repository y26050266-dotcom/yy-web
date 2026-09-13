import type { Metadata } from 'next';

const description =
  '《深海·窒息》是一项以幽暗海底、废弃机械与压迫氛围为核心的 3D 环境设计作品。';

export const metadata: Metadata = {
  title: '深海·窒息 | 杨颖作品集',
  description,
  openGraph: {
    title: '深海·窒息 | 杨颖作品集',
    description,
    images: ['/projects/deep-sea-asphyxia/scene-01.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '深海·窒息 | 杨颖作品集',
    description,
    images: ['/projects/deep-sea-asphyxia/scene-01.png'],
  },
};

const gallery = [
  {
    src: '/projects/deep-sea-asphyxia/deep-sea-film.mp4',
    poster: '/projects/deep-sea-asphyxia/scene-01.png',
    alt: '深海·窒息三维环境项目展示视频',
    label: '项目影像 / 01',
    featured: true,
  },
  {
    src: '/projects/deep-sea-asphyxia/scene-01.png',
    alt: '幽暗海底中游弋生物与废弃机械构成的深海场景',
    label: '深海环境 / 02',
    featured: false,
  },
  {
    src: '/projects/deep-sea-asphyxia/scene-02.png',
    alt: '被海底岩壁包围的废弃机械残骸',
    label: '机械残骸 / 03',
    featured: false,
  },
  {
    src: '/projects/deep-sea-asphyxia/scene-03.png',
    alt: '深海灯具与鱼群形成的局部生物细节',
    label: '生物细节 / 04',
    featured: false,
  },
  {
    src: '/projects/deep-sea-asphyxia/scene-04.png',
    alt: '冷色光线笼罩下的幽暗海底空间',
    label: '幽暗空间 / 05',
    featured: false,
  },
];

const responsibilities = ['建模', '雕刻', '材质', '场景搭建', '灯光', '最终渲染'];

export default function DeepSeaAsphyxiaProject() {
  return (
    <main className="project-detail-page">
      <header className="project-detail-nav shell">
        <a href="/projects/3d-environment">← 返回3D环境设计</a>
        <div>
          <span>PROJECT / 03</span>
          <small>3D ENVIRONMENT</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-detail-hero shell">
        <div className="project-detail-header project-detail-header--compact">
          <div className="project-detail-title">
            <p>3D ENVIRONMENT · PERSONAL PROJECT</p>
            <div className="project-detail-tags" aria-label="项目职责">
              {responsibilities.map((item, index) => (
                <span key={item}><b>{String(index + 1).padStart(2, '0')}</b>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="project-detail-gallery project-detail-gallery--no-bar shell" aria-labelledby="gallery-title">
        <div className="project-detail-gallery-intro">
          <h2 id="gallery-title">深海·窒息</h2>
          <div className="project-detail-gallery-copy">
            <p>以海洋污染为主题，通过被海洋污染导致变异的机械鱼与海洋垃圾，以及幽暗光影构建压迫性的深海环境，呈现污染对海洋生态造成的持续伤害。</p>
            <div className="project-detail-software" aria-label="项目使用软件">
              <span>SOFTWARE / 使用软件</span>
              <ul>
                <li>Blender</li>
                <li>Maya</li>
                <li>ZBrush</li>
                <li>Substance 3D Painter</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project-detail-gallery-grid">
          {gallery.map((item) => (
            <figure
              className={`project-detail-shot${item.featured ? ' project-detail-shot--featured' : ''}`}
              key={item.src}
            >
              {'poster' in item ? (
                <video
                  aria-label={item.alt}
                  autoPlay
                  controls
                  loop
                  muted
                  playsInline
                  poster={item.poster}
                  preload="metadata"
                >
                  <source src={item.src} type="video/mp4" />
                  您的浏览器暂不支持视频播放。
                </video>
              ) : (
                <img src={item.src} alt={item.alt} loading="lazy" />
              )}
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="project-detail-footer shell">
        <span>YANG YING · PORTFOLIO 2026</span>
        <a href="/projects/3d-environment">返回3D环境作品 ↑</a>
      </footer>
    </main>
  );
}
