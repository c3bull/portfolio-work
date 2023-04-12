export default function ModalDemo({visible, onClose, title, demo, contributors}) {

    const handleOnClose = (e) => {
        if (e.target.id === 'wrapper') {
            onClose()
        }
    }

    if (!visible) return null
    return (
        <div id='wrapper'
             onClick={handleOnClose}
             className="z-20 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className=" bg-black/95 p-2 rounded-md w-4/5 lg:w-2/3 xl:w-1/2 h-fit max-h-[75%] overflow-auto">
                <h1 className="py-2 font-semibold text-center text-xl text-white">
                    {title}
                </h1>
                <div className="my-2 flex flex-col lg:h-[460px] overflow-hidden">
                    <img src={demo} className='object-contain max-h-full max-w-full' alt='demo'/>
                </div>
                {contributors && <div className='py-5'>
                    <p className='text-xl'>Contributors:</p>
                    {contributors.map((contributor, index) => (
                    <div key={index}>
                        <a
                            target="_blank"
                            href={contributor.github}
                            className='text-white'
                        >
                            {contributor.github}
                        </a>
                    </div>
                    ))}
                </div>
                }
                <div className="text-center">
                    <button onClick={onClose} className="px-5 py-2 bg-gray-700 text-white rounded">
                        Zamknij
                    </button>
                </div>
            </div>
        </div>
    )
}