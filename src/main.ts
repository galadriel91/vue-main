import 'vue-fullpage.js/dist/style.css';
import VueFullPage from 'vue-fullpage.js';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
const pinia = createPinia();

createApp(App).use(VueFullPage).use(pinia).mount('#app');
