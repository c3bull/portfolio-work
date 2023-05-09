import {reactbg, nextjsbg, tailwindbg, cssbg, htmlbg, jsbg, tsbg, graphqlbg, nodejsbg, mongodbbg, posgrebg, adobeilbg, photoshopbg, gimpbg, javabg} from "../assets/backgrounds.js"

const stackFrontend = [
    {
        title: "Frontend Development",
        content: [
            {
                name: "React.js",
                backgroundImg: reactbg,
            },
            {
                name: "Next.js",
                backgroundImg: nextjsbg,
            },
            {
                name: "TailwindCSS",
                backgroundImg: tailwindbg,
            },
            {
                name: "CSS",
                backgroundImg: cssbg,
            },
            {
                name: "HTML",
                backgroundImg: htmlbg,
            },
            {
                name: "JavaScript",
                backgroundImg: jsbg,
            },
            {
                name: "TypeScript",
                backgroundImg: tsbg,
            },
            {
                name: "React Native",
                backgroundImg: reactbg,
            },
            {
                name: "GraphQL",
                backgroundImg: graphqlbg,
            },
        ],
    },
]

const stackBackend = [
    {
        title: "Backend Development",
        content: [
            {
                name: "NodeJS",
                backgroundImg: nodejsbg,
            },
            {
                name: "Java",
                backgroundImg: javabg,
            },
            {
                name: "MongoDB",
                backgroundImg: mongodbbg,
            },
            {
                name: "PostgreSQL",
                backgroundImg: posgrebg,
            },
        ],
    },
]

const stackGraphics = [
    {
        title: "Graphics",
        content: [
            {
                name: "Adobe Illustrator",
                backgroundImg: adobeilbg,
            },
            {
                name: "Adobe Photoshop",
                backgroundImg: photoshopbg,
            },
            {
                name: "Gimp",
                backgroundImg: gimpbg,
            },
        ],
    },
]

const navLinks = [
    {
        id: "strona-glowna",
        title: "home",
    },
    {
        id: "o-mnie",
        title: "about",
    },
    {
        id: "technologie",
        title: "technologies",
    },
    {
        id: "projekty",
        title: "projects",
    },
    {
        id: "doswiadczenie",
        title: "experience",
    },
    {
        id: "kontakt",
        title: "contact",
    },
    {
        id: "jezyk",
        language: "language"
    },
];

export {stackFrontend, stackBackend, stackGraphics, navLinks}