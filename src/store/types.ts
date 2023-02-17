interface SitesItem {
    link: string;
    name: string;
}

interface ImagesItem {
    pc?: string;
    mobile?: string;
    alt: string;
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
    backend?: string;
    pages: number;
    sites: SitesItem[];
    images: ImagesItem[];
}

interface ProjectItem {
    id: number;
    vue: boolean;
    sass: boolean;
    react?: boolean;
    nuxt?: boolean;
    markup: boolean;
    title: string;
    isHeight?: boolean;
    posts: PostItem;
}

export type { ProjectItem };
