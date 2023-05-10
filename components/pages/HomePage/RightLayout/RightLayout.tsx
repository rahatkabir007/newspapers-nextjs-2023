import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'

interface Props {
}

const RightLayout: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='sm:w-full md:w-[full] lg:w-[20%] p-3 flex flex-col gap-5 bg-white'>
            RightLayout
        </div>
    )
}

export default RightLayout