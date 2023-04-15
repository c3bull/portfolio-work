import me from "../assets/me.png";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {useCallback} from "react";
import {textVariant} from "../data/motion.js";
import {motion} from "framer-motion";

export default function Header() {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <section id='strona-glowna'>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {enable: false},
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                // enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 10,
                            },
                            repulse: {
                                distance: 50,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#FFFFFF",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 2500,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className='bg-primary w-full h-screen flex items-center justify-center '>
                <div className='w-3/4 lg:w-3/4 z-10'>
                    <div className='flex flex-col-reverse lg:flex-row gap-14 md:gap-28 items-center justify-around'>
                        <div className='flex flex-col gap-10'>
                            <motion.p className='text-center font-bold text-white text-5xl'
                                      variants={textVariant()}
                                      initial='hidden'
                                      whileInView='show'
                                      viewport={{once: true, amount: 0.25}}>
                                Jakub Cebula
                            </motion.p>
                            <motion.p className='text-center font-extrabold text-transparent text-5xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-t to-violet-700 from-blue-500 lg:bg-gradient-to-r'
                                      variants={textVariant()}
                                      initial='hidden'
                                      whileInView='show'
                                      viewport={{once: true, amount: 0.25}}>
                                Junior Frontend Developer
                            </motion.p>
                        </div>
                        <img
                            src={me}
                            className='opacity-90 lg:w-96 xl:w-auto shadow-lg rounded-full shadow-violet-700'
                            alt='header photo'
                        />
                    </div>
                </div>
                <div className='w-full h-screen bg-main-bg bg-contain absolute opacity-[0.03]' />
                <div className='w-full h-screen bg-gradient-linear from-transparent to-primary absolute' />
            </div>
        </section>
    )
}