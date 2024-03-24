import {watch} from 'vue';
import {useI18n} from "vue-i18n";
import { STORAGE_KEY } from "@/composables/setupLanguage";
export default function watchLanguage() {
    const { locale } = useI18n();
    watch(locale, (newLocale) => {
        localStorage.setItem(STORAGE_KEY, newLocale);
    });
}