import Typed from 'react-typed';
import {aboutmeimg} from "../assets/backgrounds.js"

export default function About() {

    return (
        <div className='text-white flex flex-col justify-center items-center bg-primary w-full'>
            <div className='w-3/4'>
                <p className='text-center text-4xl'>O mnie</p>
                <div className='relative'>
                    <div className='absolute w-full h-full z-10 bg-gradient-linear from-[#0b0d0f] via-transparent to-[#0b0d0f]' />
                    <img src={aboutmeimg} alt="bgimg" className='relative w-full h-full top-0 left-0'/>
                    <div className='absolute w-1/2 top-[20%] p-5 left-0 right-0 mx-auto'>
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
                </div>
            </div>
        </div>
    )
}