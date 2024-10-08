import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experience from "../data/experience.js";
import {textVariant} from "../data/motion.js";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

export default function Experience() {

    const {t}= useTranslation()

    return (
        <section id='doswiadczenie' className='bg-primary py-12'>
            <motion.p
                className='uppercase font-semibold text-center text-4xl text-white pb-10'
                variants={textVariant(0.25)}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.25}}
            >
                {t("experience")}
            </motion.p>
            <div className='flex justify-center overflow-hidden'>
                <div className='w-3/4 lg:w-full'>
                    <VerticalTimeline>
                        {experience.map((item, key) => {
                            return (
                                <VerticalTimelineElement
                                    key={key}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{
                                        background: 'linear-gradient(#111827, rgba(255,0,0,0))',
                                        color: '#fff'
                                    }}
                                    contentArrowStyle={{borderRight: '7px solid #111827'}}
                                    date={t(item.date)}
                                    iconStyle={{background: '#111827', color: '#fff'}}
                                    icon={
                                        <div className='flex items-center justify-center w-full h-full'>
                                            <img
                                                src={item.icon}
                                                alt="icon"
                                                className='object-contain w-[60%] h-[60%]'/>
                                        </div>
                                    }
                                >
                                    <h3 className="vertical-timeline-element-title">{t(item.title)}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{t(item.subtitle)}</h4>
                                    <p>
                                        {t(item.description)} 
                                    </p>
                                    {item.website && <p><a href={item.website} target='_blank'
                                                                               className='text-gray-400 hover:text-violet-700 duration-200'>{item.website}</a></p>}
                                </VerticalTimelineElement>
                            )
                        })}
                    </VerticalTimeline>

                </div>
            </div>
        </section>
    )
}