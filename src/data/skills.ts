import type { IconName } from '../components/skills/icons';

export interface Skill {
  /** Nombre visible (ej. "Python") */
  name: string;
  /** Etiqueta pequeña junto al nombre (ej. "Lenguaje") */
  tag: string;
  description: string;
  /** Color del resplandor en formato "R G B" */
  glow: string;
  icon: IconName;
  href?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programación",
    skills: [
      { name: "Python", tag: "Lenguaje", description: "Programa desde cero", glow: "59 130 246", icon: "python" },
      { name: "Java", tag: "Lenguaje", description: "POO y aplicaciones robustas", glow: "239 68 68", icon: "java" },
      { name: "JavaScript", tag: "Lenguaje", description: "La web interactiva", glow: "250 204 21", icon: "javascript" },
      { name: "Kotlin", tag: "Lenguaje", description: "Apps Android modernas", glow: "160 90 255", icon: "kotlin" },
      { name: "Django", tag: "Framework", description: "Apps web con Python", glow: "52 190 140", icon: "django" },
      { name: "Flutter", tag: "Framework", description: "Apps para iOS y Android", glow: "56 189 248", icon: "flutter" },
    ],
  },
  {
    title: "Bases de datos",
    skills: [
      { name: "PostgreSQL", tag: "SQL", description: "Bases de datos relacionales", glow: "90 150 215", icon: "postgresql" },
      { name: "MySQL", tag: "SQL", description: "Consultas y bases de datos", glow: "20 165 195", icon: "mysql" },
      { name: "MongoDB", tag: "NoSQL", description: "Bases de datos de documentos", glow: "34 197 94", icon: "mongodb" },
    ],
  },
  {
    title: "Control de versiones y DevOps",
    skills: [
      { name: "GitHub", tag: "DevOps", description: "Control de versiones en equipo", glow: "168 85 247", icon: "github" },
      { name: "GitLab", tag: "DevOps", description: "Repositorios y CI/CD", glow: "252 109 38", icon: "gitlab" },
      { name: "Docker", tag: "DevOps", description: "Contenedores y despliegue", glow: "36 150 237", icon: "docker" },
    ],
  },
  {
    title: "Sistemas y APIs",
    skills: [
      { name: "Linux", tag: "Sistema", description: "Domina la terminal", glow: "245 158 11", icon: "linux" },
      { name: "macOS", tag: "Sistema", description: "Entorno Unix y desarrollo", glow: "226 232 240", icon: "macos" },
      { name: "Postman", tag: "APIs", description: "Testing y diseño de APIs", glow: "249 115 22", icon: "postman" },
    ],
  },
  {
    title: "IDEs y editores",
    skills: [
      { name: "Antigravity", tag: "IDE", description: "Editor con agentes de IA", glow: "99 140 255", icon: "antigravity" },
      { name: "Visual Studio Code", tag: "Editor", description: "Ligero y extensible", glow: "56 150 240", icon: "visual-studio-code" },
      { name: "Android Studio", tag: "IDE", description: "Desarrollo de apps Android", glow: "61 220 132", icon: "android-studio" },
      { name: "IntelliJ IDEA", tag: "IDE", description: "IDE para Java y Kotlin", glow: "236 72 153", icon: "intellij-idea" },
    ],
  },
  {
    title: "Inteligencia artificial",
    skills: [
      { name: "Claude", tag: "IA", description: "Asistentes y prompts con IA", glow: "217 119 87", icon: "claude" },
      { name: "Gemini", tag: "IA", description: "IA generativa de Google", glow: "120 140 255", icon: "gemini" },
      { name: "ChatGPT", tag: "IA", description: "Asistente y flujo con IA", glow: "16 185 129", icon: "chatgpt" },
    ],
  },
];
