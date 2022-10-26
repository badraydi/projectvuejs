import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Home from './views/Home.vue'
import Showcase from './views/Showcase.vue'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
