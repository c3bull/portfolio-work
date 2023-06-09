import {stackFrontend, stackBackend, stackGraphics} from "../data/data.js";
import StackBox from "./StackBox";
import {textVariant} from "../data/motion.js";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

export default function Stack() {
    const {t} = useTranslation()
    return (
        <section id='technologie' className='flex flex-col justify-center items-center w-full py-12 bg-primary'>
            <motion.p className='uppercase font-semibold text-white text-center text-4xl pb-16'
                      variants={textVariant(0.25)}
                      initial='hidden'
                      whileInView='show'
                      viewport={{once: true, amount: 0.25}}>{t("technologies")}</motion.p>
            <div className='w-2/3 flex flex-col lg:flex-row gap-14 justify-center'>
                <StackBox data={stackFrontend}/>
                <StackBox data={stackBackend}/>
                <StackBox data={stackGraphics}/>
            </div>
        </section>
    )
}