import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import axios from 'axios';

// Set base URL for Axios based on environment
if (import.meta.env?.MODE === 'development' || process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:7071/api';
} else {
  axios.defaults.baseURL = '/api';
}

// Create the Vue app instance
const app = createApp(App);

// Use ElementPlus UI library
app.use(ElementPlus);

// Mount the app to the DOM
app.mount('#app');
