import {stackFrontend, stackBackend, stackGraphics} from "../data/data.js";
import StackBox from "./StackBox";

export default function Stack() {

    return (
        <div className='flex justify-center py-32 bg-primary'>
            <div className='w-3/4 flex gap-14 justify-center'>
                <StackBox data={stackFrontend}/>
                <StackBox data={stackBackend}/>
                <StackBox data={stackGraphics}/>
            </div>
        </div>
    )
}