import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../src/state/StateController'
import { Jsondata } from '../../../../src/utils/Jsondata'
import NewspaperSections from './NewspaperSections/NewspaperSections'
import Link from 'next/link'
import ReactImageFallback from 'react-image-fallback'

interface Props {
}


const LeftLayout: React.FC<Props> = (props) => {

    const states = useSelector(() => controller.states)
    const [promotionData, setPromotionData] = useState([]);
    const arraySlice = (items: any) => {
        const shuffledItems = items.sort(() => 0.5 - Math.random());
        const randomlySelectedItems = shuffledItems.slice(0, 8);
        return randomlySelectedItems
    }
    useEffect(() => {
        setPromotionData(arraySlice(Jsondata.promotions))
    }, [])
    return (
        <div className='w-full lg:w-[100%] 
        flex flex-col gap-5 my-4 bg-[#fcfbfb] rounded'>
            <NewspaperSections />
            <div className="flex flex-col gap-3 p-5" id='eBanglaNewspapers'>
                <div className="pl-5 py-4 bg-ndarkblue rounded ">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        Promotions
                    </span>
                </div>
                <div className='mb-[40px] pb-[40px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        promotionData?.map((item: any, index) => {
                            return (
                                <>
                                    {item?.link && <Link key={index} className=" h-full hover:shadow-2xl bg-transparent" href={item?.link}>

                                        <div className=" h-full rounded bg-white "
                                        >
                                            <div className='flex flex-col ' style={{ columnGap: '25px', width: '100%' }}>
                                                <div className='overflow-hidden cursor-pointer rounded w-[100%] '>
                                                    <ReactImageFallback
                                                        src={item.imgSrc}
                                                        className="h-[250px] bg-gray-100 w-full md:w-full object-cover scale-[1] hover:scale-[1.1] transition-all duration-300"
                                                        fallbackImage={`api/placeholder?text=${item.title}`}
                                                        initialImage="loader.gif"
                                                    />
                                                </div>
                                                <div className='px-[12px]'>
                                                    <div className='flex flex-row my-[10px] gap-x-[5px]'>
                                                        <div className="mt-[10px] limit-2 text-black text-[15px] font-bold ">🏥 {item.title ? item.title : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LeftLayout