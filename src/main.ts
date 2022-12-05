import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PlutoUI from "pluto-ui-vite";
import "pluto-ui-vite/entry.css";

createApp(App)
    .use(PlutoUI).mount('#app')
