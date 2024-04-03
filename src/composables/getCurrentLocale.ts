import {Ref, ref, watch, WatchStopHandle} from "vue";
import {de, enUS, es, fr} from "date-fns/locale";
import {useI18n} from "vue-i18n";

export const availableLocales = ['es', 'fr', 'de', 'en-US']
export const localesByCode: Record<typeof availableLocales[number], Locale> = {
    'es': es,
    'fr': fr,
    'de': de,
    'en-US': enUS,
}

const currentLocale = ref(enUS);
let watcher1: WatchStopHandle;

export const getCurrentLocale = (): Ref<Locale> => {
    if (!watcher1) {
        const { locale } = useI18n();
        watcher1 = watch(locale, (newLocale) => {
            if (newLocale && availableLocales.includes(newLocale)) {
                const localeCode = newLocale;

                if (availableLocales.includes(localeCode)) {
                    currentLocale.value = localesByCode[localeCode];
                }
            }
        });

        currentLocale.value = localesByCode[locale.value];
    }

    return currentLocale;
}