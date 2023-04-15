import ProjectTemplate from "./ProjectTemplate.jsx";
import portfolioJson from "../data/portfolio.js";
import {textVariant} from "../data/motion.js";
import {motion} from "framer-motion";
import {hexside} from "../assets/backgrounds.js";

export default function Projects() {
    return (
        <section id='projekty' className='flex flex-col justify-center items-center w-full py-12 bg-primary relative'>
            <motion.p className='uppercase font-semibold text-white text-center text-4xl pb-16'
                      variants={textVariant(0.25)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{once: true, amount: 0.25}}>Projekty
            </motion.p>
            <div className='w-2/3 z-10'>
                <div
                    className='flex flex-col md:grid md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(3,1fr)] gap-6 w-full'>
                    {portfolioJson.map(({
                                            id,
                                            image,
                                            title,
                                            github,
                                            demo,
                                            contributors,
                                            description,
                                            hashtags
                                        }, index) => (
                        <ProjectTemplate
                            key={index}
                            index={index}
                            title={title}
                            demo={demo}
                            id={id}
                            contributors={contributors}
                            github={github}
                            description={description}
                            hashtags={hashtags}
                            image={image}/>
                    ))}
                </div>
            </div>
            <div
                className='hidden background-animate bg-gradient-radial from-violet-700/30 to-primary to-60% md:block absolute top-0 right-0 scale-75 lg:scale-100'>
                <img src={hexside} alt='threehex'/>
            </div>
            <div
                className='hidden background-animate bg-gradient-radial from-violet-700/30 to-primary to-60% md:block absolute top-0 left-0 scale-75 lg:scale-100'>
                <img src={hexside} alt='threehex'/>
            </div>
        </section>
    )
}