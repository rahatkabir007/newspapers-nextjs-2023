import React from 'react';
import { Jsondata } from '../../../../src/utils/Jsondata';

const Category = () => {
    return (

        <div className='flex flex-col'>
            <div className="px-5 py-4 bg-ndarkblue rounded">
                <span className='text-white text-lg lg:text-2xl font-bold font-monda'>
                    Category
                </span>
            </div>
            <div className="grid grid-cols-5 gap-5 px-8 pt-4">
                {
                    Jsondata.categories.map(item => {
                        return (
                            <div className='text-[13px] cursor-pointer rounded'>
                                <a className='text-[#6e6e6e] font-ubuntu font-bold hover:text-gray-600' href={`#${item.link}`}>{item.title}</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
};

export default Category;