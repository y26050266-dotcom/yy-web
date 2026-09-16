import type { Metadata } from 'next';

const description = '杨颖的 AI 视觉创作分类页，展示概念探索、视觉叙事与 AIGC 创作项目。';

export const metadata: Metadata = {
  title: 'AI视觉创作 | 杨颖作品集',
  description,
  openGraph: {
    title: 'AI视觉创作 | 杨颖作品集',
    description,
    images: ['/projects/ai-visual-creation/epic-fantasy/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI视觉创作 | 杨颖作品集',
    description,
    images: ['/projects/ai-visual-creation/epic-fantasy/cover.png'],
  },
};

export default function AiVisualCreationProjects() {
  return (
    <main className="project-detail-page project-category-page project-category-page--ai-visual">
      <header className="project-detail-nav shell">
        <a href="/#projects">← 返回精选作品</a>
        <div>
          <span>CATEGORY / 03</span>
          <small>AI VISUAL EXPLORATIONS</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-category-hero shell">
        <div className="project-category-header">
          <div className="project-category-title">
            <p>PORTFOLIO CATEGORY / 03</p>
            <h1>AI视觉创作</h1>
          </div>
          <div className="project-category-summary">
            <span>AI VISUAL EXPLORATIONS</span>
            <p>围绕概念探索、视觉叙事与 AIGC 创作展开的视觉作品。点击下方项目卡片，进入独立详情页查看画面。</p>
          </div>
        </div>
      </section>

      <section className="project-category-list shell" aria-labelledby="ai-visual-projects-title">
        <div className="project-detail-bar">
          <span>03</span>
          <span id="ai-visual-projects-title">AI VISUAL EXPLORATIONS / 作品列表</span>
          <small>INDIVIDUAL PROJECT PAGES</small>
        </div>

        <a className="project-category-card" href="/projects/synthetic-memory">
          <div className="project-category-card-media">
            <img src="/projects/ai-visual-creation/epic-fantasy/cover.png" alt="骑士骑马奔向喷火巨龙与燃烧的城邦" />
            <span>AI VISUAL EXPLORATIONS / 01</span>
          </div>
          <div className="project-category-card-copy">
            <span className="project-category-card-index">PROJECT / 01</span>
            <h2>史诗幻想</h2>
            <p className="project-category-card-tags">巨龙 · 战场 · 冰雪</p>
            <p>以火焰战场与冰雪荒原为两组视觉场景，呈现巨龙主题的史诗幻想氛围。</p>
            <span className="project-category-card-cta">查看独立详情页 ↗</span>
          </div>
        </a>

        <a className="project-category-card" href="/projects/cloud-heaven">
          <div className="project-category-card-media">
            <img src="/projects/ai-visual-creation/cloud-heaven/cover.png" alt="云海与群山之间的白色石雕天门" loading="lazy" />
            <span>AI VISUAL EXPLORATIONS / 02</span>
          </div>
          <div className="project-category-card-copy">
            <span className="project-category-card-index">PROJECT / 02</span>
            <h2>云上天境</h2>
            <p className="project-category-card-tags">云海 · 宫阙 · 飞瀑</p>
            <p>白色天门、云上宫阙与悬空山峦，构成明亮恢宏的东方幻想世界。</p>
            <span className="project-category-card-cta">查看独立详情页 ↗</span>
          </div>
        </a>
      </section>

      <footer className="project-detail-footer shell">
        <span>YANG YING · PORTFOLIO 2026</span>
        <a href="/#projects">返回精选作品 ↑</a>
      </footer>
    </main>
  );
}
