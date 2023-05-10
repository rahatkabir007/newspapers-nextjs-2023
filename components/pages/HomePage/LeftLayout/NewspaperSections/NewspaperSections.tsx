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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
                        All Internation TV Channels
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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
            <div className="flex flex-col gap-3 shadow-md py-5 px-3 bg-white rounded-md">
                <div className="pl-5 py-6">
                    <span className='text-nblack text-2xl'>
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