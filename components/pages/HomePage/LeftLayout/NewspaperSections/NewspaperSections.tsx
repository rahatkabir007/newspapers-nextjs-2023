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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='banglaNewspapers'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded ">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Bangla Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.banglaNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='eBanglaNewspapers'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All E-Bangla Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.eBanglaNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='onlineNewspapers'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded ">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Online Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.onlineNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='tvChannels'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All TV Channels
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.tvChannels.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='ctgNewspapers'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Local Chittagong Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.ctgNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='ctgCoxOnlineNewspapers'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Local Chittagong and Cox's Bazar Online Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.ctgCoxOnlineNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='localCoxOnline'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Local Cox's Bazar Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.localCoxOnline.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='localSylhet'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Local Sylhet Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.localSylhet.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='localKhulna'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Local Khulna Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.localKhulna.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='localBarisal'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Local Barisal Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.localBarisal.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='otherLocalNewspapers'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Other Local Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.otherLocalNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='internationalNewspapers'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All International Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.internationalNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='internationalTvChannels'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All International TV Channels
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.internationalTvChannels.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='indianNewspapers'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Indian Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.indianNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='sharebazarNewspapers'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Share Bazar Newspapers
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.sharebazarNewspapers.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='stockExchange'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        All Stock Exchange News
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
                    {
                        Jsondata.stockeExchange.map((item) => {
                            return (
                                <NewspaperCard item={item} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md" id='otherUsefulLinks'>
                <div className="pl-5 py-4 border-l-4 border-l-ndarkblue rounded">
                    <span className='text-darkblue text-2xl font-bold'>
                        Other Useful Links
                    </span>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-x-7 gap-y-10 md:gap-y-10'>
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