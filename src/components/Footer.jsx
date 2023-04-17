import {textVariant} from "../data/motion.js";
import {motion} from "framer-motion";
import {MdOutgoingMail, linkedin, github} from '../assets/icons.js'
import {hexbg} from "../assets/backgrounds.js";

export default function Footer() {

    return (
        <div className='border-t border-gray-600 relative'>
            <div className='bg-primary w-full min-h-[50vh] flex justify-center items-center py-10'>
                <div className='w-3/4 lg:w-3/4 z-10'>
                    <div
                        className='text-gray-500 flex flex-col md:flex-row gap-12 md:gap-28 justify-center text-center md:text-start'>
                        <div>
                            <motion.p
                                className='pb-4 uppercase text-lg'
                                variants={textVariant()}
                                initial='hidden'
                                whileInView='show'
                                viewport={{once: true, amount: 0.25}}>
                                Kontakt
                            </motion.p>
                            <div className='text-white flex flex-col gap-2 items-center md:items-start'>
                                <div className='flex items-center gap-1'>
                                    <img className='w-5 h-5' src={MdOutgoingMail} alt='email'/>
                                    <p>jakub.cebula9@gmail.com</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className='w-5 h-5' src={linkedin} alt='email'/>
                                    <p>LinkedIn</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className='w-5 h-5 bg-white rounded-full p-0.5' src={github} alt='email'/>
                                    <p>Github</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <motion.p
                                className='pb-4 uppercase text-lg'
                                variants={textVariant()}
                                initial='hidden'
                                whileInView='show'
                                viewport={{once: true, amount: 0.25}}>
                                Sekcje
                            </motion.p>
                            <div className='text-white flex flex-col gap-2'>
                                <a href={'#strona-glowna'} className='text-white hover:underline hover:text-white'>Strona
                                    główna</a>
                                <a href={'#o-mnie'} className='text-white hover:underline hover:text-white'>O mnie</a>
                                <a href={'#technologie'}
                                   className='text-white hover:underline hover:text-white'>Technologie</a>
                                <a href={'#projekty'}
                                   className='text-white hover:underline hover:text-white'>Projekty</a>
                                <a href={'#doswiadczenie'}
                                   className='text-white hover:underline hover:text-white'>Doświadczenie</a>
                                <a href={'#kontakt'} className='text-white hover:underline hover:text-white'>Kontakt</a>
                            </div>
                        </div>
                    </div>
                    <p className='pt-10 text-gray-500 text-center lg:text-start'>© Jakub Cebula • 2023</p>
                </div>
                {/*<div className='w-full h-[50vh] bg-main-bg bg-contain absolute opacity-[0.01] '/>*/}
                {/*<div className='w-full h-[50vh] bg-gradient-linear from-primary to-transparent absolute'/>*/}
                <div
                    className='w-full h-full bg-gradient-linear from-primary  to-violet-700/5 absolute top-0 left-0 overflow-hidden'>
                    <img src={hexbg} alt='threehex' className='max-w-none'/>
                </div>
            </div>
        </div>
    )
}