import type { Metadata } from 'next';

const description = '杨颖的道具设计作品分类页，每个项目均拥有独立的作品详情页。';

export const metadata: Metadata = {
  title: '道具设计 | 杨颖作品集',
  description,
  openGraph: {
    title: '道具设计 | 杨颖作品集',
    description,
    images: ['/projects/prop-design/spherical-scout-drone/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '道具设计 | 杨颖作品集',
    description,
    images: ['/projects/prop-design/spherical-scout-drone/cover.png'],
  },
};

export default function PropDesignProjects() {
  return (
    <main className="project-detail-page project-category-page">
      <header className="project-detail-nav shell">
        <a href="/#projects">← 返回精选作品</a>
        <div>
          <span>CATEGORY / 02</span>
          <small>PROP DESIGN</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-category-hero shell">
        <div className="project-category-header">
          <div className="project-category-title">
            <p>PORTFOLIO CATEGORY / 02</p>
            <h1>道具设计</h1>
          </div>

          <div className="project-category-summary">
            <span>独立作品索引</span>
            <p>
              本分类集中展示造型设计、PBR 材质与道具细节项目。
              每个作品均独立呈现，点击作品卡片即可进入对应的单独详情页。
            </p>
          </div>
        </div>
      </section>

      <section className="project-category-list shell" aria-labelledby="prop-projects-title">
        <div className="project-detail-bar">
          <span>02</span>
          <span id="prop-projects-title">PROP DESIGN / 作品列表</span>
          <small>INDIVIDUAL PROJECT PAGES</small>
        </div>

        <a className="project-category-card" href="/projects/prop-design/project-01">
          <div className="project-category-card-media">
            <img
              src="/projects/prop-design/spherical-scout-drone/cover.png"
              alt="灰黑装甲与蓝色发光组件构成的球形侦察无人机"
            />
            <span>PROP DESIGN / 01</span>
          </div>
          <div className="project-category-card-copy">
            <span className="project-category-card-index">PROJECT / 01</span>
            <h2>球形侦察无人机</h2>
            <p className="project-category-card-tags">硬表面建模 · 材质表现 · 结构细节</p>
            <p>
              以紧凑球形轮廓为核心，通过模块化装甲、分区面板与蓝色发光组件，
              塑造兼具工业质感和未来科技感的侦察装置。
            </p>
            <span className="project-category-card-cta">查看独立详情页 ↗</span>
          </div>
        </a>

        <p className="project-category-note">
          当前收录的每项道具设计作品均可进入各自的独立详情页。
        </p>
      </section>

      <footer className="project-detail-footer shell">
        <span>YANG YING · PORTFOLIO 2026</span>
        <a href="/#projects">返回精选作品 ↑</a>
      </footer>
    </main>
  );
}
