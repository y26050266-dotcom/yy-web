import type { Metadata } from 'next';

const description = '杨颖的道具设计作品分类页，每个项目均拥有独立的作品详情页。';

export const metadata: Metadata = {
  title: '道具设计 | 杨颖作品集',
  description,
  openGraph: {
    title: '道具设计 | 杨颖作品集',
    description,
    images: ['/project-observatory.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '道具设计 | 杨颖作品集',
    description,
    images: ['/project-observatory.png'],
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
              src="/project-observatory.png"
              alt="道具设计专栏的临时封面图"
            />
            <span>PROP DESIGN / 01</span>
          </div>
          <div className="project-category-card-copy">
            <span className="project-category-card-index">PROJECT / 01</span>
            <h2>道具设计项目 01</h2>
            <p className="project-category-card-tags">造型设计 · PBR材质 · 细节叙事</p>
            <p>
              已建立可独立浏览的道具项目页面。项目名称、真实封面、制作过程与成品图
              将在作品素材确定后替换，不与其他项目混用。
            </p>
            <span className="project-category-card-cta">查看独立详情页 ↗</span>
          </div>
        </a>

        <p className="project-category-note">
          道具作品素材补充后，可继续增加项目卡片与对应的独立详情页。
        </p>
      </section>

      <footer className="project-detail-footer shell">
        <span>YANG YING · PORTFOLIO 2026</span>
        <a href="/#projects">返回精选作品 ↑</a>
      </footer>
    </main>
  );
}
