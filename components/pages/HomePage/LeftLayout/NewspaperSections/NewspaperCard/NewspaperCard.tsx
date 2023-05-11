import React from 'react'
import { useSelector } from 'react-redux'
import { controller } from '../../../../../../src/state/StateController'
import Image from 'next/image';

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
        <div className='flex flex-col justify-center items-center gap-[5px] border border-ngrey rounded-sm'>
            <a className='p-2' href={`//${item.url}`} target='_blank'>
                <Image src={item.img} alt={item.title} width={150} height={150} />
            </a>
            <div className='border-t-2 border-t-ngrey w-full text-center text-xs lg:text-sm p-[4px] font-mono'>
                {item.title}
            </div>
        </div>
    )
}

export default NewspaperCard