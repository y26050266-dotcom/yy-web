import type { Metadata } from 'next';

const title = '史诗幻想';
const description = '巨龙、火焰战场与冰雪荒原构成的史诗幻想视觉作品。';

export const metadata: Metadata = {
  title: `${title} | 杨颖作品集`,
  description,
  openGraph: {
    title: `${title} | 杨颖作品集`,
    description,
    images: ['/projects/ai-visual-creation/epic-fantasy/cover.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | 杨颖作品集`,
    description,
    images: ['/projects/ai-visual-creation/epic-fantasy/cover.png'],
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
            <p>以火焰战场和冰雪荒原呈现巨龙主题的两种氛围。点击画面可放大查看。</p>
          </div>
        </div>

        <figure className="project-detail-hero-frame">
          <img src="/projects/ai-visual-creation/epic-fantasy/cover.png" alt="喷火巨龙掠过史诗幻想战场" />
          <figcaption>
            <span>史诗幻想 / 封面画面</span>
            <span>01 — 03</span>
          </figcaption>
        </figure>
      </section>

      <section className="project-detail-gallery project-detail-gallery--no-bar shell" aria-labelledby="epic-fantasy-gallery-title">
        <div className="project-detail-gallery-intro">
          <h2 id="epic-fantasy-gallery-title">更多画面</h2>
          <p>从冰雪荒原到燃烧的城邦，延展史诗幻想的场景氛围。</p>
        </div>
        <div className="project-detail-gallery-grid">
          <figure className="project-detail-shot">
            <img src="/projects/ai-visual-creation/epic-fantasy/icefront.png" alt="巨龙飞越冰雪荒原与行军队伍" loading="lazy" />
            <figcaption>冰雪荒原 / 02</figcaption>
          </figure>
          <figure className="project-detail-shot">
            <img src="/projects/ai-visual-creation/epic-fantasy/rider.png" alt="骑士骑马奔向被巨龙火焰吞没的城邦" loading="lazy" />
            <figcaption>燃烧的城邦 / 03</figcaption>
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
