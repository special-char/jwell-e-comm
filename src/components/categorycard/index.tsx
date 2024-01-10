import React from 'react'

interface Props {
    img: string;
    name: string;
    count: string;
}

const CategoryCard: React.FC<Props> = ({ img, name, count }) => {
    return (
        <div className='border border-white hover:border-pink-900 hover:scale-105 transition-transform bg-pink-50'>

            <div className="flex justify-between items-center p-4">
            <img
                        className='w-fit m-auto'
                        src={img}
                        alt={name} />
            </div>
            <div className='space-y-4'>
                    <h3 className='font-medium text-xl pl-4'>{name}</h3>
                    <p className='text-gray-500'>{count}</p>
                </div>
        </div>

    )
}

export default CategoryCard