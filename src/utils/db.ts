import type { ProjectItem } from '@/store/types';

const db: ProjectItem[] = [
    {
        id: 1,
        title: 'Hacker News With React',
        vue: false,
        markup: false,
        react: true,
        sass: true,
        time: '2022-12',
        rating: 0,
        skills: [
            {
                src: '/src/assets/image/react.png',
                title: '리액트 로고 아이콘',
            },
            {
                src: '@/assets/image/sass.png',
                title: 'SCSS 로고 아이콘',
            },
            {
                src: '@/assets/image/ts.png',
                title: 'TS 로고 아이콘',
            },
        ],
        posts: {
            mainImage: '/images/reactLogo.png',
            title: 'Hacker News',
            subTitle: 'Hacker News 클론',
            responsive: 'O',
            deploy: 'Netlify',
            backend: 'Hacker Api',
            sites: [
                {
                    link: 'https://news.ycombinator.com/',
                    name: '기존 사이트',
                },
                {
                    link: 'https://react-hacker.netlify.app',
                    name: '클론 사이트',
                },
                {
                    link: 'https://github.com/galadriel91/react-hacker',
                    name: '깃허브',
                },
            ],
            support: [
                {
                    src: '/src/assets/image/Chromium.png',
                    title: '크로미움 로고',
                },
                {
                    src: '/src/assets/image/fox.png',
                    title: '파이어폭스 로고',
                },
            ],
            color: ['#5684FD', '#00000'],
            fonts: 'ChosunSg',
            review: [
                'JS의 대표 프레임워크 중 하나인 React.js를',
                '사용해서 Hacker News 클론 사이트를 구현했다.',
                'Vue와 다르게 더 자유롭다는 느낌이 들었다.',
                'useEffect 부분을 다루는 것이 꽤 힘들었다. ',
                'v-if나 v-for가 엄청 편하다는 것을 느꼈다.',
            ],
            pc: '/images/hackerRpc.png',
            mobile: '/images/hackerRmo.png',
        },
    },
    {
        id: 7,
        title: 'Vue Simple Note',
        vue: true,
        isHeight: true,
        markup: false,
        react: false,
        sass: true,
        time: '2022-12',
        rating: 0,
        skills: [
            {
                src: '/src/assets/image/vue.png',
                title: '뷰 로고 아이콘',
            },
            {
                src: '@/assets/image/sass.png',
                title: 'SCSS 로고 아이콘',
            },
            {
                src: '@/assets/image/ts.png',
                title: 'TS 로고 아이콘',
            },
        ],
        posts: {
            mainImage: '/images/note.png',
            title: 'Vue Simple Note',
            subTitle: 'Vue Simple Note',
            responsive: 'O',
            deploy: 'Netlify',
            backend: 'AWS EC2',
            sites: [
                {
                    link: 'https://github.com/joshua1988/vue-til-server',
                    name: '참고 API',
                },
                {
                    link: 'https://note-vue.netlify.app',
                    name: '제작 사이트',
                },
                {
                    link: 'https://github.com/galadriel91/vue-note',
                    name: '깃허브',
                },
            ],
            support: [
                {
                    src: '/src/assets/image/Chromium.png',
                    title: '크로미움 로고',
                },
                {
                    src: '/src/assets/image/fox.png',
                    title: '파이어폭스 로고',
                },
            ],
            color: ['#1D9BF0', '#00000'],
            fonts: 'ChosunSg',
            review: [
                '참고한 API를 AWS EC2 + 도메인을 연결하여 배포했다.',
                '아직 API를 직접 정의하지는 못하기 때문에',
                '생각했던 모든 기능을 구현하는 것은 힘들었다.',
                '서버쪽 학습을 하면서, 다음에는 파이어베이스를',
                '사용해서 다른 프로젝트를 진행 해봐야겠다. ',
                'test@test.com / test123 <테스트 계정>',
            ],
            pc: '/images/notePc.png',
            mobile: '/images/noteMo.png',
        },
    },
    {
        id: 2,
        title: 'Hacker News With Vue',
        vue: true,
        markup: false,
        sass: true,
        time: '2022-11',
        rating: 0,
        skills: [
            {
                src: '/src/assets/image/vue.png',
                title: 'Vue 로고 아이콘',
            },
            {
                src: '@/assets/image/sass.png',
                title: 'SCSS 로고 아이콘',
            },
            {
                src: '@/assets/image/ts.png',
                title: 'TS 로고 아이콘',
            },
        ],
        posts: {
            mainImage: '/images/vueLogo.png',
            title: 'Hacker News',
            subTitle: 'Hacker News 클론',
            responsive: 'O',
            deploy: 'Netlify',
            backend: 'Hacker Api',
            sites: [
                {
                    link: 'https://news.ycombinator.com/',
                    name: '기존 사이트',
                },
                {
                    link: 'https://vue-hacker.netlify.app',
                    name: '클론 사이트',
                },
                {
                    link: 'https://github.com/galadriel91/vue-hacker',
                    name: '깃허브',
                },
            ],
            support: [
                {
                    src: '/src/assets/image/Chromium.png',
                    title: '크로미움 로고',
                },
                {
                    src: '/src/assets/image/fox.png',
                    title: '파이어폭스 로고',
                },
            ],
            color: ['#00A19D', '#00000'],
            fonts: 'ChosunSg',
            review: [
                'JS의 대표 프레임워크 중 하나인 Vue.js를',
                '사용해서 Hacker News 클론 사이트를 구현했다.',
                'Vue3와 Vue2의 차이점을 체크하면서 만들었다.',
                'Vue2에 비해 TS를 적용하는 것이 훨씬 편했다.',
                'Vite는 CLI보다 빨라서 만족스러웠다.',
                '기존 Vuex 보다 Pinia 쪽이 사용하기 편했다.',
            ],
            pc: '/images/hackerPc.png',
            mobile: '/images/hackerMo.png',
        },
    },
    {
        id: 3,
        title: 'PORTFOLIO 개선 작업',
        vue: true,
        isHeight: true,
        nuxt: true,
        markup: false,
        sass: true,
        time: '2022-11',
        rating: 0,
        skills: [
            {
                src: '@/assets/image/vue.png',
                title: 'Vue 로고 아이콘',
            },
            {
                src: '@/assets/image/sass.png',
                title: 'Sass 로고 아이콘',
            },
        ],
        posts: {
            mainImage: '/images/logo.png',
            title: 'PORTFOLIO',
            subTitle: 'PORTFOLIO 개선',
            responsive: 'O',
            deploy: 'Netlify',
            backend: 'X',
            sites: [
                { link: 'https://whitewave.netlify.app', name: '기존 사이트' },
                { link: 'https://whitetree.netlify.app', name: '개선 사이트' },
                {
                    link: 'https://github.com/galadriel91/vue-main',
                    name: '깃허브',
                },
            ],
            support: [
                {
                    src: '@/assets/image/Chromium.png',
                    title: '크로미움 로고',
                },
                {
                    src: '@/assets/image/fox.png',
                    title: '파이어폭스 로고',
                },
            ],
            color: ['#BCEEF8', '#000000'],
            fonts: 'ChosunSg',
            review: [
                '기존에는 Nuxt2와 Vuetify를 이용하여 구성했다.',
                '백엔드 없이 유사 로그인과 마이 페이지를 구현했다.',
                '이후 Vue3와 TS를 학습 하면서 배운것을',
                '적용해보고 싶어서, 큰들은 유지한채 개편했다.',
                'd.ts가 없는 라이브러리 및 window에 없는 객체값',
                '같은 문제를 해결하는 방법을 알게 되어서 좋았다.',
            ],
            pc: '/images/portPc.png',
            mobile: '/images/portMo.png',
        },
    },
    {
        id: 4,
        vue: false,
        markup: true,
        sass: true,
        title: '도미노피자 메인 퍼블리싱',
        time: '2022-10',
        rating: 0,
        skills: [
            {
                src: '@/assets/image/html5.png',
                title: 'HTML 로고 아이콘',
            },
            {
                src: '@/assets/image/sass.png',
                title: 'SCSS 로고 아이콘',
            },
            { src: '@/assets/image/js.png', title: 'JS 로고 아이콘' },
        ],
        posts: {
            mainImage: '/images/domino.png',
            title: '도미노피자',
            subTitle: '웹 사이트 퍼블리싱',
            responsive: 'X',
            deploy: 'CAFE24',
            sites: [
                { link: 'https://web.dominos.co.kr/main', name: '기존사이트' },
                {
                    link: 'http://lothlorien91.cafe24.com/domino/',
                    name: '리뉴얼 사이트',
                },
                {
                    link: 'https://github.com/galadriel91/html-basics/tree/master/02.Domino',
                    name: '깃허브',
                },
            ],
            support: [
                {
                    src: '/src/assets/image/Chromium.png',
                    title: '크로미움 로고',
                },
                {
                    src: '/src/assets/image/fox.png',
                    title: '파이어폭스 로고',
                },
            ],
            color: ['#0095E1', '#000000'],
            fonts: 'Arita-dotum-Medium',
            review: [
                '처음하는 마크업 작업인 만큼 반응형 보다는',
                'PC용으로 작업했다. 뚜렷한 디자인 철학은 없으며',
                '전체적으로 큼직하게 섹션을 분리하고',
                '간단한 피자 정보를 메인 섹션에 추가해보았다.',
                'BX 슬라이더를 이용해 보았다',
            ],
            pc: '/images/dominoPc.png',
        },
    },
    {
        id: 5,
        vue: false,
        markup: true,
        sass: true,
        title: '알파색채 메인 퍼블리싱',
        time: '2022-10',
        rating: 0,
        skills: [
            {
                src: '@/assets/image/html5.png',
                title: 'HTML 로고 아이콘',
            },
            {
                src: '@/assets/image/sass.png',
                title: 'SCSS 로고 아이콘',
            },
            { src: '@/assets/image/js.png', title: 'JS 로고 아이콘' },
        ],
        posts: {
            mainImage: '/images/alpha.png',
            title: '알파색채',
            subTitle: '웹 사이트 퍼블리싱',
            responsive: 'O',
            deploy: 'CAFE24',
            sites: [
                { link: 'http://www.alphacolor.com/', name: '기존사이트' },
                {
                    link: 'http://lothlorien91.cafe24.com/alpha/',
                    name: '리뉴얼 사이트',
                },
                {
                    link: 'https://github.com/galadriel91/html-basics/tree/master/03.AlphaColor',
                    name: '깃허브',
                },
            ],
            support: [
                {
                    src: '/src/assets/image/Chromium.png',
                    title: '크로미움 로고',
                },
                {
                    src: '/src/assets/image/fox.png',
                    title: '파이어폭스 로고',
                },
            ],
            color: ['#ED1F2D', '#000000'],
            fonts: 'S-CoreDream-4Regular',
            review: [
                '처음하는 반응형 작업인 만큼',
                '디자인의 변경 없이 구현하는 것을 목표로 했다.',
                '헤더를 반응형으로 구현하는 것이 힘들었다.',
                '최소 360px을 기준으로 작업했다.',
                'Slick 슬라이더를 이용해 보았다',
            ],
            pc: '/images/alphaPc.png',
            mobile: '/images/alphaMo.png',
        },
    },
    {
        id: 6,
        title: '할리스커피 메인 퍼블리싱',
        vue: false,
        markup: true,
        sass: true,
        time: '2022-10',
        rating: 0,
        skills: [
            {
                src: '@/assets/image/html5.png',
                title: 'HTML 로고 아이콘',
            },
            {
                src: '@/assets/image/sass.png',
                title: 'SCSS 로고 아이콘',
            },
            { src: '@/assets/image/js.png', title: 'JS 로고 아이콘' },
        ],
        posts: {
            mainImage: '/images/hollys.png',
            title: '할리스 커피',
            subTitle: '웹 사이트 퍼블리싱',
            responsive: 'O',
            deploy: 'CAFE24',
            sites: [
                { link: 'https://www.hollys.co.kr/', name: '기존사이트' },
                {
                    link: 'http://lothlorien91.cafe24.com/hollys/index.html',
                    name: '리뉴얼 사이트',
                },
                {
                    link: 'https://github.com/galadriel91/html-basics/tree/master/04.Hollys',
                    name: '깃허브',
                },
            ],
            support: [
                {
                    src: '/src/assets/image/Chromium.png',
                    title: '크로미움 로고',
                },
                {
                    src: '/src/assets/image/fox.png',
                    title: '파이어폭스 로고',
                },
            ],
            color: ['#CB333B', '#000000'],
            fonts: 'ChosunGu',
            review: [
                '최소 360px을 기준으로 반응형으로 작업했다.',
                '기존의 홈페이지가 다른 프랜차이즈에 비해',
                '옛날 느낌의 인상이 강해서 다른 커피 프랜차이즈',
                '홈페이지를 참고하여 작업했다.',
                'Slick과 aos를 이용해 보았다',
            ],
            pc: '/images/hollysPc.png',
            mobile: '/images/hollysMo.png',
        },
    },
];

export { db };
