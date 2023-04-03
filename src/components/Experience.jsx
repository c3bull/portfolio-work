import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experience from "../experience.js";

export default function Experience() {

    return (
        <div className='bg-primary'>
            <p className='text-center text-4xl text-white '>Moje doświadczenie</p>
            <VerticalTimeline>
                {experience.map((item, key) => {
                    return (
                        <VerticalTimelineElement
                            key={key}
                            className="vertical-timeline-element--work"
                            contentStyle={{background: '#707070', color: '#fff'}}
                            contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                            date={item.date}
                            iconStyle={{background: '#1D1D1B', color: '#fff'}}
                            icon={
                                <div className='flex items-center justify-center w-full h-full'>
                                    <img
                                        src={item.icon}
                                        alt="icon"
                                        className='object-contain w-[60%] h-[60%]'/>
                                </div>
                            }
                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
                            <p>
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    )
}