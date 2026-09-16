import type { Metadata } from 'next';

const title = 'SYNTHETIC MEMORY';
const description = '透明质感与暗色空间构成的 AI 视觉概念作品。';

export const metadata: Metadata = {
  title: `${title} | 杨颖作品集`,
  description,
  openGraph: {
    title: `${title} | 杨颖作品集`,
    description,
    images: ['/project-memory.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | 杨颖作品集`,
    description,
    images: ['/project-memory.png'],
  },
};

export default function SyntheticMemoryProject() {
  return (
    <main className="project-detail-page project-detail-page--ai-visual">
      <header className="project-detail-nav shell">
        <a href="/projects/ai-visual-creation">← 返回AI视觉创作</a>
        <div>
          <span>PROJECT / 01</span>
          <small>AI VISUAL EXPLORATIONS</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-detail-hero shell">
        <div className="project-detail-header">
          <div className="project-detail-title project-detail-title--ai-visual">
            <p>AI VISUAL EXPLORATIONS / 01</p>
            <h1>{title}</h1>
            <div className="project-detail-tags">
              <span><b>01</b>概念探索 · 视觉叙事 · 材质研究</span>
            </div>
          </div>
          <div className="project-detail-copy">
            <span>01 / 作品详情</span>
            <p>透明的地质形态与暗色展陈空间交织，呈现一幅兼具材质层次和未来感的概念视觉。点击图片可放大查看。</p>
          </div>
        </div>

        <figure className="project-detail-hero-frame">
          <img src="/project-memory.png" alt="暗色展厅中的透明地质记忆核心抽象视觉" />
          <figcaption>
            <span>CONCEPT VISUAL / 点击图片放大</span>
            <span>01 — 01</span>
          </figcaption>
        </figure>
      </section>

      <footer className="project-detail-footer shell">
        <span>YANG YING · PORTFOLIO 2026</span>
        <a href="/projects/ai-visual-creation">返回AI视觉创作 ↑</a>
      </footer>
    </main>
  );
}
