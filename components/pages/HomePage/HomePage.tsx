import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../src/state/StateController'

interface Props {
}

const HomePage: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return <>
        <div className='h-[80vh] bg-white container-x'>
            <span>Hello</span>
        </div>
    </>
}

export default HomePage