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
            <div className="flex flex-col gap-3 p-5" id='banglaNewspapers'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded ">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Bangla Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
                    {
                        Jsondata.banglaNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex flex-col gap-3 p-5" id='eBanglaNewspapers'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All E-Bangla Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded ">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Online Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All TV Channels
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Local Chittagong Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Local Chittagong and Cox's Bazar Online Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Local Cox's Bazar Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Local Sylhet Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Local Khulna Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Local Barisal Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Other Local Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All International Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All International TV Channels
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Indian Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Share Bazar Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        All Stock Exchange News
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-nblack text-lg lg:text-2xl font-bold'>
                        Other Useful Links
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-7 gap-y-5'>
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