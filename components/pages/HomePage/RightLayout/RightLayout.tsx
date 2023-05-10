import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import { Jsondata } from '../../../../src/utils/Jsondata'

interface Props {
}

const RightLayout: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='sm:w-full md:w-[full] lg:w-[20%] p-3 flex flex-col gap-5 bg-white my-4 rounded '>
            <div className='text-ndarkblue border-b-4 border-b-nblack text-xl font-bold'>
                Browse Categories
            </div>
            <div className="grid grid-cols-1 gap-4  max-h-[150px] md:max-h-[200px] lg:max-h-full overflow-auto">
                {
                    Jsondata.categories.map(item => {
                        return (
                            <div className='text-lg font-medium text-ndarkblue cursor-pointer border-l-4 border-l-ndarkblue rounded pl-2'>
                                <a href={`#${item.link}`}>{item.title}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RightLayout