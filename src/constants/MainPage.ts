export interface Project {
  href: string;
  img: string;
  description: string;
  website: string;
  code: string;
}

export interface Skill {
  skill: string;
  subskills: Array<string>;
  elementSkillId: string;
  elementSubskillId: string;
  color: string;
}

export const mainPageTitle = 'Software, app\nand web developer';
export const mainPageDescription = `Are you looking for a fresh web developer? Highly motivated\n and fast learner? I'm here for you! You can download my CV/\nResume by clicking on the circle.`;

export const skills: Array<Skill> = [
  {
    skill: 'FrontEnd',
    subskills: ['TypeScript', 'HTML/CSS', 'React', 'NextJS', 'Astro'],
    elementSkillId: 'frontend-circle',
    elementSubskillId: 'subfrontend-circle',
    color: '#06fcd8'
  },
  {
    skill: 'BackEnd',
    subskills: ['Postgres', 'MongoDB', 'NestJS', 'Spring Boot', 'Flask'],
    elementSkillId: 'backend-circle',
    elementSubskillId: 'subbackend-circle',
    color: '#0AD0EA'
  },
  {
    skill: 'DevOps',
    subskills: ['Docker', 'CI/CD', 'Azure', 'AWS', 'Vercel'],
    elementSkillId: 'devops-circle',
    elementSubskillId: 'subdevops-circle',
    color: '#0DA1FC'
  }
];

export const projects: Array<Project> = [
  {
    href: '#footer',
    img: '/circle.png',
    description: 'Dolore duis qui aliquip consectetur ipsum ullamco ad ea veniam.',
    website: '',
    code: ''
  },
  {
    href: '#footer',
    img: '/circle.png',
    description: 'Dolor quis elit aliqua excepteur cillum eu excepteur fugiat officia amet sunt.',
    website: '',
    code: ''
  },
  {
    href: '#footer',
    img: '/circle.png',
    description: 'Adipisicing id dolore veniam pariatur in amet ullamco dolore ut aliqua officia aliqua.',
    website: '',
    code: ''
  },
  {
    href: '#footer',
    img: '/circle.png',
    description: 'Non anim amet id cillum quis.',
    website: '',
    code: ''
  },
  {
    href: '#footer',
    img: '/circle.png',
    description: 'Incididunt laborum consectetur ex velit commodo labore ex tempor.',
    website: '',
    code: ''
  }
];
