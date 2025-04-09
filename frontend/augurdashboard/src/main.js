import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';  // Import Element Plus styles

const app = createApp(App);
app.use(ElementPlus);  // Use Element Plus globally
app.mount('#app');
