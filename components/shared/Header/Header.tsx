import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { useTheme } from 'next-themes';

interface Props {
}

const Header: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    let [open, setOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-7  rounded-full bg-black transition ease transform duration-500`;


    let Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
    ];


    return (
        <div className='w-full fixed top-0 left-0'>
            <div className='flex items-center justify-between bg-nlightblue'>
                <div className='container-x font-bold text-xl bg-nlightblue cursor-pointer flex justify-between items-center font-[Poppins]text-gray-800 py-4'>
                    <div>
                        <span className='text-3xl text-nblack mr-1'>
                            খবর সমগ্র
                        </span>

                    </div>
                    <div className='flex justify-center items-center sm:flex-row flex-row-reverse'>
                        <div className="mr-4">
                            <button
                                className="flex flex-col h-12 rounded justify-center cursor-pointer md:hidden group"
                                onClick={() => setOpen(!open)}
                            >

                                <div
                                    className={`${genericHamburgerLine} ${open
                                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100 my-1"
                                        : "opacity-50 group-hover:opacity-100 my-[2px]"
                                        }`}
                                />
                                <div
                                    className={`${genericHamburgerLine} ${open ? "opacity-0 my-1" : "opacity-50 group-hover:opacity-100 my-[2px]"
                                        }`}
                                />
                                <div
                                    className={`${genericHamburgerLine} ${open
                                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100 my-1"
                                        : "opacity-50 group-hover:opacity-100 my-[2px]"
                                        }`}
                                />
                            </button>
                        </div>
                        <div>
                            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'}`}>
                                {
                                    Links.map((link) => (
                                        <li key={link.name} className='md:mr-8 text-xl md:my-0 my-7'>
                                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                                        </li>
                                    ))
                                }

                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header