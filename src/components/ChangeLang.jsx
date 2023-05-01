import React, {useCallback, useEffect, useState} from "react";
import i18n from "i18next";
import {plflag, engflag} from "../assets/icons.js";
import {useTranslation} from "react-i18next";

export default function ChangeLang({style}) {
    const [language, setLanguage] = useState(localStorage.getItem("lang") || "pl")

    const langChange = (e) => {
        setLanguage(language === "pl" ? "en" : "pl");
    };
    useEffect(() => {
        localStorage.setItem("lang", language);
        i18n.changeLanguage(language);
    }, [language]);


    const {t} = useTranslation()
    return (
        <div className='w-12 h-12 absolute right-10 top-1 my-auto bottom-0'>
            <img onClick={langChange} src={language === "pl" ? plflag : engflag}
                 className={style}
                 alt='change language'
            />
        </div>
    );

}