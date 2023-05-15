import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Jsondata } from '../../../src/utils/Jsondata';

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
        <div className='w-full sticky top-0 left-0 z-10'>
            <div className='flex items-center justify-between bg-ndarkblue'>
                <div className='container-x font-bold text-xl bg-ndarkblue cursor-pointer flex justify-between items-center font-[Poppins]text-gray-800 py-3'>
                    <div>
                        <Link href="/"> <span className='text-2xl text-white mr-1'>
                            NEWS HUB
                        </span></Link>

                    </div>
                    <div className='flex justify-center items-center sm:flex-row flex-row-reverse'>
                        <div className="mr-4">
                            <button
                                className="flex flex-col h-12 rounded justify-center cursor-pointer lg:hidden group"
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
                            <ul className={`block lg:hidden lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:bg-transparent lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-990px]'}`}>
                                {
                                    Jsondata.categories.map((item) => (
                                        <li key={item.title} className='lg:mr-8 text-xl lg:my-0 my-7'>
                                            <a href={item.link} className='text-gray-800 hover:text-gray-400 duration-500'>{item.title}</a>
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