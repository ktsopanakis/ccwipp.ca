import { createApp, VueElement } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import { createMetaManager } from 'vue-meta'
import i18n from './i18n'





const app = createApp( App)
    .use( router)
    .use( createMetaManager())
    .use(i18n)

await router.isReady()
app.mount('#app')


