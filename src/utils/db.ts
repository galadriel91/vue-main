import type { ProjectItem } from '@/store/types';

const db: ProjectItem[] = [
    // {
    //     id: 1,
    //     title: '해커뉴스',
    //     markup: true,
    //     react: true,
    //     vue: false,
    //     posts: {
    //         mainImage: '/images/reactLogo.png',
    //         info: [
    //             {
    //                 pc: '/images/rekerDesk.png',
    //                 alt: '데스크탑 정보',
    //             },
    //             {
    //                 mobile: '/images/rekerMobile.png',
    //                 alt: '모바일 정보',
    //             },
    //         ],
    //         subtitle: [
    //             'JS의 라이브러리 중 하나인 React.js를 사용하여',
    //             '해커뉴스 클론사이트를 마크업 하였습니다.',
    //         ],
    //         sites: [
    //             {
    //                 link: 'https://react-hacker.netlify.app',
    //                 name: '클론 사이트',
    //             },
    //             {
    //                 link: 'https://www.figma.com/file/vkSspbfQFhY420nR4kKrQw/React-News?node-id=0%3A1&t=xeRfQPoyenfO9ZD6-1',
    //                 name: '피그마 상세정보',
    //             },
    //         ],
    //         images: [
    //             {
    //                 pc: '/images/reactPc.png',
    //                 alt: '데스크탑 이미지',
    //             },
    //             {
    //                 mobile: '/images/hackerRmo.png',
    //                 alt: '모바일 이미지',
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: 2,
    //     title: '포트폴리오',
    //     vue: true,
    //     markup: true,
    //     posts: {
    //         mainImage: '/images/logo.png',
    //         subtitle: [
    //             'JS의 프레임워크 중 하나인 Vue.js를 사용하여',
    //             '포트폴리오 사이트를 제작 하였습니다.',
    //         ],
    //         info: [
    //             {
    //                 pc: '/images/portDesk.png',
    //                 alt: '데스크탑 정보',
    //             },
    //             {
    //                 mobile: '/images/portMobile.png',
    //                 alt: '모바일 정보',
    //             },
    //         ],
    //         sites: [
    //             {
    //                 link: 'https://whitetree.netlify.app',
    //                 name: '클론 사이트',
    //             },
    //             {
    //                 link: 'https://www.figma.com/file/oH7FG7EQBigCOKb9iUfaCj/Portfolio?node-id=1%3A1155&t=uuCKI9cPTFSTzbSK-1',
    //                 name: '피그마 상세정보',
    //             },
    //         ],
    //         images: [
    //             {
    //                 pc: '/images/portPc.jpg',
    //                 alt: '데스크탑 이미지',
    //             },
    //             {
    //                 mobile: '/images/noteMo.png',
    //                 alt: '모바일 이미지',
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: 5,
    //     title: '신라호텔',
    //     markup: true,
    //     react: false,
    //     vue: false,
    //     posts: {
    //         mainImage: '/images/shillaLogo.gif',
    //         info: [
    //             {
    //                 pc: '/images/shillaDesk.png',
    //                 alt: '데스크탑 정보',
    //             },
    //             {
    //                 mobile: '/images/shillaMobile.png',
    //                 alt: '모바일 정보',
    //             },
    //         ],
    //         subtitle: [
    //             '피그마와 HTML & CSS & JS를 사용하여',
    //             '신라호텔 클론사이트를 마크업 하였습니다.',
    //         ],
    //         sites: [
    //             {
    //                 link: 'https://lothlorien91.cafe24.com/shilla/index.html',
    //                 name: '클론 사이트',
    //             },
    //             {
    //                 link: 'https://www.figma.com/file/VfxhccQfbG2aVegcaS7Yxt/Shilla?node-id=0%3A1&t=Ml5aJL2ch4NlSQgB-1',
    //                 name: '피그마 상세정보',
    //             },
    //         ],
    //         images: [
    //             {
    //                 pc: '/images/shillaPc.png',
    //                 alt: '데스크탑 이미지',
    //             },
    //             {
    //                 mobile: '/images/hackerRmo.png',
    //                 alt: '모바일 이미지',
    //             },
    //         ],
    //     },
    // },
    // {
    //     id: 6,
    //     title: '에어부산',
    //     vue: false,
    //     markup: true,
    //     posts: {
    //         mainImage: '/images/air.png',
    //         subtitle: [
    //             '피그마와 HTML & CSS & JS를 사용하여',
    //             '에어부산 클론사이트를 마크업 하였습니다.',
    //         ],
    //         info: [
    //             {
    //                 pc: '/images/busanDesk.png',
    //                 alt: '데스크탑 정보',
    //             },
    //             {
    //                 mobile: '/images/busanMobile.png',
    //                 alt: '모바일 정보',
    //             },
    //         ],
    //         sites: [
    //             {
    //                 link: 'https://lothlorien91.cafe24.com/airbusan/index.html',
    //                 name: '클론 사이트',
    //             },
    //             {
    //                 link: 'https://www.figma.com/file/qrrQeB2b7JCWGIjw88oFm5/AirBusan?node-id=1%3A2285&t=9dW3jwecITqwBb97-1',
    //                 name: '피그마 상세정보',
    //             },
    //         ],
    //         images: [
    //             {
    //                 pc: '/images/airPc.png',
    //                 alt: '데스크탑 이미지',
    //             },
    //             {
    //                 mobile: '/images/noteMo.png',
    //                 alt: '모바일 이미지',
    //             },
    //         ],
    //     },
    // },
    {
        id: 3,
        title: '해커뉴스',
        markup: true,
        vue: true,
        posts: {
            mainImage: '/images/vueLogo.png',
            description: [
                'Vue.js와 Pinia & VueRouter를 사용하여',
                '해커뉴스 뷰어사이트를 클론코딩 하였습니다.',
            ],
            skill: ['html', 'scss', 'ts', 'vue'],
            subInfo: [
                {
                    title: '반응형',
                    content: 'O',
                },
                {
                    title: '배포',
                    content: 'Netlify',
                },
                {
                    title: 'Backend',
                    content: 'Hacker Api',
                },
                {
                    title: '총페이지',
                    content: '메인 (1), 서브 (4)',
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
            ],
        },
    },
    {
        id: 4,
        title: '할리스 커피',
        vue: false,
        markup: true,
        posts: {
            mainImage: '/images/hollys.png',
            description: [
                'HTML & CSS & JS를 사용하여 할리스 커피',
                '메인 페이지를 퍼블리싱 하였습니다.',
            ],
            skill: ['html', 'css', 'js', 'scss'],
            subInfo: [
                {
                    title: '반응형',
                    content: 'O',
                },
                {
                    title: '배포',
                    content: '카페24',
                },
                {
                    title: '라이브러리',
                    content: 'Slick, AOS',
                },
                {
                    title: '총페이지',
                    content: '메인 (1)',
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
            ],
        },
    },
    {
        id: 7,
        title: '알파색채',
        vue: false,
        markup: true,
        posts: {
            mainImage: '/images/alpha.png',
            description: [
                'HTML & CSS & JS를 사용하여 알파색채',
                '메인 페이지를 퍼블리싱 하였습니다.',
            ],
            skill: ['html', 'css', 'js', 'scss'],
            subInfo: [
                {
                    title: '반응형',
                    content: 'O',
                },
                {
                    title: '배포',
                    content: '카페24',
                },
                {
                    title: '라이브러리',
                    content: 'Slick',
                },
                {
                    title: '총페이지',
                    content: '메인 (1)',
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
            ],
        },
    },
    {
        id: 8,
        title: '도미노 피자',
        vue: false,
        markup: true,
        posts: {
            mainImage: '/images/domino.png',
            description: [
                'HTML & CSS & JS를 사용하여 도미노피자',
                '메인 페이지를 퍼블리싱 하였습니다.',
            ],
            skill: ['html', 'css', 'js', 'scss'],
            subInfo: [
                {
                    title: '반응형',
                    content: 'X',
                },
                {
                    title: '배포',
                    content: '카페24',
                },
                {
                    title: '라이브러리',
                    content: 'Slick',
                },
                {
                    title: '총페이지',
                    content: '메인 (1)',
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
            ],
        },
    },
];

export { db };
