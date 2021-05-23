import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import translationUZ from  './locales/uz/translation.json'
import translationRUS from  './locales/ру/translation.json'
import translationOZ from  './locales/ўз/translation.json'

const resources = {
    uz: {translation: translationUZ,},
    ўз: {translation: translationOZ,},
    ру: {translation: translationRUS,},
};

i18n
    .use(initReactI18next)
    .use(languageDetector)
    .use(HttpApi)
    .init({
        resources,
        supportedLngs:["ру","uz","ўз"],
        fallbackLng:"uz",
        detection:{
            order:['cookie','htmlTag', 'localStorage', 'path', 'subdomain'],
            caches:['cookie']
        },
        backend:{
            loadPath: '/assets/locales/{{lng}}/translation.json'
        },
        // react: {useSuspense:false}
    });

export default i18n;