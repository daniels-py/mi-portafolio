import type { IconName } from '../components/skills/icons';
import { skillCategories } from './skills';

export interface ProjectMedia {
  type: 'image' | 'video';
  src?: string;
  alt: string;
  /** Texto opcional para el placeholder cuando aún no hay src */
  label?: string;
}

export interface Project {
  name: string;
  tag?: string;
  description: string;
  stack: IconName[];
  /** Contenedores multimedia (imagen o video) */
  media: ProjectMedia[];
  href?: string;
}

const skillMap = new Map(
  skillCategories.flatMap((c) => c.skills).map((s) => [s.icon, s]),
);

export function resolveTechMeta(icon: IconName) {
  const found = skillMap.get(icon);
  return {
    icon,
    name: found?.name ?? icon,
    glow: found?.glow ?? '148 163 184',
  };
}

export const featuredProject: Project = {
  name: 'Nombre de tu App',
  tag: 'Proyecto destacado',
  description:
    'Breve descripción de la aplicación, el problema que resuelve y cómo funciona para los usuarios.',
  stack: ['python', 'django', 'postgresql', 'docker'],
  media: [
    {
      type: 'image',
      alt: 'Vista previa de la aplicación',
      label: 'Vista previa',
    },
  ],
};

