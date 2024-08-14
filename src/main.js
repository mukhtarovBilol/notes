import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PiniaPersist from 'pinia-plugin-persist'
import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()
pinia.use(PiniaPersist) // Подключаем плагин для сохранения состояния

app.use(pinia)
app.mount('#app')