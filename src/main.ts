import 'vue-fullpage.js/dist/style.css';
import VueFullPage from 'vue-fullpage.js';

import { createApp } from 'vue';
import { router } from '@/routes/index';
import { createPinia } from 'pinia';
import App from './App.vue';
const pinia = createPinia();

createApp(App).use(VueFullPage).use(pinia).use(router).mount('#app');
