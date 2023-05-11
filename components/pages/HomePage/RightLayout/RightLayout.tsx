import React from 'react'
import { Jsondata } from '../../../../src/utils/Jsondata'

interface Props {
}

const RightLayout: React.FC<Props> = (props) => {

    return (
        <div className='w-full lg:w-[20%] flex flex-col gap-5 bg-white my-4 rounded max-h-[200px] lg:max-h-[80vh] overflow-scroll scrollbar font-sans'>
            <div className='text-ndarkblue px-3 pt-3 text-xl font-medium sticky top-0 left-0 bg-white'>
                <p className='border-b-4 border-b-nblack '>Browse Categories</p>
            </div>
            <div className="grid grid-cols-1 gap-4 px-3 pb-3">
                {
                    Jsondata.categories.map(item => {
                        return (
                            <div className='text-sm font-normal text-ndarkblue cursor-pointer hover:text-blue-600 border-l-4 border-l-ndarkblue rounded pl-2'>
                                <a className='text-ndarkblue' href={`#${item.link}`}>{item.title}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RightLayout