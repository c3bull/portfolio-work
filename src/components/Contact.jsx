import ContactWays from "./ContactWays.jsx";
import React from 'react';
import {MdOutgoingMail} from '../assets/icons.js'
import {fadeIn, textVariant} from "../data/motion.js";
import {motion} from "framer-motion";
import linkedinImg from "../assets/projects/linkedin.png"
import githubImg from "../assets/projects/github.png"
import Stars from "./Stars.jsx";

export default function Contact() {
    return (
        <section id='kontakt' className='h-[80vh] relative bg-primary flex flex-col items-center justify-center py-12'>
            <motion.p
                className='uppercase font-semibold text-center text-4xl text-white pb-10'
                variants={textVariant(0.25)}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.25}}
            >
                Kontakt
            </motion.p>
            <motion.div className='max-w-2xl flex-col gap-6 flex w-4/5 lg:w-2/3 z-10'
                 variants={fadeIn("up", "spring", 0, 1.25)}
                 initial='hidden'
                 whileInView='show'
                 viewport={{once: true, amount: 0.25}}>
                <p className='md:hidden text-center font-medium uppercase text-white'>
                    Kliknij na odpowiednią ikonę, aby przejść do interesującej cię formy
                    kontaktu.
                </p>

                <ContactWays
                    href='mailto:jakub.cebula9@gmail.com'
                    title='Email'
                    name='jakub.cebula9@gmail.com'
                    icon={<div className='flex items-center p-0.5'>
                        <img
                            className='w-12 h-12 lg:h-10 lg:w-10 p-0.5'
                            src={MdOutgoingMail}
                            alt='wyślij email'
                        />
                    </div>}
                    target='_blank'
                />
                <ContactWays
                    href='https://www.linkedin.com/in/cebula-jakub/'
                    title='LinkedIn'
                    link='/in/cebula-jakub/'
                    icon={<div className='flex items-center p-0.5'>
                        <img
                            className='rounded-full w-12 h-12 lg:h-10 lg:w-10'
                            src={linkedinImg}
                            alt='zadzwoń'
                        />
                    </div>}
                    target='_blank'
                />
                <ContactWays
                    href='https://github.com/c3bull'
                    title='Github'
                    link='/c3bull'
                    icon={<div className='flex items-center p-0.5'>
                        <img
                            className='bg-white rounded-full p-0.5 w-12 h-12 lg:h-10 lg:w-10'
                            src={githubImg}
                            alt='zadzwoń'
                        />
                    </div>}
                />
            </motion.div>
            <Stars/>
        </section>
    );
};
