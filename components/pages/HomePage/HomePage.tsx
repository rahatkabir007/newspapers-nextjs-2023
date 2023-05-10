import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'
import LeftLayout from './LeftLayout/LeftLayout'
import RightLayout from './RightLayout/RightLayout'

interface Props {
}

const HomePage: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return <>
        <div className='my-5 '>
            <div className="flex flex-col lg:flex-row gap-5 container-x rounded">
                <div className='w-full lg:w-[80%]'>
                    <LeftLayout


                    />
                </div>
                <RightLayout />
            </div>
        </div>
    </>
}

export default HomePage