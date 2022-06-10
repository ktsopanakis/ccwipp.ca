import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createMetaManager } from 'vue-meta'

const app = createApp( App)
    .use( router)
    .use( createMetaManager())

await router.isReady()
app.mount('#app')


