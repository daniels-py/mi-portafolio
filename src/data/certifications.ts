import type { IconName } from '../components/skills/icons';

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  /** Ícono opcional de la tecnología o plataforma asociada */
  icon?: IconName;
  /** Ícono de la plataforma emisora (se sobrepone en la esquina del ícono principal) */
  issuerIcon?: IconName;
  /** Color del resplandor en formato "R G B" */
  glow?: string;
  /** Enlace para verificar la credencial */
  href?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Desarrollo Backend con Python y Django',
    issuer: 'Platzi',
    date: '2025',
    icon: 'python',
    issuerIcon: 'platzi',
    glow: '59 130 246',
  },
  {
    title: 'Fundamentos de Docker y Contenedores',
    issuer: 'Platzi',
    date: '2025',
    icon: 'docker',
    issuerIcon: 'platzi',
    glow: '36 150 237',
  },
  {
    title: 'Bases de Datos Relacionales con PostgreSQL',
    issuer: 'Platzi',
    date: '2024',
    icon: 'postgresql',
    issuerIcon: 'platzi',
    glow: '90 150 215',
  },
  {
    title: 'Inteligencia Artificial Generativa con Gemini',
    issuer: 'Platzi',
    date: '2026',
    icon: 'gemini',
    issuerIcon: 'platzi',
    glow: '120 140 255',
  },
];

