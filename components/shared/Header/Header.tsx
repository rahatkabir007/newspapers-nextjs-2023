import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import { useTheme } from 'next-themes';
import Link from 'next/link';

interface Props {
}

const Header: React.FC<Props> = (props) => {

    return (
        <div className='w-full sticky top-0 left-0'>
            <div className='flex items-center justify-between bg-nlightblue'>
                <div className='container-x font-bold text-xl bg-nlightblue cursor-pointer flex justify-between items-center font-[Poppins]text-gray-800 py-3'>
                    <div>
                        <Link href="/">
                            <span className='text-3xl text-nblack mr-1'>
                                খবর সমগ্র
                            </span>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header