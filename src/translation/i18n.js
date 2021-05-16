import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

// const resources = {};

i18n
    .use(initReactI18next)
    .use(languageDetector)
    .use(HttpApi)
    .init({
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