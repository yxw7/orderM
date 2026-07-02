import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { registerOrderManagePrdData } from '@/prd/order-manage-prd-data';
import { registerOrderLineDetailPrdData } from '@/prd/order-line-detail-prd-data';
import './styles/main.css';

registerOrderManagePrdData();
registerOrderLineDetailPrdData();

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
