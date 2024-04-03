import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import "flag-icons/css/flag-icons.css";
import 'bootstrap/dist/js/bootstrap';
import {createI18n, I18n} from "vue-i18n";
import messages from "./lang/vue-i18n-locales.generated";
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'
import axios from "axios";
import "vue-multiselect/dist/vue-multiselect.css"
import "@vueform/toggle/themes/default.css"
import timeago, {TimeagoOptions} from 'vue-timeago3'
import {enUS, fr, de, es} from 'date-fns/locale' // import custom locale

const app = createApp(App);

const i18n = createI18n({
    legacy: false,
    locale: enUS.code,
    fallbackLocale: enUS.code,
    messages,
    availableLocales: [fr.code, de.code, es.code, enUS.code]
})

const timeagoOptions: TimeagoOptions = {
    converterOptions: {
        includeSeconds: false,
    },
    locale: enUS,
}



axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

app.use(store)
app.use(router)
app.use(FloatingVue)
app.use(i18n)
app.use(timeago, timeagoOptions)

app.mount('#app')
