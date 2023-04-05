import {stackFrontend, stackBackend, stackGraphics} from "../data/data.js";
import StackBox from "./StackBox";

export default function Stack() {

    return (
        <div className='flex flex-col justify-center items-center w-full py-32 bg-primary'>
            <p className='text-white text-center text-4xl pb-16'>Technologie, których używam</p>
            <div className='w-2/3 flex gap-14 justify-center'>
                <StackBox data={stackFrontend}/>
                <StackBox data={stackBackend}/>
                <StackBox data={stackGraphics}/>
            </div>
        </div>
    )
}