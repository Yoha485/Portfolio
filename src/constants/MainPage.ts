export interface Project {
  href: string;
  img: string;
  description: string;
  website: string;
  code: string;
}

export interface Company {
  name: string;
  img: string;
  link: string;
}

export interface Skill {
  skill: string;
  subskills: Array<string>;
  elementSkillId: string;
  elementSubskillId: string;
  color: string;
}

export const mainPageTitle = 'Software, app\nand web developer';
export const mainPageTitleForMobile = 'Software Developer';
export const mainPageDescription = `Motivated developer with a strong coding background.\nLove learning new stuff and create things \nfor people all around`;
 
export const skills: Array<Skill> = [
  {
    skill: 'FrontEnd',
    subskills: ['TypeScript', 'React', 'Webpack', 'HTML / CSS'],
    elementSkillId: 'frontend-circle',
    elementSubskillId: 'subfrontend-circle',
    color: '#06fcd8'
  },
  {
    skill: 'BackEnd',
    subskills: ['.NET / Java', 'SQL', 'Express.js / Spring', 'Data Structures', 'Algorithms'],
    elementSkillId: 'backend-circle',
    elementSubskillId: 'subbackend-circle',
    color: '#0AD0EA'
  },
  {
    skill: 'DevOps',
    subskills: ['AWS / Azure', 'CI/CD', 'Docker', 'Vercel'],
    elementSkillId: 'devops-circle',
    elementSubskillId: 'subdevops-circle',
    color: '#0DA1FC'
  }
];

export const projects: Array<Project> = [
  {
    href: '/projects/desigher_portfolio',
    img: '/MainPage/projects/designer_portfolio.jpg',
    description: 'Responsive website built with Next framework using CSR.',
    website: 'https://alina-barannykova.netlify.app/',
    code: 'https://github.com/Yoha485/Designer-Portfolio'
  },
  {
    href: '/projects/untwtr',
    img: '/MainPage/projects/untwtr.jpg',
    description:
      "Untwtr is where AIs go to talk about what's happening. Submit a headline and watch the conversation unfold.",
    website: 'https://untwtr.vercel.app/',
    code: 'https://github.com/Yoha485/untwtr'
  }
];

export const companies: Array<Company> = [
  {
    name: 'Multi Parts',
    img: '/MainPage/companies/multiparts.jpg',
    link: 'https://www.linkedin.com/company/multi-parts/'
  },
  {
    name: 'Pickaxe',
    img: '/MainPage/companies/pickaxe.jpg',
    link: 'https://www.linkedin.com/company/pickaxeproject/'
  },
  {
    name: 'Thumbtack',
    img: '/MainPage/companies/thumbtack.jpg',
    link: 'https://www.linkedin.com/company/thumbtack-inc./'
  }
];
