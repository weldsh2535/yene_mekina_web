import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbacklng: 'en',
        returnObjects: true,
        // resources: {
        //     en: {
        //         translation: {
        //             Login: "Login",
        //             welcome_to_yenemekina: "Welcome to yene mekina"
        //         }
        //     },
        //     hi: {
        //         translation: {
        //             Login: "ግባ",
        //             welcome_to_yenemekina: "እንኳን ወደ yene mekina መጡ"
        //         }
        //     }
        // }
    });