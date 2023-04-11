import ProjectTemplate from "./ProjectTemplate.jsx";
import portfolioJson from "../data/portfolio.js";
import {textVariant} from "../data/motion.js";
import {motion} from "framer-motion";

export default function Projects() {
    return (
        <div className='flex flex-col justify-center items-center w-full py-12 bg-primary'>
            <motion.p className='uppercase font-semibold text-white text-center text-4xl pb-16'
               variants={textVariant(0.25)}
               initial='hidden'
               whileInView='show'
               viewport={{once: true, amount: 0.25}}>Projekty</motion.p>
            <div className='w-2/3'>
                <div className='grid grid-cols-[repeat(3,1fr)] gap-6 w-full'>
                    {portfolioJson.map(({id, image, title, github, demo, contributors, description, hashtags}, index) => (
                        <ProjectTemplate
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
        </div>
    )
}