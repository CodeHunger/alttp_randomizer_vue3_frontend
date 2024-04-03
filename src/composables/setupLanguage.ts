import {ref} from 'vue';
import {useI18n} from "vue-i18n";

export const STORAGE_KEY = "appLanguage";
const SUPPORTED_LANGUAGES = ['en', 'de', 'fr', 'es'];
const DEFAULT_LANGUAGE = 'es';
export default function setupLanguage() {
    const { locale } = useI18n();
    const browserLanguage = getBrowserLanguage();
    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    console.log(browserLanguage);

    const currentLanguage = ref(DEFAULT_LANGUAGE);

    if (storedLanguage) {
        currentLanguage.value = storedLanguage;
    } else if (SUPPORTED_LANGUAGES.includes(browserLanguage)) {
        currentLanguage.value = browserLanguage;
        localStorage.setItem(STORAGE_KEY, currentLanguage.value);
    }

    locale.value = currentLanguage.value;

    return { currentLanguage };
}

function getBrowserLanguage(): string {
    return navigator.language.split('-')[0]; // Get the language code
}