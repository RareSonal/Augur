

import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from 'axios';

// Create the Vue app instance
const app = createApp(App);

// Use ElementPlus UI library
app.use(ElementPlus);

// Mount the app to the DOM
app.mount('#app');

// Optionally, set a global axios base URL (change to your API's base URL if needed)
axios.defaults.baseURL = 'http://localhost:7071/api';

