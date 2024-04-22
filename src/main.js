import { createApp } from 'vue'
import './style.css'
import router from './plugins/router'
import App from './App.vue'


const app = createApp(App);
app.use(router).mount("#app");
