type ProjectPlaceholderProps = {
  index: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

export function ProjectPlaceholder({
  index,
  title,
  subtitle,
  image,
  alt,
}: ProjectPlaceholderProps) {
  return (
    <main className="project-detail-page project-detail-page--placeholder">
      <header className="project-detail-nav shell">
        <a href="/#projects">← 返回精选作品</a>
        <div>
          <span>PROJECT / {index}</span>
          <small>INDEPENDENT PAGE</small>
        </div>
        <a href="mailto:yangying25of@163.com">CONTACT ↗</a>
      </header>

      <section className="project-detail-hero shell">
        <div className="project-detail-header">
          <div className="project-detail-title project-detail-title--placeholder">
            <p>PROJECT DETAIL · CONTENT SLOT</p>
            <h1>{title}</h1>
            <div className="project-detail-tags">
              <span><b>{index}</b>{subtitle}</span>
            </div>
          </div>

          <div className="project-detail-copy">
            <span>{index} / 独立作品详情页</span>
            <p>
              该作品已建立独立详情页。当前保留封面与完整页面结构，后续补充真实作品图、项目介绍和制作过程后，可直接在这里完成展示。
            </p>
          </div>
        </div>

        <figure className="project-detail-hero-frame">
          <img src={image} alt={alt} />
          <figcaption>
            <span>PROJECT COVER / CONTENT PLACEHOLDER</span>
            <span>{index} — 03</span>
          </figcaption>
        </figure>
      </section>

      <section className="project-placeholder-status shell">
        <div className="project-detail-bar">
          <span>{index}</span>
          <span>PROJECT PAGE / 作品详情</span>
          <small>READY FOR CONTENT</small>
        </div>
        <div className="project-placeholder-panel">
          <span>CONTENT STATUS / 待补充</span>
          <h2>此作品拥有单独页面</h2>
          <p>后续只需提供项目名称、介绍、职责与作品图片，即可替换当前占位内容，不会与其他项目混用。</p>
        </div>
      </section>

      <footer className="project-detail-footer shell">
        <span>YANG YING · PORTFOLIO 2026</span>
        <a href="/#projects">返回作品列表 ↑</a>
      </footer>
    </main>
  );
}
