import {stackFrontend} from "../data/data.js";

export default function StackBox({data}) {

    return (
        <div className='flex flex-col rounded-lg w-1/3'>
            {data.map((item, key) => (
                <div key={key} className='h-[50vh]'>
                    <div
                        className='bg-gradient-linear from-gray-900 to-transparent rounded-t-2xl h-24 flex items-center justify-center p-5 text-center text-2xl'>
                        <p className='text-white'>{item.title}</p>
                    </div>
                    <div className='h-full flex flex-1 flex-col gap-1'>
                        {item.content.map((item, key) => (
                            <div
                                className={`bg-cover bg-center -top-3 flex flex-1 bg-blue-900 ${data[0].content.length === key + 1 && 'rounded-b-2xl'}`}
                                style={{backgroundImage: `url(${item.backgroundImg})`}}
                                key={key}
                            >
                                <p className='text-2xl text-white flex items-center justify-center w-full h-full'>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}