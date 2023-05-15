import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import { Jsondata } from '../../../../src/utils/Jsondata'
import NewspaperSections from './NewspaperSections/NewspaperSections'

interface Props {
}


const LeftLayout: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        // max - h - [80vh] overflow - scroll scrollbar - hide
        <div className='w-full lg:w-[100%] 
       
        flex flex-col gap-5 my-4 bg-[#fcfbfb] rounded'>
            <NewspaperSections />
        </div>
    )
}

export default LeftLayout