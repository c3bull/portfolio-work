import Typed from 'react-typed';
import {aboutmeimg} from "../assets/backgrounds.js"
import flair from "../assets/flair.png"
import {useEffect, useState} from "react";
import githubImg from "../assets/projects/github.png"
import linkedinImg from "../assets/projects/linkedin.png"
import {textVariant} from "../data/motion.js";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

export default function About() {
    const [scrollTop, setScrollTop] = useState(0);
    // let language = localStorage.getItem("lang");
    let language = "pl";
    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const {t} = useTranslation();
    
    return (
        <section id='o-mnie'
                 className='h-screen lg:h-auto text-white flex flex-col justify-center items-center bg-primary w-full py-12'>
            <motion.p className='uppercase font-semibold text-center text-4xl'
                      variants={textVariant(0.25)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{once: true, amount: 0.25}}>{t("about")}
            </motion.p>
            <div className='relative h-full overflow-hidden'>
                <div
                    className='absolute w-full h-full z-10 bg-gradient-linear from-[#0b0d0f] via-transparent to-[#0b0d0f]'/>
                <img src={aboutmeimg} alt="bgimg"
                     className={`relative h-full w-auto lg:w-screen object-cover top-0 left-0 ${scrollTop >= 650 ? 'opacity-100' : 'opacity-30'} duration-200`}
                />
                <div
                    className='overflow-hidden flex justify-around w-full top-2 lg:top-10 left-0 right-0 mx-auto absolute z-20'>
                    <img src={flair} alt="spotlight"
                         className={`${scrollTop >= 650 ? 'opacity-90 scale-x-125 blur-lg' : 'opacity-20 scale-x-75'} duration-300`}
                    />
                </div>
                <div
                    className='z-20 opacity-70 absolute w-4/5 lg:w-1/2 top-28 md:top-36 lg:top-12 xl:top-32 2xl:top-52 p-5 left-0 right-0 mx-auto text-md md:text-lg xl:text-xl'>
                    {language === "en" && <Typed
                        strings={[t("aboutDescription")]}
                        typeSpeed={40}
                    />}
                    {language === "pl" && <Typed
                        strings={[t("aboutDescription")]}
                        typeSpeed={40}
                    />}
                </div>

                <div
                    className='hidden md:flex justify-center gap-10 w-fit p-10 bottom-5 md:bottom-1/4 lg:bottom-12 xl:bottom-24 left-0 right-0 mx-auto absolute z-20'>
                    <div
                        className='bg-white p-0.5 rounded-full w-24 h-24 xl:w-32 xl:h-32 hover:opacity-70 duration-200'>
                        <a href="https://github.com/c3bull" target="_blank">
                            <img src={githubImg} alt='github'/>
                        </a>
                    </div>
                    <div className='bg-white p-0.5 rounded-xl w-24 h-24 xl:w-32 xl:h-32 hover:opacity-70 duration-200'>
                        <a href="https://www.linkedin.com/in/cebula-jakub/" target="_blank">
                            <img src={linkedinImg} alt='github'/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}