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
  /** Etiquetas extra de tecnologías sin ícono dedicado (ej. DRF, Simple JWT) */
  extraTags?: string[];
  /** Contenedores multimedia para el carrusel (imagen o video) */
  media: ProjectMedia[];
  href?: string;
}

const skillMap = new Map(
  skillCategories.flatMap((c) => c.skills).map((s) => [s.icon, s]),
);

const extraTechMeta: Partial<Record<IconName, { name: string; glow: string }>> = {
  jwt: { name: 'Simple JWT', glow: '214 58 255' },
  excel: { name: 'Excel', glow: '33 196 129' },
};

export function resolveTechMeta(icon: IconName) {
  const found = skillMap.get(icon) ?? extraTechMeta[icon];
  return {
    icon,
    name: found?.name ?? icon,
    glow: found?.glow ?? '148 163 184',
  };
}

export const featuredProject: Project = {
  name: 'Sistema de Gestión de Inventario y Préstamos (ICED)',
  tag: 'Aplicación web · API REST',
  progress: 100,
  progressLabel: 'Completado',
  description:
    'Aplicación web y API REST desarrollada con Django y PostgreSQL para administrar el inventario de equipos tecnológicos, el control de préstamos a usuarios (aprendices e instructores), el registro de sanciones y el historial de movimientos. Incluye autenticación segura con JWT para integración con aplicaciones móviles (Flutter) y carga masiva mediante archivos Excel.',
  toolsLabel: 'Tecnologías utilizadas:',
  stack: ['python', 'django', 'postgresql', 'flutter', 'javascript', 'html-css', 'postman', 'git', 'chatgpt', 'jwt', 'excel'],
  media: [
    {
      type: 'image',
      src: '/projects/iced-preview.png',
      alt: 'Vista previa del sistema ICED - SENA',
      label: 'ICED - SENA · Vista previa',
    },
  ],
};

