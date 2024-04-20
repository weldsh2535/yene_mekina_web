
import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", lang: "English" },
    { code: "hi", lang: "አማርኛ" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }
    return <div className="btn-container">
        {
            languages.map((lng) => {
                return <button className={lng.code === i18n.language ? "selected" : ""}
                    key={lng.code} onClick={() => changeLanguage(lng.code)}>{lng.lang}</button>
            })
        }

    </div>
}

export default LanguageSelector;