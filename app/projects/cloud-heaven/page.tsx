import type { Metadata } from 'next';

const title = '云上天境';
const description = '云海、白色天门与悬空宫阙构成的东方幻想视觉作品。';
const imageRoot = '/projects/ai-visual-creation/cloud-heaven';

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

export default function CloudHeavenProject() {
  return (
    <main className="project-detail-page project-detail-page--ai-visual">
      <header className="project-detail-nav shell">
        <a href="/projects/ai-visual-creation">← 返回AI视觉创作</a>
        <div>
          <span>PROJECT / 02</span>
          <small>AI VISUAL EXPLORATIONS</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-detail-hero shell">
        <div className="project-detail-header">
          <div className="project-detail-title project-detail-title--ai-visual">
            <p>AI VISUAL EXPLORATIONS / 02</p>
            <h1>{title}</h1>
            <div className="project-detail-tags">
              <span><b>02</b>云海 · 宫阙 · 飞瀑</span>
            </div>
          </div>
          <div className="project-detail-copy">
            <span>02 / 作品详情</span>
            <p>以东方建筑、云海、群山与悬浮宫殿为主要视觉元素，探索理想化的东方幻想世界。作品重点尝试空灵的空间层次、柔和光线与大尺度环境构图，营造宁静、神圣且超现实的视觉氛围。</p>
            <div className="project-detail-software">
              <span>使用软件</span>
              <ul><li>ChatGPT</li><li>Midjourney</li></ul>
            </div>
          </div>
        </div>

        <figure className="project-detail-hero-frame">
          <img src={`${imageRoot}/cover.png`} alt="云海与群山之间的白色石雕天门" />
          <figcaption>
            <span>云上天境 / 封面画面</span>
            <span>01 — 04</span>
          </figcaption>
        </figure>
      </section>

      <section className="project-detail-gallery project-detail-gallery--no-bar project-detail-gallery--cloud-heaven shell" aria-label="云上天境作品画面">
        <div className="project-detail-gallery-grid project-detail-gallery-grid--cloud-heaven">
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/palace.png`} alt="云海中悬浮的宫殿群与瀑布" loading="lazy" />
            <figcaption>云上宫阙 / 02</figcaption>
          </figure>
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/sea-of-clouds.png`} alt="白衣人物立于云海观景台" loading="lazy" />
            <figcaption>云海远眺 / 03</figcaption>
          </figure>
          <figure className="project-detail-shot">
            <img src={`${imageRoot}/sky-city.png`} alt="白衣人物眺望云端城阙与长桥" loading="lazy" />
            <figcaption>天境城阙 / 04</figcaption>
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
