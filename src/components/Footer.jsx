import {textVariant} from "../data/motion.js";
import {motion} from "framer-motion";
import {MdOutgoingMail, lin, gith, phone} from '../assets/icons.js'
import {hexbg} from "../assets/backgrounds.js";
import {useTranslation} from "react-i18next";
import {navLinks} from "../data/data.js";

export default function Footer() {
    const {t} = useTranslation()
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
                                {t("contact")}
                            </motion.p>
                            <div className='text-white flex flex-col gap-2 items-center md:items-start'>
                                <div className='flex items-center gap-1'>
                                    <img className='w-5 h-5' src={MdOutgoingMail} alt='email'/>
                                    <p className='text-white hover:underline hover:text-white'>
                                        <a href='mailto:jakub.cebula9@gmail.com'
                                           target='_blank'>jakub.cebula9@gmail.com</a>
                                    </p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className='w-5 h-5 mb-1' src={lin} alt='email'/>
                                    <p className='text-white hover:underline hover:text-white'>
                                        <a href='https://www.linkedin.com/in/cebula-jakub/' target='_blank'>LinkedIn</a>
                                    </p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className='w-5 h-5 mb-0.5' src={gith} alt='email'/>
                                    <p className='text-white hover:underline hover:text-white'>
                                        <a href='https://github.com/c3bull' target='_blank'>Github</a>
                                    </p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <img className='w-5 h-5 mb-0.5' src={phone} alt='email'/>
                                    <p className='text-white hover:underline hover:text-white'>
                                        <a href='tel:792645726'>792 645 726</a>
                                    </p>
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
                                {t("sections")}
                            </motion.p>
                            <div className='text-white flex flex-col gap-2'>
                                {navLinks.map((link, index) => (
                                    <a href={`#${link.id}`}
                                       className='text-white hover:underline hover:text-white' key={index}>{t(link.title)}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className='pt-10 text-gray-500 text-center lg:text-start'>© Jakub Cebula • 2023</p>
                </div>
                <div
                    className='w-full h-full bg-gradient-linear from-primary  to-violet-700/5 absolute top-0 left-0 overflow-hidden'>
                    <img src={hexbg} alt='threehex' className='max-w-none'/>
                </div>
            </div>
        </div>
    )
}