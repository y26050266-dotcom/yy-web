import type { Metadata } from 'next';
import { ProjectPlaceholder } from '../project-placeholder';

const title = 'SYNTHETIC MEMORY';
const description = 'AIGC 实验、视觉开发与材质研究项目的独立作品详情页。';

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
    <ProjectPlaceholder
      index="03"
      title={title}
      subtitle="AIGC 实验 · 视觉开发 · 材质研究"
      image="/project-memory.png"
      alt="暗色展厅中的透明地质记忆核心抽象视觉"
    />
  );
}
