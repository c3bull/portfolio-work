import Typed from 'react-typed';
import {aboutmeimg} from "../assets/backgrounds.js"
import flair from "../assets/flair.png"
import {useEffect, useState} from "react";
import githubImg from "../assets/projects/github.png"
import linkedinImg from "../assets/projects/linkedin.png"
import {textVariant} from "../data/motion.js";
import {motion} from "framer-motion";

export default function About() {
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = (event) => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='text-white flex flex-col justify-center items-center bg-primary w-full py-12'>
            <motion.p className='uppercase font-semibold text-center text-4xl'
                      variants={textVariant(0.25)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{once: true, amount: 0.25}}>O mnie
            </motion.p>
            <div className='relative'>
                <div
                    className='absolute w-full h-full z-10 bg-gradient-linear from-[#0b0d0f] via-transparent to-[#0b0d0f]'/>
                <img src={aboutmeimg} alt="bgimg"
                     className={`relative w-full h-full top-0 left-0 ${scrollTop >= 800 ? 'opacity-100' : 'opacity-30'} duration-200`}/>
                <div className='overflow-hidden flex justify-around w-full top-10 left-0 right-0 mx-auto absolute z-20'>
                    <img src={flair} alt="spotlight"
                         className={`${scrollTop >= 800 ? 'opacity-90 scale-x-125 blur-lg' : 'opacity-20 scale-x-75'} duration-300`}/>
                    {/*<img src={flair} alt="spotlight" className='object-contain'/>*/}
                </div>
                <div className='absolute w-1/2 top-1/4 p-5 left-0 right-0 mx-auto text-xl'>
                    <Typed
                        strings={['Cześć, jestem Kuba. ' +
                        'Pasjonuję się tworzeniem stron internetowych. ' +
                        'Technologie, których używam to głównie React.js, Next.js, React Native, HTML, JavaScript, TailwindCSS. ' +
                        'Dodatkowo potrafię korzystać z NodeJS, MongoDB oraz PostreSQL. ' +
                        'Interesuje mnie również tworzenie grafik komputerowych. ' +
                        'Do tworzenia logo i poprawania zdjęć używam Adobe Illustrator, Adobe Photoshop oraz Gimp.']}
                        typeSpeed={40}
                    />
                </div>

                <div
                    className='flex justify-center gap-10 w-fit p-10 top-1/2 left-0 right-0 mx-auto absolute z-20'>
                    <div className='bg-white p-0.5 rounded-full w-32 hover:opacity-70 duration-200'>
                        <a href="https://github.com/c3bull" target="_blank">
                            <img src={githubImg} alt='github'/>
                        </a>
                    </div>
                    <div className='bg-white p-0.5 rounded-xl w-32 hover:opacity-70 duration-200'>
                        <a href="https://www.linkedin.com/in/cebula-jakub/" target="_blank">
                            <img src={linkedinImg} alt='github'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}