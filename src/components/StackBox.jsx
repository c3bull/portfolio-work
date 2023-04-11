import {fadeIn, textVariant} from "../data/motion.js";
import {motion} from "framer-motion";

export default function StackBox({data}) {

    return (
        <motion.div className='flex flex-col rounded-2xl w-full lg:w-1/3 shadow-md shadow-violet-700'
                    variants={fadeIn("up", "spring", 0, 1.25)}
                    initial='hidden'
                    whileInView='show'
                    viewport={{once: true, amount: 0.25}}>
            {data.map((item, key) => (
                <div key={key}>
                    <div
                        className='bg-gradient-linear from-gray-900 to-transparent rounded-t-2xl h-24 w-full flex items-center justify-center p-5 text-center text-2xl'>
                        <p className='uppercase text-white w-44'>{item.title}</p>
                    </div>
                    <div key={key} className='h-[50vh]'>
                        <div className='h-full flex flex-1 flex-col gap-1'>
                            {item.content.map((item, key) => (
                                <motion.div
                                    key={key}
                                    variants={textVariant()}
                                    initial='hidden'
                                    whileInView='show'
                                    viewport={{once: true, amount: 0.25}}
                                    className={`overflow-hidden flex flex-1 ${data[0].content.length === key + 1 && 'rounded-b-2xl'}`}>
                                    <div
                                        className={`hover:scale-125 duration-300 bg-cover bg-center flex flex-1 `}
                                        style={{backgroundImage: `url(${item.backgroundImg})`}}
                                    >
                                        <p style={{textShadow: '#000 0px 0 5px'}}
                                           className='text-2xl text-white flex items-center justify-center w-full h-full drop-shadow-md'>{item.name}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    )
}