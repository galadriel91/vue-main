interface SitesItem {
    link: string;
    name: string;
}

interface OtherInfo {
    title: string;
    content: string;
}

interface ImagesItem {
    pc?: string;
    mobile?: string;
    alt: string;
}

interface PostItem {
    mainImage: string;
    skill: string[];
    subInfo: OtherInfo[];
    description: string[];
    sites: SitesItem[];
    images: ImagesItem[];
}

interface ProjectItem {
    id: number;
    title: string;
    markup: boolean;
    vue: boolean;
    react?: boolean;
    posts: PostItem;
    web?: boolean;
}

export type { ProjectItem };
