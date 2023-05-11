import React from 'react'


interface Props {
}

const Footer: React.FC<Props> = (props) => {



    return (
        <div className='bg-nlightblue py-2 flex justify-center items-center'>
            <div>
                <span className='text-ndarkblue font-bold'>Copyright © 2022 - খবর সমগ্র</span>
            </div>
        </div>
    )
}

export default Footer