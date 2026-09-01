import type { Metadata } from 'next';

const description = '杨颖的 3D 环境设计作品分类页，每个项目均拥有独立的作品详情页。';

export const metadata: Metadata = {
  title: '3D环境设计 | 杨颖作品集',
  description,
  openGraph: {
    title: '3D环境设计 | 杨颖作品集',
    description,
    images: ['/projects/jungle-temple/hero.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D环境设计 | 杨颖作品集',
    description,
    images: ['/projects/jungle-temple/hero.png'],
  },
};

export default function EnvironmentProjects() {
  return (
    <main className="project-detail-page project-category-page">
      <header className="project-detail-nav shell">
        <a href="/#projects">← 返回精选作品</a>
        <div>
          <span>CATEGORY / 01</span>
          <small>3D ENVIRONMENT</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-category-hero shell">
        <div className="project-category-header">
          <div className="project-category-title">
            <p>PORTFOLIO CATEGORY / 01</p>
            <h1>3D环境设计</h1>
          </div>

          <div className="project-category-summary">
            <span>独立作品索引</span>
            <p>
              本分类集中展示环境叙事、空间构图与场景搭建项目。
              每个作品均独立呈现，点击作品卡片即可进入对应的单独详情页。
            </p>
          </div>
        </div>
      </section>

      <section className="project-category-list shell" aria-labelledby="environment-projects-title">
        <div className="project-detail-bar">
          <span>01</span>
          <span id="environment-projects-title">3D ENVIRONMENT / 作品列表</span>
          <small>INDIVIDUAL PROJECT PAGES</small>
        </div>

        <a className="project-category-card" href="/projects/jungle-temple">
          <div className="project-category-card-media">
            <img
              src="/projects/jungle-temple/hero.png"
              alt="竹林深处被自然侵蚀的中式古寺三维环境场景"
            />
            <span>3D ENVIRONMENT / 01</span>
          </div>
          <div className="project-category-card-copy">
            <span className="project-category-card-index">PROJECT / 01</span>
            <h2>丛林古庙</h2>
            <p className="project-category-card-tags">环境叙事 · 空间构图 · 场景搭建</p>
            <p>
              中式丛林古寺 3D 环境设计，展现自然侵蚀下的废墟与神秘氛围。
              从建模、雕刻与材质，到场景搭建、灯光和最终渲染均独立完成。
            </p>
            <span className="project-category-card-cta">查看独立详情页 ↗</span>
          </div>
        </a>

        <p className="project-category-note">
          后续新增的 3D 环境作品会依次出现在这里，并分别连接至各自的独立详情页。
        </p>
      </section>

      <footer className="project-detail-footer shell">
        <span>YANG YING · PORTFOLIO 2026</span>
        <a href="/#projects">返回精选作品 ↑</a>
      </footer>
    </main>
  );
}
