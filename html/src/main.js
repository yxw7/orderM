import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { registerOrderManagePrdData } from '@/prd/order-manage-prd-data';
import { registerOrderLineDetailPrdData } from '@/prd/order-line-detail-prd-data';
import { registerBibQueryPrdData } from '@/prd/bib-query-prd-data';
import { registerAcceptanceDetailPrdData } from '@/prd/acceptance-detail-prd-data';
import { registerAcceptanceManagePrdData } from '@/prd/acceptance-manage-prd-data';
import { registerReceiveByItemPrdData } from '@/prd/receive-by-item-prd-data';
import './styles/main.css';

registerOrderManagePrdData();
registerOrderLineDetailPrdData();
registerBibQueryPrdData();
registerAcceptanceDetailPrdData();
registerAcceptanceManagePrdData();
registerReceiveByItemPrdData();

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
