import React, {useEffect, useState} from 'react'
import {navLinks} from "../data/data.js"
import {menu, close} from '../assets/icons.js'
import useReadingProgress from "../data/useReadingProgress.js";

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    const [scrollTop, setScrollTop] = useState(0);
    const completion = useReadingProgress()

    useEffect(() => {
        const handleScroll = () => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`${toggle && 'bg-secondary'} hover:bg-secondary w-full flex items-center h-24 fixed top-0 z-30 border-b border-b-gray-600 ${scrollTop >= 10 && 'bg-secondary/100'} duration-300`}>
            <div className='w-full flex justify-between items-center h-full md:pt-9 max-w-7xl mx-auto'>
                <ul className='list-none hidden md:flex flex-row gap-7 lg:gap-10 justify-center h-full w-full'>
                    {navLinks.map((link) => (
                        <li key={link.id}
                            className='text-white text-[18px] font-medium cursor-pointer'>
                            <a href={`#${link.id}`}
                               className='hover-underline-animation h-full whitespace-nowrap'>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className='px-10 uppercase md:hidden flex flex-1 h-full justify-end items-center'>
                    <img
                        src={toggle ? close : menu}
                        alt='menu'
                        className='w-[28px] h-[28px] object-contain cursor-pointer'
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? 'hidden' : 'flex'} p-6 top-20 left-0
                     absolute min-w-[140px] z-10 rounded-b-3xl ${toggle && 'bg-gradient-to-b from-secondary to-gray-900'} w-full duration-500`}>
                        <ul className='w-screen list-none flex justify-end items-center flex-col gap-4'>
                            {navLinks.map((link) => (
                                <li key={link.id}
                                    className='w-full text-center text-white font-poppins font-medium cursor-pointer text-[16px]'
                                    onClick={() => {
                                        setToggle(!toggle)
                                    }}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <span style={{transform: `translateX(${completion - 100}%`}}
                  className='absolute bg-violet-400 h-0.5 w-full -bottom-0.5'/>
        </nav>
    )
}