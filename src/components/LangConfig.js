import {initReactI18next} from "react-i18next";
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
                aboutDescription: 'Hello, I am Kuba. ' +
                    'I am passionate about front-end development. ' +
                    'Technologies, that I am fluent with are React.js, Next.js, React Native, HTML, JavaScript, TailwindCSS. ' +
                    'Also I can work with NodeJS, MongoDB and PostreSQL. ' +
                    'I am interested in Graphics as well. ' +
                    'I use Adobe Illustrator, Adobe Photoshop and Gimp to create logos and correct photos.',
                projectSykLykBisDecription: "Online store of a distributor of juices, drinks and water",
                projectChirperDecription: "Social media website with posts and chat",
                projectWywozkappDecription: "Garbage collection reminder app",
                projectMovieDbDecription: "Database of movies and series",
                projectOnSteroidsDecription: "Mobile app for setting and saving workouts at the gym",
                projectQuizDecription: "Mobile app for testing knowledge about all kind of topics",
                engineer: "Engineer",
                engineeringWork: "Defense of the Engineer's Thesis (topic: \"Design and implementation of a police intervention simulation system\")",
                course: "Course",
                socialMediaManagerDate: "18.02.2023 - now",
                socialMediaManagerDescription: "Participation in the Social Media Manager course, only on selected weekends",
                studentWorkPlacements: "Student Work Placements",
                cracow: "Cracow",
                studentWorkPlacementsDescription: "Student work placements at Awesome Industries Ltd.",
                itStudies: "IT studies",
                itStudiesDescription: "IT studies at the University of Applied Sciences in Tarnow with a specialization of software engineering",
                certificate: "Certificate",
                tarnow: "Tarnow",
                e12: "Obtaining a professional qualification certificate E.12",
                e13: "Obtaining a professional qualification certificate E.13",
                e14: "Obtaining a professional qualification certificate E.14",
                itTechnicalSchool: "IT technical school",
                itTechnicalSchoolDescription: "Technical Secondary School in IT - Zespół Szkół Mechaniczno Elektrycznych w Tarnowie",
                sections: "Sections",
                contactHint: "Click on the icon to go to the way of contact you are interested in."
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
                aboutDescription: 'Cześć, jestem Kuba. ' +
                    'Pasjonuję się tworzeniem stron internetowych. ' +
                    'Technologie, których używam to głównie React.js, Next.js, React Native, HTML, JavaScript, TailwindCSS. ' +
                    'Dodatkowo potrafię korzystać z NodeJS, MongoDB oraz PostreSQL. ' +
                    'Interesuje mnie również tworzenie grafik komputerowych. ' +
                    'Do tworzenia logo i poprawania zdjęć używam Adobe Illustrator, Adobe Photoshop oraz Gimp.',
                projectSykLykBisDecription: "Sklep internetowy dystrybutora soków, napoi i wody",
                projectChirperDecription: "Media społecznościowe z postami i czatem",
                projectWywozkappDecription: "Aplikacja przypominająca o wywozie śmieci",
                projectMovieDbDecription: "Baza filmów i seriali",
                projectOnSteroidsDecription: "Aplikacja służąca do ustalania i zapisywania treningów na siłowni",
                projectQuizDecription: "Aplikacja sprawdzająca wiedzę na wszelkie tematy",
                engineer: "Tytuł inżyniera",
                engineeringWork: "Obrona pracy inżynierskiej (temat: \"Projekt i implementacja systemu symulacji interwencji policyjnych\")",
                course: "Kurs",
                socialMediaManagerDate: "18.02.2023 - obecnie",
                socialMediaManagerDescription: "Udział w kursie Social Media Manager, odbywający się w wybrane weekendy",
                studentWorkPlacements: "Praktyka zawodowa",
                cracow: "Kraków",
                studentWorkPlacementsDescription: "Odbywanie praktyk w firmie Awesome Industries sp. z o.o.",
                itStudies: "Studia informatyczne",
                itStudiesDescription: "Studia informatyczne w Akademii Nauk Stosowanych w Tarnowie ze specjalizacją inżynierii oprogramowania",
                certificate: "Certyfikat",
                tarnow: "Tarnów",
                e12: "Uzyskanie certyfikatu kwalifikacji zawodowej E.12",
                e13: "Uzyskanie certyfikatu kwalifikacji zawodowej E.13",
                e14: "Uzyskanie certyfikatu kwalifikacji zawodowej E.14",
                itTechnicalSchool: "Technikum informatyczne",
                itTechnicalSchoolDescription: "Technikum o kierunku informatycznym - Zespół Szkół Mechaniczno Elektrycznych w Tarnowie",
                sections: "Sekcje",
                contactHint: "Kliknij ikonę, aby przejść do interesującej Cię formy kontaktu."
            }
        },
    },
    keySeparator: false,
    interpolation: {escapeValue: false}
});

export default i18n;
