import React from 'react'
import Slider from "react-slick";
import { Jsondata } from '../../../../src/utils/Jsondata';
import Image from 'next/image';

interface Props {
}

const NewspaperSlider: React.FC<Props> = (props) => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToScroll: 6,
        infinite: true,
        slidesToShow: 12,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,


                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                },
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                },
            },
        ],
    };


    return (
        <div className='shadow-md bg-white pt-2 pb-3'>
            <Slider
                {...settings}
                className='container-x'
            >
                {Jsondata.banglaNewspapers.map((item, ind) => {
                    return (
                        <div className='pt-2 px-2' key={item.title}>
                            <div className='flex justify-center items-center'>
                                <a href={`//${item.url}`} target='_blank'>
                                    <Image src={item.img} alt={item.title} width={100} height={100} className='bg-ngrey' loading='lazy' />
                                </a>
                            </div>
                        </div>
                    )
                }
                )}
            </Slider>
        </div>
    )
}

export default NewspaperSlider