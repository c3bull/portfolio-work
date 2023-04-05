import {
    chirper,
    chirperDemo,
    wywozkapp,
    wywozkappDemo,
    moviesDb,
    moviesDbDemo,
    onSteroids,
    onSteroidsDemo,
    sendCastle,
    quiz,
    quizDemo
} from "../assets/portfolioImages.js"

const portfolioJson = [
    {
        id: 1,
        image: chirper,
        title: 'Chirper',
        github: 'https://github.com/c3bull/Chirper',
        description: "Media społecznościowe wzorowane z postami i czatem",
        hashtags: "React.js, Node.js, JavaScript, MongoDB",
        demo: chirperDemo,
        contributors: [
            {
                github: "https://github.com/Axel2026"
            },
            {
                github: "https://github.com/HathreN"
            },
            {
                github: "https://github.com/p-t-k1"
            },
            {
                github: "https://github.com/pkielbasa"
            },
        ]
    },
    {
        id: 2,
        image: wywozkapp,
        title: 'Wywozkapp',
        github: 'https://github.com/c3bull/Wywozkapp',
        description: "Aplikacja przypominająca o wywozie śmieci",
        hashtags: "React Native, JavaScript",
        demo: wywozkappDemo,
        contributors: [
            {
                github: "https://github.com/Axel2026"
            },
            {
                github: "https://github.com/HathreN"
            },
            {
                github: "https://github.com/p-t-k1"
            },
            {
                github: "https://github.com/pkielbasa"
            },
        ]
    },
    {
        id: 3,
        image: moviesDb,
        title: 'Movies DB',
        github: 'https://github.com/c3bull/moviesDB',
        description: "Baza filmów i seriali",
        hashtags: "React.js, Node.js, JavaScript",
        demo: moviesDbDemo
    },
    {
        id: 4,
        image: onSteroids,
        title: 'onSteroids',
        github: 'https://github.com/c3bull/onsteroids',
        description: "Aplikacja służąca do ustalania i zapisywania treningów na siłowni",
        hashtags: "React Native, JavaScript",
        demo: onSteroidsDemo,
        contributors: [
            {
                github: "https://github.com/Axel2026"
            }
        ]
    },
    {
        id: 5,
        image: sendCastle,
        title: 'SendCastle',
        github: 'https://github.com',
        demo: sendCastle,
        description: "Komunikator między użytkownikami",
        hashtags: "React Native, JavaScript",
        contributors: [
            {
                github: "https://github.com/Axel2026"
            },
            {
                github: "https://github.com/HathreN"
            },
            {
                github: "https://github.com/p-t-k1"
            },
            {
                github: "https://github.com/pkielbasa"
            },
        ]
    },
    {
        id: 6,
        image: quiz,
        title: 'Quiz',
        github: 'https://github.com',
        description: "Aplikacja sprawdzająca wiedzę na wszelkie tematy",
        hashtags: "React Native, JavaScript",
        demo: quizDemo
    },
]

export default portfolioJson
