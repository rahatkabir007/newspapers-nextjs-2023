import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface Props {
}

const Header: React.FC<Props> = (props) => {

    return (
        <div className='w-full'>
            <div className='flex items-center justify-between bg-nlightblue'>
                <div className='container-x font-bold text-xl bg-nlightblue cursor-pointer flex justify-between items-center font-[Poppins]text-gray-800 py-4'>
                    <div className='flex justify-start gap-2 items-center'>

                        <div>
                            <Image src="/favicon.ico" alt="" width={35} height={35} />
                        </div>
                        <div>
                            <Link href="/">
                                <span className='text-3xl text-ndarkblue'>
                                    খবর সমগ্র
                                </span>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header