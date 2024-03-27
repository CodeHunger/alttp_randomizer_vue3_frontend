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

const app = createApp(App);

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

app.use(store)
app.use(router)
app.use(FloatingVue)
app.use(i18n)


app.provide<I18n>('i18n', i18n);
app.mount('#app')
