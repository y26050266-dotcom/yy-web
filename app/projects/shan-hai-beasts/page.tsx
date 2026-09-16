import type { Metadata } from 'next';

const title = '异兽山海';
const description = '以《山海经》神话异兽为灵感，通过 AI 视觉生成探索东方幻想生物的形态设计与世界观表现。作品结合巨型生物、山岳云海与人物尺度对比，强化神秘、压迫与史诗感，构建属于远古东方神话的幻想世界。';
const imageRoot = '/projects/ai-visual-creation/shan-hai-beasts';

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

export default function ShanHaiBeastsProject() {
  return (
    <main className="project-detail-page project-detail-page--ai-visual project-detail-page--shan-hai-beasts">
      <header className="project-detail-nav shell">
        <a href="/projects/ai-visual-creation">← 返回AI视觉创作</a>
        <div>
          <span>PROJECT / 04</span>
          <small>AI VISUAL EXPLORATIONS</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-detail-hero shell">
        <div className="project-detail-header">
          <div className="project-detail-title project-detail-title--ai-visual">
            <p>AI VISUAL EXPLORATIONS / 04</p>
            <h1>{title}</h1>
            <div className="project-detail-tags">
              <span><b>04</b>神话异兽 · 山岳云海</span>
            </div>
          </div>
          <div className="project-detail-copy">
            <span>04 / 作品详情</span>
            <p>{description}</p>
            <div className="project-detail-software">
              <span>使用软件</span>
              <ul><li>ChatGPT</li><li>Midjourney</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section className="project-detail-gallery project-detail-gallery--no-bar project-detail-gallery--shan-hai-beasts shell" aria-label="异兽山海作品画面">
        <div className="project-detail-gallery-grid project-detail-gallery-grid--shan-hai-beasts">
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/cover.webp`} alt="毕方振翅掠过山岳云海，旅人立于下方" />
            <figcaption><span>毕方</span><span>01 / 04</span></figcaption>
          </figure>
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/qiongqi.webp`} alt="穷奇立于山崖，旅人在山脚仰望" loading="lazy" />
            <figcaption><span>穷奇</span><span>02 / 04</span></figcaption>
          </figure>
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/nine-tailed-fox.webp`} alt="九尾狐出现在云雾缭绕的山谷" loading="lazy" />
            <figcaption><span>九尾狐</span><span>03 / 04</span></figcaption>
          </figure>
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/taotie.webp`} alt="饕餮逼近荒原上的旅人" loading="lazy" />
            <figcaption><span>饕餮</span><span>04 / 04</span></figcaption>
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
