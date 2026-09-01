import type { Metadata } from 'next';
import { ProjectPlaceholder } from '../project-placeholder';

const title = 'THE LAST OBSERVATORY';
const description = '环境叙事、废墟材质与空间构图项目的独立作品详情页。';

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

export default function LastObservatoryProject() {
  return (
    <ProjectPlaceholder
      index="02"
      title={title}
      subtitle="环境叙事 · 废墟材质 · 空间构图"
      image="/project-observatory.png"
      alt="被苔藓和浅水覆盖的粗野主义天文台概念场景"
    />
  );
}
