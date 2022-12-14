export type Category = { value: string; color: string };

export interface Post {
  href: string;
  title: string;
  description: string;
  category: Category;
  tags: Array<string>;
}

export const frontendCategory = { value: 'FrontEnd', color: '#06FCD8' };
export const backendCategory = { value: 'BackEnd', color: '#0AD0EA' };
export const devopsCategory = { value: 'DevOps', color: '#0DA1FC' };

export const postCategories = [
  {
    href: '/posts#FrontEnd',
    category: frontendCategory,
    subcategories: ['React', 'CSS', 'TypeScript']
  },
  {
    href: '/posts#BackEnd',
    category: backendCategory,
    subcategories: ['Node']
  },
  {
    href: '/posts#DevOps',
    category: devopsCategory,
    subcategories: ['Docker']
  }
];

export const posts: Array<Post> = [
  {
    href: 'posts/typescript-uncommon-features',
    title: 'TypeScript Uncommon Features',
    description: 'My list of TypeScript features that are not so common but have very interesting usecases.',
    category: frontendCategory,
    tags: ['TypeScript']
  }
];
