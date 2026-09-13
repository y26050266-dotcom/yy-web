import type { Metadata } from 'next';

const description =
  '《雾界霓城》是一项围绕未来都市、体积雾与霓虹光影展开的 3D 环境设计作品。';

export const metadata: Metadata = {
  title: '雾界霓城 | 杨颖作品集',
  description,
  openGraph: {
    title: '雾界霓城 | 杨颖作品集',
    description,
    images: ['/projects/mist-neon-city/colorful-01.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '雾界霓城 | 杨颖作品集',
    description,
    images: ['/projects/mist-neon-city/colorful-01.jpg'],
  },
};

const gallery = [
  {
    src: '/projects/mist-neon-city/colorful-01.jpg',
    alt: '云雾与霓虹包围的未来城市全景',
    label: '彩色氛围 / 01',
  },
  {
    src: '/projects/mist-neon-city/colorful-02.jpg',
    alt: '霓虹广告牌与漂浮建筑构成的未来城市视角',
    label: '霓虹构图 / 02',
  },
  {
    src: '/projects/mist-neon-city/shadow-01.png',
    alt: '强烈明暗对比中的未来城市建筑体块',
    label: '光影研究 / 03',
  },
  {
    src: '/projects/mist-neon-city/shadow-02.png',
    alt: '被体积光切割的黑色城市天际线',
    label: '城市剪影 / 04',
  },
  {
    src: '/projects/mist-neon-city/shadow-03.png',
    alt: '冷色光线中的高密度未来建筑群',
    label: '体积层次 / 05',
  },
];

const responsibilities = ['场景搭建', '材质', '灯光', '空间构图', '雾效', '最终渲染'];

export default function MistNeonCityProject() {
  return (
    <main className="project-detail-page">
      <header className="project-detail-nav shell">
        <a href="/projects/3d-environment">← 返回3D环境设计</a>
        <div>
          <span>PROJECT / 02</span>
          <small>3D ENVIRONMENT</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-detail-hero shell">
        <div className="project-detail-header project-detail-header--compact">
          <div className="project-detail-title">
            <p>3D ENVIRONMENT · LIGHT AND SHADOW</p>
            <div className="project-detail-tags" aria-label="项目职责">
              {responsibilities.map((item, index) => (
                <span key={item}>
                  <b>{String(index + 1).padStart(2, '0')}</b>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="project-detail-gallery project-detail-gallery--no-bar shell"
        aria-labelledby="mist-neon-gallery-title"
      >
        <div className="project-detail-gallery-intro">
          <h2 id="mist-neon-gallery-title">雾海、霓虹<br />与未来都市</h2>
          <div className="project-detail-gallery-copy">
            <p>
              通过高密度建筑体块、漂浮雾层与冷暖霓虹组织空间，在彩色氛围和黑白光影之间，
              探索一座介于现实与虚拟之间的未来城市。
            </p>
            <div className="project-detail-software" aria-label="项目使用软件">
              <span>SOFTWARE / 使用软件</span>
              <ul>
                <li>Blender</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="project-detail-gallery-grid mist-neon-gallery-grid">
          {gallery.map((image, index) => (
            <figure
              className={`project-detail-shot mist-neon-shot mist-neon-shot--${index < 2 ? 'color' : 'shadow'}`}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'} />
              <figcaption>{image.label}</figcaption>
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
