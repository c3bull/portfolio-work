import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
    lng: "",
    resources: {
        en: {
            translation: {
                Hi: "Hi",
                Actions: "Actions",
                home: "Home page",
                about: "About",
                technologies: "Technologies",
                projects: "Projects",
                experience: "Experience",
                contact: "Contact",
            }
        },
        pl: {
            translation: {
                Hi: "Cześć",
                Actions: "Akcje",
                home: "Strona główna",
                about: "O mnie",
                technologies: "Technologie",
                projects: "Projekty",
                experience: "Doświadczenie",
                contact: "Kontakt",
            }
        },
    },
    keySeparator: false,
    interpolation: { escapeValue: false }
});

export default i18n;
