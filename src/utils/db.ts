import type { ProjectItem } from '@/store/types';

const db: ProjectItem[] = [
    {
        id: 1,
        vue: false,
        react: false,
        markup: true,
        title: '도미노피자 메인 퍼블리싱',
        time: '2022-03',
        rating: 0,
        skills: [
            {
                src: '/src/assets/image/html5.png',
                title: 'HTML 로고 아이콘',
            },
            {
                src: '/src/assets/image/css3.png',
                title: 'CSS 로고 아이콘',
            },
            { src: '/src/assets/image/js.png', title: 'JS 로고 아이콘' },
        ],
        posts: {
            mainImage: '/src/assets/image/domino.png',
            title: '도미노피자',
            subTitle: '웹 사이트 퍼블리싱',
            responsive: 'X',
            deploy: 'CAFE24',
            sites: [
                { link: 'https://web.dominos.co.kr/main', name: '기존사이트' },
                {
                    link: 'http://galadriel91.cafe24.com/domino/',
                    name: '리뉴얼 사이트',
                },
                {
                    link: 'https://github.com/galadriel91/html-basic/tree/master/03.Domino',
                    name: '설명 및 코드',
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
        },
    },
    {
        id: 2,
        vue: false,
        react: false,
        markup: true,
        title: '알파색채 메인 퍼블리싱',
        time: '2022-03',
        rating: 0,
        skills: [
            {
                src: '/src/assets/image/html5.png',
                title: 'HTML 로고 아이콘',
            },
            {
                src: '/src/assets/image/css3.png',
                title: 'CSS 로고 아이콘',
            },
            { src: '/src/assets/image/js.png', title: 'JS 로고 아이콘' },
        ],
        posts: {
            mainImage: '/src/assets/image/alpha.png',
            title: '알파색채',
            subTitle: '웹 사이트 퍼블리싱',
            responsive: 'O',
            deploy: 'CAFE24',
            sites: [
                { link: 'http://www.alphacolor.com/', name: '기존사이트' },
                {
                    link: 'http://galadriel91.cafe24.com/alphacolor/',
                    name: '리뉴얼 사이트',
                },
                {
                    link: 'https://github.com/galadriel91/html-basic/tree/master/01.AlphaColor',
                    name: '설명 및 코드',
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
        },
    },
    {
        id: 3,
        title: '할리스커피 메인 퍼블리싱',
        vue: false,
        react: false,
        markup: true,
        time: '2022-03',
        rating: 0,
        skills: [
            {
                src: '/src/assets/image/html5.png',
                title: 'HTML 로고 아이콘',
            },
            {
                src: '/src/assets/image/css3.png',
                title: 'CSS 로고 아이콘',
            },
            { src: '/src/assets/image/js.png', title: 'JS 로고 아이콘' },
        ],
        posts: {
            mainImage: '/src/assets/image/hollys.png',
            title: '할리스 커피',
            subTitle: '웹 사이트 퍼블리싱',
            responsive: 'O',
            deploy: 'CAFE24',
            sites: [
                { link: 'https://www.hollys.co.kr/', name: '기존사이트' },
                {
                    link: 'http://galadriel91.cafe24.com/hollys/index.html',
                    name: '리뉴얼 사이트',
                },
                {
                    link: 'https://github.com/galadriel91/html-basic/tree/master/02.Hollys',
                    name: '설명 및 코드',
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
        },
    },
    {
        id: 4,
        title: 'Vue & React Todo',
        vue: true,
        react: true,
        markup: false,
        time: '2022-01',
        rating: 0,
        skills: [
            {
                src: '/src/assets/image/vue.png',
                title: 'Vue 로고 아이콘',
            },
            {
                src: '/src/assets/image/react.png',
                title: 'Vue 로고 아이콘',
            },
            {
                src: '/src/assets/image/sass.png',
                title: 'Sass 로고 아이콘',
            },
        ],
        posts: {
            mainImage: '/src/assets/image/reactvue.png',
            title: 'Vue & React CRUD',
            subTitle: 'Vue & React Todo 구현',
            responsive: 'O',
            deploy: 'CAFE24',
            backend: 'JSONPlaceholder',
            sites: [
                {
                    link: 'https://galadriel91.cafe24.com/vuetodo/',
                    name: 'Vue 사이트',
                },
                {
                    link: 'https://galadriel91.cafe24.com/reacttodo/',
                    name: 'React 사이트',
                },
                {
                    link: 'https://github.com/galadriel91/vue-basic/tree/master/04.VueTodo/Advance',
                    name: '설명 및 코드',
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
        },
    },
    // {
    //     id: 5,
    //     title: 'Hacker News',
    //     vue: true,
    //     react: false,
    //     markup: false,
    //     time: '2022-03',
    //     rating: 0,
    //     skills: [
    //         {
    //             src: require('@/assets/image/vue.png'),
    //             title: 'Vue 로고 아이콘',
    //         },
    //         {
    //             src: require('@/assets/image/sass.png'),
    //             title: 'Sass 로고 아이콘',
    //         },
    //     ],
    //     posts: {
    //         index: 5,
    //         mainImage: require('@/assets/image/vuemain.png'),
    //         title: 'Vue CLI',
    //         subTitle: 'Vue CLI & Vue Router',
    //         responsive: 'O',
    //         deploy: 'Netlify',
    //         backend: 'Hacker Api',
    //         sites: [
    //             { link: 'https://news.ycombinator.com/', name: '기존 사이트' },
    //             { link: 'https://cliadvance.netlify.app', name: '제작 사이트' },
    //             {
    //                 link: 'https://github.com/galadriel91/vue-basic/tree/master/05.VueCli/Advance',
    //                 name: '설명 및 코드',
    //             },
    //         ],
    //         support: [
    //             {
    //                 src: require('@/assets/image/Chromium.png'),
    //                 title: '크로미움 로고',
    //             },
    //             {
    //                 src: require('@/assets/image/fox.png'),
    //                 title: '파이어폭스 로고',
    //             },
    //         ],
    //     },
    // },
    // {
    //     id:3,
    //     title:'할리스커피 메인 퍼블리싱',
    //     vue:false,
    //     react:false,
    //     markup:true,
    //     time:"2021-12",
    //     rating:0,
    //     skills:[
    //         {src:require("@/assets/image/html5.png") , title:'HTML 로고 아이콘'},
    //         {src:require("@/assets/image/css3.png") , title:'CSS 로고 아이콘'},
    //         {src:require("@/assets/image/js.png") , title:'JS 로고 아이콘'}
    //     ],
    //     posts:{
    //         index:3,
    //         mainImage:require("@/assets/image/hollys.png"),
    //         title:'할리스 커피',
    //         subTitle:'웹 사이트 퍼블리싱',
    //         responsive:'O',
    //         deploy:'CAFE24',
    //         sites:[
    //             {link:'https://www.hollys.co.kr/' , name:"기존사이트"},
    //             {link:'http://galadriel91.cafe24.com/hollys/index.html' , name:"리뉴얼 사이트"},
    //             {link:'https://github.com/galadriel91/html-basic/tree/master/02.Hollys' , name:"설명 및 코드"}
    //         ],
    //         support:[
    //             {src:require("@/assets/image/Chromium.png") , title:'크로미움 로고'},
    //             {src:require("@/assets/image/fox.png") , title:'파이어폭스 로고'}
    //         ]
    //     }
    // },
    // {
    //     id:4,
    //     title:'Vue & React Todo',
    //     vue:true,
    //     react:true,
    //     markup:false,
    //     time:"2022-01",
    //     rating:0,
    //     skills:[
    //         {src:require("@/assets/image/vue.png") , title:'Vue 로고 아이콘'},
    //         {src:require("@/assets/image/react.png") , title:'Vue 로고 아이콘'},
    //         {src:require("@/assets/image/sass.png") , title:'Sass 로고 아이콘'},
    //     ],
    //     posts:{
    //         index:4,
    //         mainImage:require("@/assets/image/reactvue.png"),
    //         title:'Vue & React CRUD',
    //         subTitle:'Vue & React Todo 구현',
    //         responsive:'O',
    //         deploy:'CAFE24',
    //         backend:'JSONPlaceholder',
    //         sites:[
    //             {link:'https://galadriel91.cafe24.com/vuetodo/' , name:"Vue 사이트"},
    //             {link:'https://galadriel91.cafe24.com/reacttodo/' , name:"React 사이트"},
    //             {link:'https://github.com/galadriel91/vue-basic/tree/master/04.VueTodo/Advance' , name:"설명 및 코드"}
    //         ],
    //         support:[
    //             {src:require("@/assets/image/Chromium.png") , title:'크로미움 로고'},
    //             {src:require("@/assets/image/fox.png") , title:'파이어폭스 로고'}
    //         ]
    //     }
    // },
    // {
    //     id:5,
    //     title:'Vue CLI & Vue Router',
    //     vue:true,
    //     react:false,
    //     markup:false,
    //     time:"2022-01",
    //     rating:0,
    //     skills:[
    //         {src:require("@/assets/image/vue.png") , title:'Vue 로고 아이콘'},
    //         {src:require("@/assets/image/sass.png") , title:'Sass 로고 아이콘'},
    //     ],
    //     posts:{
    //         index:5,
    //         mainImage:require("@/assets/image/vuemain.png"),
    //         title:'Vue CLI',
    //         subTitle:'Vue CLI & Vue Router',
    //         responsive:'O',
    //         deploy:'Netlify',
    //         backend:'Hacker Api',
    //         sites:[
    //             {link:'https://news.ycombinator.com/' , name:"기존 사이트"},
    //             {link:'https://cliadvance.netlify.app' , name:"제작 사이트"},
    //             {link:'https://github.com/galadriel91/vue-basic/tree/master/05.VueCli/Advance' , name:"설명 및 코드"}
    //         ],
    //         support:[
    //             {src:require("@/assets/image/Chromium.png") , title:'크로미움 로고'},
    //             {src:require("@/assets/image/fox.png") , title:'파이어폭스 로고'}
    //         ]
    //     }
    // },
    // {
    //     id:6,
    //     title:'Vue FrameWork NuxtJS',
    //     vue:true,
    //     react:false,
    //     markup:false,
    //     time:"2022-01",
    //     rating:0,
    //     skills:[
    //         {src:require("@/assets/image/vue.png") , title:'Vue 로고 아이콘'},
    //         {src:require("@/assets/image/sass.png") , title:'Sass 로고 아이콘'},
    //     ],
    //     posts:{
    //         index:6,
    //         mainImage:require("@/assets/image/vuemain.png"),
    //         title:'Vue NuxtJS',
    //         subTitle:'Vue FrameWork NuxtJS',
    //         responsive:'O',
    //         deploy:'Netlify',
    //         backend:'JSONPlaceholder',
    //         sites:[
    //             {link:'https://nuxtadvance.netlify.app' , name:"Vue 사이트"},
    //             {link:'https://github.com/galadriel91/vue-basic/tree/master/06.VueNuxt/Advance' , name:"설명 및 코드"}
    //         ],
    //         support:[
    //             {src:require("@/assets/image/Chromium.png") , title:'크로미움 로고'},
    //             {src:require("@/assets/image/fox.png") , title:'파이어폭스 로고'}
    //         ]
    //     }
    // },
];

export { db };
