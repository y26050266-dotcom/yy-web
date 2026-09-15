import type { Metadata } from 'next';
import { ProjectPlaceholder } from '../../project-placeholder';

const title = '道具设计项目 01';
const description = '造型设计、PBR 材质与细节叙事项目的独立作品详情页。';

export const metadata: Metadata = {
  title: `${title} | 杨颖作品集`,
  description,
  openGraph: {
    title: `${title} | 杨颖作品集`,
    description,
    images: ['/project-observatory.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | 杨颖作品集`,
    description,
    images: ['/project-observatory.png'],
  },
};

export default function PropDesignProjectOne() {
  return (
    <ProjectPlaceholder
      index="01"
      title={title}
      subtitle="造型设计 · PBR材质 · 细节叙事"
      image="/project-observatory.png"
      alt="道具设计项目的临时封面图"
      backHref="/projects/prop-design"
      backLabel="返回道具设计"
      sectionLabel="PROP DESIGN"
      overline="PROP DESIGN · CONTENT SLOT"
    />
  );
}
