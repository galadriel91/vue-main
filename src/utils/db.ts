import type { ProjectItem } from '@/store/types';

const db: ProjectItem[] = [
    {
        id: 8,
        title: 'Hacker News',
        design: true,
        markup: true,
        react: true,
        vue: false,
        posts: {
            mainImage: '/images/reactLogo.png',
            info: [
                {
                    pc: '/images/newsInfo.png',
                    alt: '데스크탑 정보',
                },
                {
                    mobile: '/images/newsMobile.png',
                    alt: '모바일 정보',
                },
            ],
            subtitle: [
                'JS의 프레임워크 중 하나인 React.js를 사용하여',
                'Hacker News 클론사이트를 마크업 하였습니다.',
            ],
            sites: [
                {
                    link: 'https://react-hacker.netlify.app',
                    name: '클론 사이트',
                },
                {
                    link: 'https://www.figma.com/file/vkSspbfQFhY420nR4kKrQw/React-News?node-id=0%3A1&t=xeRfQPoyenfO9ZD6-1',
                    name: '피그마 상세정보',
                },
            ],
            images: [
                {
                    pc: '/images/reactPc.png',
                    alt: '데스크탑 이미지',
                },
                {
                    mobile: '/images/hackerRmo.png',
                    alt: '모바일 이미지',
                },
            ],
        },
    },
    {
        id: 5,
        title: '포트폴리오',
        design: true,
        vue: true,
        markup: true,
        posts: {
            mainImage: '/images/logo.png',
            subtitle: [
                'JS의 프레임워크 중 하나인 Vue.js를 사용하여',
                '포트폴리오 사이트를 제작 하였습니다.',
            ],
            info: [
                {
                    pc: '/images/newsInfo.png',
                    alt: '데스크탑 정보',
                },
                {
                    mobile: '/images/newsMobile.png',
                    alt: '모바일 정보',
                },
            ],
            sites: [
                {
                    link: 'https://whitetree.netlify.app',
                    name: '클론 사이트',
                },
                {
                    link: 'https://www.figma.com/file/oH7FG7EQBigCOKb9iUfaCj/Portfolio?node-id=1%3A1155&t=uuCKI9cPTFSTzbSK-1',
                    name: '피그마 상세정보',
                },
            ],
            images: [
                {
                    pc: '/images/portPc.jpg',
                    alt: '데스크탑 이미지',
                },
                {
                    mobile: '/images/noteMo.png',
                    alt: '모바일 이미지',
                },
            ],
        },
    },
    {
        id: 7,
        title: '할리스 커피',
        design: true,
        vue: false,
        markup: true,
        posts: {
            mainImage: '/images/hollys.png',
            subtitle: [
                '피그마와 HTML & CSS & JS를 사용하여',
                '할리스 커피 클론사이트를 마크업 하였습니다.',
            ],
            info: [
                {
                    pc: '/images/hollysDesk.png',
                    alt: '데스크탑 정보',
                },
                {
                    mobile: '/images/hollysMobile.png',
                    alt: '모바일 정보',
                },
            ],
            sites: [
                {
                    link: 'https://lothlorien91.cafe24.com/hollys/index.html',
                    name: '클론 사이트',
                },
                {
                    link: 'https://www.figma.com/file/tkeir6ApbYs8pfqhT1lImF/Hollys-Coffee?node-id=1%3A1156&t=PHY3xpha24vrcUdI-1',
                    name: '피그마 상세정보',
                },
            ],
            images: [
                {
                    pc: '/images/hollysPc.png',
                    alt: '데스크탑 이미지',
                },
                {
                    mobile: '/images/noteMo.png',
                    alt: '모바일 이미지',
                },
            ],
        },
    },
    {
        id: 1,
        title: 'Hacker News',
        design: true,
        markup: true,
        vue: true,
        posts: {
            mainImage: '/images/vueLogo.png',
            subtitle: [
                'JS의 프레임워크 중 하나인 Vue.js를 사용하여',
                'Hacker News 클론사이트를 마크업 하였습니다.',
            ],
            info: [
                {
                    pc: '/images/newsInfo.png',
                    alt: '데스크탑 정보',
                },
                {
                    mobile: '/images/newsMobile.png',
                    alt: '모바일 정보',
                },
            ],
            sites: [
                {
                    link: 'https://vue-hacker.netlify.app',
                    name: '클론 사이트',
                },
                {
                    link: 'https://www.figma.com/file/5KmFKNmJrWTqBPMozrtyvS/Hacker-News?node-id=0%3A1&t=xRryeQKA9ZA0WLnE-1',
                    name: '피그마 상세정보',
                },
            ],
            images: [
                {
                    pc: '/images/hackerPc.png',
                    alt: '데스크탑 이미지',
                },
                {
                    mobile: '/images/hackerRmo.png',
                    alt: '모바일 이미지',
                },
            ],
        },
    },
    {
        id: 3,
        title: '알파색채',
        design: false,
        vue: false,
        markup: true,
        posts: {
            mainImage: '/images/alpha.png',
            subtitle: [
                '피그마와 HTML & CSS & JS를 사용하여',
                '알파색채 클론사이트를 마크업 하였습니다.',
            ],
            info: [
                {
                    pc: '/images/alphaDesk.png',
                    alt: '데스크탑 정보',
                },
                {
                    mobile: '/images/alphaMobile.png',
                    alt: '모바일 정보',
                },
            ],
            sites: [
                {
                    link: 'https://lothlorien91.cafe24.com/alpha/index.html',
                    name: '클론 사이트',
                },
                {
                    link: 'https://www.figma.com/file/njXxe2XZliaJZdBcbzYU0k/AlphaColor?node-id=2%3A1155&t=hRfK7RXT3L2FdnqT-1',
                    name: '피그마 상세정보',
                },
            ],
            images: [
                {
                    pc: '/images/alphaPc.png',
                    alt: '데스크탑 이미지',
                },
                {
                    mobile: '/images/noteMo.png',
                    alt: '모바일 이미지',
                },
            ],
        },
    },
    {
        id: 6,
        title: '에어부산',
        design: true,
        vue: false,
        markup: true,
        posts: {
            mainImage: '/images/air.png',
            subtitle: [
                '피그마와 HTML & CSS & JS를 사용하여',
                '에어부산 클론사이트를 마크업 하였습니다.',
            ],
            info: [
                {
                    pc: '/images/newsInfo.png',
                    alt: '데스크탑 정보',
                },
                {
                    mobile: '/images/newsMobile.png',
                    alt: '모바일 정보',
                },
            ],
            sites: [
                {
                    link: 'https://lothlorien91.cafe24.com/airbusan/index.html',
                    name: '클론 사이트',
                },
                {
                    link: 'https://www.figma.com/file/qrrQeB2b7JCWGIjw88oFm5/AirBusan?node-id=1%3A2285&t=9dW3jwecITqwBb97-1',
                    name: '피그마 상세정보',
                },
            ],
            images: [
                {
                    pc: '/images/airPc.png',
                    alt: '데스크탑 이미지',
                },
                {
                    mobile: '/images/noteMo.png',
                    alt: '모바일 이미지',
                },
            ],
        },
    },
    {
        id: 4,
        title: '도미노 피자',
        design: true,
        vue: true,
        markup: true,
        posts: {
            mainImage: '/images/domino.png',
            subtitle: [
                '피그마와 VueCDN & HTML & CSS & JS를 사용하여',
                '도미노피자 클론사이트를 마크업 하였습니다.',
            ],
            info: [
                {
                    pc: '/images/newsInfo.png',
                    alt: '데스크탑 정보',
                },
                {
                    mobile: '/images/newsMobile.png',
                    alt: '모바일 정보',
                },
            ],
            sites: [
                {
                    link: 'https://lothlorien91.cafe24.com/domino/index.html',
                    name: '클론 사이트',
                },
                {
                    link: 'https://www.figma.com/file/1nHaSnBesorJAZGUKqHJjS/Domino?node-id=5%3A1155&t=ktWVoXog1LwBKbM6-1',
                    name: '피그마 상세정보',
                },
            ],
            images: [
                {
                    pc: '/images/dominoPc.png',
                    alt: '데스크탑 이미지',
                },
                {
                    mobile: '/images/noteMo.png',
                    alt: '모바일 이미지',
                },
            ],
        },
    },
];

export { db };
