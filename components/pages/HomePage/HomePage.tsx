import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import LeftLayout from './LeftLayout/LeftLayout'
import RightLayout from './RightLayout/RightLayout'
import NewspaperSlider from './NewspaperSlider/NewspaperSlider'

interface Props {
}

const HomePage: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return <>
        <NewspaperSlider />
        <div className='my-3'>
            <div className="flex flex-col-reverse lg:flex-row-reverse gap-x-5 gap-y-0 container-x rounded items-start">
                {/* <div className=''> */}
                <LeftLayout
                />
                {/* </div> */}
                <RightLayout />
            </div>
        </div>
    </>
}

export default HomePage