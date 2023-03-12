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
    info?: string;
    mobile?: string;
    subtitle: string[];
    sites: SitesItem[];
    images: ImagesItem[];
}

interface ProjectItem {
    id: number;
    title: string;
    design: boolean;
    markup: boolean;
    vue: boolean;
    react?: boolean;
    posts: PostItem;
}

export type { ProjectItem };
