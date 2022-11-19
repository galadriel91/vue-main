interface SkillsItem {
    src: string;
    title: string;
}

interface SitesItem {
    link: string;
    name: string;
}

interface PostItem {
    mainImage: string;
    title: string;
    subTitle: string;
    responsive: string;
    deploy: string;
    color: string[];
    review: string[];
    fonts: string;
    pc: string;
    backend?: string;
    mobile?: string;
    sites: SitesItem[];
    support: SkillsItem[];
}

interface ProjectItem {
    id: number;
    vue: boolean;
    nuxt?: boolean;
    markup: boolean;
    title: string;
    time: string;
    rating: number;
    skills: SkillsItem[];
    posts: PostItem;
}

export type { ProjectItem };
