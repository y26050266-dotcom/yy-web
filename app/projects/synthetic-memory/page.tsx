import type { Metadata } from 'next';

const title = '史诗幻想';
const description = '巨龙、火焰战场与冰雪荒原构成的史诗幻想视觉作品。';

export const metadata: Metadata = {
  title: `${title} | 杨颖作品集`,
  description,
  openGraph: {
    title: `${title} | 杨颖作品集`,
    description,
    images: ['/projects/ai-visual-creation/epic-fantasy/cover.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | 杨颖作品集`,
    description,
    images: ['/projects/ai-visual-creation/epic-fantasy/cover.webp'],
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
              <span><b>01</b>巨龙 · 战场 · 冰雪</span>
            </div>
          </div>
          <div className="project-detail-copy">
            <span>01 / 作品详情</span>
            <p>以巨龙、战争与毁灭中的城邦为核心意象，探索西方史诗幻想世界中的规模感、冲突感与电影化构图。通过强烈的冷暖对比、火焰、烟雾与大场景叙事，尝试塑造具有压迫感和沉浸感的幻想战争氛围。</p>
            <div className="project-detail-software">
              <span>使用软件</span>
              <ul><li>ChatGPT</li><li>Midjourney</li></ul>
            </div>
          </div>
        </div>

        <figure className="project-detail-hero-frame">
          <img src="/projects/ai-visual-creation/epic-fantasy/cover.webp" alt="骑士骑马奔向喷火巨龙与燃烧的城邦" />
          <figcaption>
            <span>史诗幻想 / 封面画面</span>
            <span>01 — 03</span>
          </figcaption>
        </figure>
      </section>

      <section className="project-detail-gallery project-detail-gallery--no-bar shell" aria-label="史诗幻想作品画面">
        <div className="project-detail-gallery-grid">
          <figure className="project-detail-shot">
            <img src="/projects/ai-visual-creation/epic-fantasy/icefront.webp" alt="巨龙飞越冰雪荒原与行军队伍" loading="lazy" />
            <figcaption>冰雪荒原 / 02</figcaption>
          </figure>
          <figure className="project-detail-shot">
            <img src="/projects/ai-visual-creation/epic-fantasy/rider.webp" alt="巨龙向战场喷吐火焰" loading="lazy" />
            <figcaption>烈焰战场 / 03</figcaption>
          </figure>
        </div>
      </section>

      <footer className="project-detail-footer shell">
        <span>YANG YING · PORTFOLIO 2026</span>
        <a href="/projects/ai-visual-creation">返回AI视觉创作 ↑</a>
      </footer>
    </main>
  );
}
