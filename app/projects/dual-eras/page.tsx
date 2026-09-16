import type { Metadata } from 'next';

const title = '双生年代';
const description = '以东西方女性形象为核心的 AI 视觉探索，通过复古西方生活场景与东方古典文化场景的对照，研究服饰、环境、色彩与电影化光影对人物时代感和文化氛围的塑造。';
const imageRoot = '/projects/ai-visual-creation/dual-eras';

export const metadata: Metadata = {
  title: `${title} | 杨颖作品集`,
  description,
  openGraph: {
    title: `${title} | 杨颖作品集`,
    description,
    images: [`${imageRoot}/cover.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | 杨颖作品集`,
    description,
    images: [`${imageRoot}/cover.png`],
  },
};

export default function DualErasProject() {
  return (
    <main className="project-detail-page project-detail-page--ai-visual">
      <header className="project-detail-nav shell">
        <a href="/projects/ai-visual-creation">← 返回AI视觉创作</a>
        <div>
          <span>PROJECT / 05</span>
          <small>AI VISUAL EXPLORATIONS</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-detail-hero shell">
        <div className="project-detail-header">
          <div className="project-detail-title project-detail-title--ai-visual">
            <p>AI VISUAL EXPLORATIONS / 05</p>
            <h1>{title}</h1>
            <div className="project-detail-tags">
              <span><b>05</b>东西方女性 · 时代氛围</span>
            </div>
          </div>
          <div className="project-detail-copy">
            <span>05 / 作品详情</span>
            <p>{description}</p>
            <div className="project-detail-software">
              <span>使用软件</span>
              <ul><li>ChatGPT</li><li>Midjourney</li></ul>
            </div>
          </div>
        </div>

        <figure className="project-detail-hero-frame">
          <img src={`${imageRoot}/cover.png`} alt="复古西方女性坐在梳妆镜前佩戴耳饰" />
          <figcaption><span>双生年代 / 封面画面</span><span>01 — 06</span></figcaption>
        </figure>
      </section>

      <section className="project-detail-gallery project-detail-gallery--no-bar shell" aria-label="双生年代作品画面">
        <div className="project-detail-gallery-grid">
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/west-terrace.png`} alt="复古西方女性在海边露台饮茶" loading="lazy" />
            <figcaption>海边午后 / 02</figcaption>
          </figure>
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/west-car.png`} alt="复古西方女性驾驶红色敞篷车沿海岸出行" loading="lazy" />
            <figcaption>海岸兜风 / 03</figcaption>
          </figure>
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/east-guqin.png`} alt="东方古典女性在窗边弹奏古琴" loading="lazy" />
            <figcaption>窗前抚琴 / 04</figcaption>
          </figure>
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/east-painting.png`} alt="东方古典女性在冬日书房绘制梅花" loading="lazy" />
            <figcaption>冬日绘卷 / 05</figcaption>
          </figure>
          <figure className="project-detail-shot project-detail-shot--featured">
            <img src={`${imageRoot}/east-go.png`} alt="东方古典女性在书房中对弈" loading="lazy" />
            <figcaption>静室对弈 / 06</figcaption>
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
