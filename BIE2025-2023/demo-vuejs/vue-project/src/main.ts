import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeFirebase } from './firebaseinit'

const app = createApp(App)

app.use(router)

initializeFirebase()

app.mount('#app')
