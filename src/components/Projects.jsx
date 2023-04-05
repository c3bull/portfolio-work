import ProjectTemplate from "./ProjectTemplate.jsx";
import portfolioJson from "../data/portfolio.js";

export default function Projects() {
    return (
        <div className='flex flex-col justify-center items-center w-full py-16 bg-primary'>
            <p className='text-white text-center text-4xl pb-16'>Projekty</p>
            <div className='w-2/3'>
                <div className='grid grid-cols-[repeat(3,1fr)] gap-6 w-full'>
                    {portfolioJson.map(({id, image, title, github, demo, contributors, description, hashtags}) => (
                        <ProjectTemplate
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