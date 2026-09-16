import type { Metadata } from 'next';

const title = '丝路回响';
const description = '以敦煌石窟、古代壁画、沙漠与丝路商队为视觉灵感，探索历史文化元素与电影化场景设计之间的结合。作品通过暖色调、风沙、遗迹与人物尺度关系，尝试表现古代文明留下的时间感、神秘感与旅途氛围。';
const imageRoot = '/projects/ai-visual-creation/silk-road-echo';

export const metadata: Metadata = {
  title: `${title} | 杨颖作品集`,
  description,
  openGraph: {
    title: `${title} | 杨颖作品集`,
    description,
    images: [`${imageRoot}/cover.webp`],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | 杨颖作品集`,
    description,
    images: [`${imageRoot}/cover.webp`],
  },
};

export default function SilkRoadEchoProject() {
  return (
    <main className="project-detail-page project-detail-page--ai-visual">
      <header className="project-detail-nav shell">
        <a href="/projects/ai-visual-creation">← 返回AI视觉创作</a>
        <div>
          <span>PROJECT / 03</span>
          <small>AI VISUAL EXPLORATIONS</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-detail-hero shell">
        <div className="project-detail-header">
          <div className="project-detail-title project-detail-title--ai-visual">
            <p>AI VISUAL EXPLORATIONS / 03</p>
            <h1>{title}</h1>
            <div className="project-detail-tags">
              <span><b>03</b>石窟 · 壁画 · 丝路</span>
            </div>
          </div>
          <div className="project-detail-copy">
            <span>03 / 作品详情</span>
            <p>{description}</p>
            <div className="project-detail-software">
              <span>使用软件</span>
              <ul><li>ChatGPT</li><li>Midjourney</li></ul>
            </div>
          </div>
        </div>

        <figure className="project-detail-hero-frame">
          <img src={`${imageRoot}/cover.webp`} alt="旅人与骆驼走向暖光中的石窟大佛" />
          <figcaption>
            <span>丝路回响 / 封面画面</span>
            <span>01 — 03</span>
          </figcaption>
        </figure>
      </section>

      <section className="project-detail-gallery project-detail-gallery--no-bar shell" aria-label="丝路回响作品画面">
        <div className="project-detail-gallery-grid">
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/caravan.webp`} alt="夕阳下的沙漠丝路商队" loading="lazy" />
            <figcaption>丝路商队 / 02</figcaption>
          </figure>
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/mural.webp`} alt="描绘佛像与人物的古代壁画" loading="lazy" />
            <figcaption>石窟壁画 / 03</figcaption>
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
