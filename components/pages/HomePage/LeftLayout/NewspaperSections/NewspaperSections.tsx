import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../src/state/StateController'
import { Jsondata } from '../../../../../src/utils/Jsondata'
import NewspaperCard from './NewspaperCard/NewspaperCard'

interface Props {
}

const NewspaperSections: React.FC<Props> = () => {

    const states = useSelector(() => controller.states)

    return (
        <>
            {/* flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md */}
            <div id='banglaNewspapers'>

                <div className="flex flex-col gap-3 p-5" >
                    <div className="pl-5 py-4 bg-ndarkblue rounded ">
                        <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                            All Bangla Newspapers
                        </span>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                        {
                            Jsondata.banglaNewspapers.map((item) => {
                                return (
                                    <NewspaperCard item={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3 p-5" id='eBanglaNewspapers'>
                <div className="pl-5 py-4 bg-ndarkblue rounded ">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All E-Bangla Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.eBanglaNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='onlineNewspapers'>
                <div className="pl-5 py-4 bg-ndarkblue rounded ">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All Online Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.onlineNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='tvChannels'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All TV Channels
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.tvChannels.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='ctgNewspapers'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All Local Chittagong Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.ctgNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='ctgCoxOnlineNewspapers'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All Local Chittagong and Cox's Bazar Online Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.ctgCoxOnlineNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='localCoxOnline'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All Local Cox's Bazar Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.localCoxOnline.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='localSylhet'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All Local Sylhet Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.localSylhet.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='localKhulna'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All Local Khulna Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.localKhulna.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='localBarisal'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All Local Barisal Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.localBarisal.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='otherLocalNewspapers'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All Other Local Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.otherLocalNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='internationalNewspapers'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All International Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.internationalNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='internationalTvChannels'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All International TV Channels
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.internationalTvChannels.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='indianNewspapers'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All Indian Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.indianNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='sharebazarNewspapers'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All Share Bazar Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.sharebazarNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='stockExchange'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        All Stock Exchange News
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.stockeExchange.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 p-5" id='otherUsefulLinks'>
                <div className="pl-5 py-4 bg-ndarkblue rounded">
                    <span className='text-white text-lg lg:text-[20px] font-bold font-monda'>
                        Other Useful Links
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-x-7 gap-y-5 mt-3'>
                    {
                        Jsondata.otherUsefulLinks.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default NewspaperSections