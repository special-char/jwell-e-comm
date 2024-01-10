import ProductCard from '@/components/productcard';
import { Button } from '@mui/material'
import React from 'react'





const data = [
    {id:0, img:"./images/ER-1.webp", name:"earring", price:"$157"},
    {id:1, img:"./images/Ring-1.webp", name:"ring", price:"$157"},
    {id:2, img:"./images/ER-1.webp", name:"earring", price:"$157"},
    {id:3, img:"./images/Ring-1.webp", name:"ring", price:"$157"},
    {id:4, img:"./images/ER-1.webp", name:"earring", price:"$157"},
];

const Trending = () => {
    return (
        <div className='container pt-16 px-container'>
            <div className="lg:flex justify-between items-center">
                <div>
                    <h3 className='font-medium text-2xl'>Featured Products</h3>
                    <p className='text-gray-600 mt-2 '>Lorem ipsum dolor sit amet </p>
                </div>

                <div className="space-x-4 mt-8 lg:mt-0">
                    <Button className="featured_btn">Products</Button>
                    <Button className='text-black  hover:text-indigo-700'>Earrings</Button>
                    <Button className='text-black  hover:text-indigo-700'>Rings</Button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
                {/* <div>
                    <img className='w-full h-full object-cover' src='/ER-1.webp' alt='image..' />
                </div> */}
                {data.map(el => <ProductCard key={el.id} img={el.img} name={el.name} price={el.price}/>)}
            </div>
        </div>
    )
}

export default Trending
