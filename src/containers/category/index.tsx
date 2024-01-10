import CategoryCard from '@/components/categorycard';
import React from 'react'

const data = [
    {id:0, name:"Necklaces", count:"10 products", img:"./images/necklaces.webp"},
    {id:1, name:"Rings", count:"10 products", img:"./images/Ring1.webp"},
    {id:2, name:"Earrings", count:"10 products", img:"./images/earrings.webp"},
    {id:3, name:"Anklets", count:"10 products", img:"./images/anklets.webp"},
    {id:4, name:"Bracelet", count:"10 products", img:"./images/bracelet.webp"},
  
];

const Category = () => {
  return (
    <div className='container pt-16 px-container'>
        <p className='text-black text-2xl hover:text-pink-900'>Categories</p>
        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'> */}
        <div id="content" className='flex gap-5 mt-3'>
        {data.map(el => <CategoryCard key={el.id} img={el.img} name={el.name} count={el.count}/>)}
        </div>
        {/* </div> */}
    </div>
  )
}

export default Category