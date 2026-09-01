import type { Metadata } from 'next';

const description =
  '《丛林古庙》是一项中式丛林古寺 3D 环境设计，展现自然侵蚀下的废墟与神秘氛围。';

export const metadata: Metadata = {
  title: '丛林古庙 | 杨颖作品集',
  description,
  openGraph: {
    title: '丛林古庙 | 杨颖作品集',
    description,
    images: ['/projects/jungle-temple/hero.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '丛林古庙 | 杨颖作品集',
    description,
    images: ['/projects/jungle-temple/hero.png'],
  },
};

const gallery = [
  {
    src: '/projects/jungle-temple/hero.png',
    alt: '竹林深处被自然侵蚀的中式古寺三维环境主视觉',
    label: '主视觉 / 01',
    featured: true,
  },
  {
    src: '/projects/jungle-temple/scene-01.png',
    alt: '竹林小径与石灯笼构成的古寺入口场景',
    label: '环境氛围 / 02',
    featured: false,
  },
  {
    src: '/projects/jungle-temple/scene-02.png',
    alt: '竹叶遮挡下的中式古寺钟楼场景',
    label: '空间层次 / 03',
    featured: false,
  },
  {
    src: '/projects/jungle-temple/scene-03.png',
    alt: '竹林环绕的古寺建筑群俯视场景',
    label: '建筑细节 / 04',
    featured: false,
  },
  {
    src: '/projects/jungle-temple/scene-04.png',
    alt: '自然侵蚀中的中式双层古寺建筑场景',
    label: '材质与光 / 05',
    featured: false,
  },
];

const responsibilities = ['建模', '雕刻', '材质', '场景搭建', '灯光', '最终渲染'];

export default function JungleTempleProject() {
  return (
    <main className="project-detail-page">
      <header className="project-detail-nav shell">
        <a href="/projects/3d-environment">← 返回3D环境设计</a>
        <div>
          <span>PROJECT / 01</span>
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

      <section className="project-detail-gallery shell" aria-labelledby="gallery-title">
        <div className="project-detail-bar">
          <span>02</span>
          <span>SCENE GALLERY / 场景展示</span>
          <small>FINAL RENDERS</small>
        </div>

        <div className="project-detail-gallery-intro">
          <h2 id="gallery-title">废墟、竹林<br />与光的叙事</h2>
          <p>通过建筑层级、自然遮挡与冷暖光线组织视线，让古寺在潮湿竹林中保持神秘而可信的空间<span className="project-detail-no-break">氛围</span>。</p>
        </div>

        <div className="project-detail-gallery-grid">
          {gallery.map((image) => (
            <figure
              className={`project-detail-shot${image.featured ? ' project-detail-shot--featured' : ''}`}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
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
