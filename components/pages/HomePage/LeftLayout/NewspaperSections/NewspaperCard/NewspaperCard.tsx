import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../../src/state/StateController'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    item: {
        title: string;
        img: string;
        category: string;
        url: string
    },
}

const NewspaperCard: React.FC<Props> = ({ item }) => {

    const states = useSelector(() => controller.states)

    return (
        <div className='flex flex-col justify-center items-center gap-[5px] border border-ngrey rounded '>
            <div className='flex justify-center items-center p-2'>
                <Link href={`/redirect/${item?.url}`} target='_blank'>
                    <Image src={item.img} alt={item.title} width={150} height={150} className='bg-ngrey' loading='lazy' />
                </Link>
            </div>
            <div className='border-t-2 border-t-ngrey w-full text-center text-xs lg:text-[13px] p-[4px] font-monda
             text-[#6e6e6e] font-bold'>
                {item.title}
            </div>
        </div>
    )
}

export default NewspaperCard