import Link from 'next/link'
import React from 'react'


interface Props {
}

const Footer: React.FC<Props> = (props) => {



    return (
        <div className='bg-ndarkblue py-2'>
            <div className='container-x flex justify-between items-center text-sm px-3'>
                <div>
                    <span className='text-white font-ubuntu font-semibold'>Copyright © 2023 - NEWS HUB</span>
                </div>
                <div>
                    <Link href="/server-sitemap.xml" className='text-white font-ubuntu font-semibold hover:text-gray-200' target='_blank'>Sitemap</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer