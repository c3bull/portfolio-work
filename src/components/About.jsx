export default function About() {

    return (
        <div className='text-white flex flex-col justify-center items-center bg-primary w-full'>
            <div className='w-3/4'>
                <p className='text-center text-4xl'>O mnie</p>
                <div className='grid grid-cols-2 place-items-center'>
                    <div className='w-96 h-96 aspect-square bg-secondary'/>
                    <p className='pt-16'>
                        Cześć, jestem Kuba.
                        Pasjonuję się tworzeniem stron internetowych.
                        Technologie, których używam to głównie React.js, Next.js, React Native, HTML, JavaScript,
                        TailwindCSS.
                        Dodatkowo potrafię korzystać z NodeJS, MongoDB oraz PostreSQL.
                        Interesuje mnie również tworzenie grafik komputerowych.
                        Do tworzenia logo i poprawania zdjęć używam Adobe Illustrator, Adobe Photoshop oraz Gimp.
                    </p>
                </div>
            </div>
        </div>
    )
}