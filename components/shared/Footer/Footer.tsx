import React from 'react'


interface Props {
}

const Footer: React.FC<Props> = (props) => {



    return (
        <div className='bg-ndarkblue py-2 flex justify-center items-center'>
            <div>
                <span className='text-white font-bold'>Copyright © 2022 - NEWS HUB</span>
            </div>
        </div>
    )
}

export default Footer