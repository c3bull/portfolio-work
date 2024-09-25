import me from "../assets/me.png";
import {textVariant} from "../data/motion.js";
import {motion} from "framer-motion";
import {hexbg} from "../assets/backgrounds.js";

export default function Header() {

    return (
        <section id='strona-glowna' className='overflow-hidden'>
            <div className='bg-primary w-full h-screen flex items-center justify-center overflow-hidden'>
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
                            <motion.p
                                className='text-center font-extrabold text-transparent text-5xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-t from-violet-400 to-violet-700 lg:bg-gradient-to-r'
                                variants={textVariant()}
                                initial='hidden'
                                whileInView='show'
                                viewport={{once: true, amount: 0.25}}>
                                Frontend Developer
                            </motion.p>
                        </div>
                        <img
                            src={me}
                            className='opacity-90 lg:w-96 xl:w-auto shadow-lg rounded-full shadow-violet-700'
                            alt='header photo'
                        />
                    </div>
                </div>
                <div
                    className='w-full h-screen background-animate bg-gradient-linear from-primary via-violet-700/20 to-primary absolute top-0 left-0 overflow-hidden'>
                    <img src={hexbg} alt='threehex' className='h-full max-w-none'/>
                </div>
            </div>
        </section>
    )
}