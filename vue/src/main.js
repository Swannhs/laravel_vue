import { createApp } from 'vue'
import App from './App.vue'
import store from "../public/store";

createApp(App).use(store).mount('#app')
