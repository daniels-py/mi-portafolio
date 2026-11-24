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
  /** Porcentaje de avance del proyecto (0 a 100) */
  progress?: number;
  /** Etiqueta de estado sobre la barra de progreso (por defecto "En desarrollo") */
  progressLabel?: string;
  description: string;
  /** Etiqueta sobre los íconos de herramientas (por defecto "tools used:") */
  toolsLabel?: string;
  stack: IconName[];
  /** Contenedores multimedia para el carrusel (imagen o video) */
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
  name: 'Project de daniel',
  tag: 'Proyecto destacado',
  progress: 60,
  description:
    'Breve descripción de la aplicación, el problema que resuelve y cómo funciona para los usuarios.',
  toolsLabel: 'tools used:',
  stack: ['python', 'django', 'postgresql', 'docker'],
  media: [
    {
      type: 'image',
      alt: 'Vista previa de Elvio Project',
      label: 'Elvio Project — Vista previa',
    },
  ],
};

