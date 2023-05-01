import {
    chirper,
    chirperDemo,
    wywozkapp,
    wywozkappDemo,
    moviesDb,
    moviesDbDemo,
    onSteroids,
    onSteroidsDemo,
    quiz,
    quizDemo,
    syklykbis,
} from "../assets/portfolioImages.js"

const portfolioJson = [
    {
        id: 0,
        image: syklykbis,
        title: 'Syk Łyk Bis',
        github: 'https://github.com/c3bull/syklykbis-taw',
        demo: 'https://user-images.githubusercontent.com/80101130/224050463-6afc05dc-aaff-4fa3-a494-7cf8871583c6.gif',
        description: "projectSykLykBisDecription",
        hashtags: "React.js, Node.js, JavaScript, TalwindCSS, GraphQL, MongoDB",
    },
    {
        id: 1,
        image: chirper,
        title: 'Chirper',
        github: 'https://github.com/c3bull/Chirper',
        description: "projectChirperDecription",
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
        description: "projectWywozkappDecription",
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
        description: "projectMovieDbDecription",
        hashtags: "React.js, Node.js, JavaScript",
        demo: moviesDbDemo
    },
    {
        id: 4,
        image: onSteroids,
        title: 'onSteroids',
        github: 'https://github.com/c3bull/onsteroids',
        description: "projectOnSteroidsDecription",
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
        image: quiz,
        title: 'Quiz',
        github: 'https://github.com',
        description: "projectQuizDecription",
        hashtags: "React Native, JavaScript",
        demo: quizDemo
    },
]

export default portfolioJson
