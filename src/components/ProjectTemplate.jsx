import githubImg from "../assets/projects/github.png"
import eyeImg from "../assets/projects/eye.png"
import {useState} from "react";
import ModalDemo from "./ModalDemo";

export default function ProjectTemplate({id, image, title, github, demo, contributors, description, hashtags}) {
    const [showModal, setShowModal] = useState(false)

    const handleOnClose = () => setShowModal(false)
    return (
        <div className='p-0.5 bg-gradient-linear from-transparent to-gray-900 rounded-2xl'>
            <div key={id}
                 className='h-full text-white flex flex-col bg-gradient-linear from-gray-900 to-primary rounded-2xl overflow-hidden'>
                <div className='relative'>
                    <div className='m-4 rounded-xl overflow-hidden'>
                        <img src={image} alt='project image'
                             className='h-full hover:scale-125 duration-300 hover:rotate-3 rounded'/>
                    </div>
                    <div className='bg-white p-0.5 rounded-full absolute w-8 h-8 top-0 right-0 m-5'>
                        <a href={github} target="_blank">
                            <img src={githubImg} alt='github'/>
                        </a>
                    </div>
                    <div onClick={() => setShowModal(true)}
                         className='cursor-pointer bg-white p-0.5 rounded-full absolute w-8 h-8 top-0 right-9 m-5'>
                        <img src={eyeImg} alt='github'/>
                    </div>
                </div>
                <div className='px-4 pb-4 flex flex-col h-full'>
                    <p className='text-xl font-bold'>{title}</p>
                    <div className='flex flex-col justify-between h-full'>
                        <p className='leading-5 text-gray-200'>{description}</p>
                        <p className='text-xs'>{hashtags}</p>
                    </div>
                </div>
                <ModalDemo onClose={handleOnClose} visible={showModal} title={title} demo={demo}
                           contributors={contributors}/>
            </div>
        </div>
    )
}