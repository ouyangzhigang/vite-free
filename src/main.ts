import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App'
import router from './router'
// import Worker from './worker?worker'

import './assets/main.css'

// const worker = new Worker()
// worker.onmessage = function (e) {
//   console.log(e)
// }

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
