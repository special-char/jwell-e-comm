import React from 'react'
import Checkouttotal from "@/components/checkouttotal/checkouttotal"
type Props = {}

const Checkout = () => {
  return (
    <div className='grid grid-cols-2  gap-6 max-sm:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2'>

    <div className=" bg-pink-50 px-4">
      <p className='text-xl mb-5 mt-8  font-semibold'>Contact Information</p>
      <div className='grid mb-4'>
        <label htmlFor="">E-mail</label>
        <input type="email" className="border rounded-md w-full  h-12 pl-3  border-gray-600" placeholder='your.email@gmail.com' />

      </div>
      
      <div className='grid mb-4 '>
        <label htmlFor="phone">Phone</label>
        <input id='phone'  type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="border rounded-md w-100 h-12 pl-3 border-gray-600" placeholder='Enter your Phone' />
      </div>
 

      <div className="mt-10">
        <p className='text-xl mb-5 font-semibold'>Shopping address</p>
        <div className="grid mb-4">
          <label htmlFor="">Full name</label>
          <input type="text" className="border rounded-md w-100 h-12 pl-3 border-gray-600" placeholder='Rodney cotton' />

        </div>

        <div className='grid mb-4'>
          <label htmlFor="">Address</label>
          <input type="text" className="border rounded-md w-100 h-12 pl-3 border-gray-600" placeholder='Your Adress' />
        </div>
        <div className='grid mb-4'>
          <label htmlFor="">City</label>
          <input type="text" className="border rounded-md w-100 h-12 pl-3 border-gray-600" placeholder='Your City' />
        </div>
        <div className='grid mb-4'>
          <label htmlFor="">Order Notes</label>
          <input type="text" className="border rounded-md w-100 h-12 pl-3 border-gray-600" placeholder='Notes about your order,eg.Special Note for delivery' />
        </div>
       
        <div className=' flex mb-4 gap-8'>
          <div className="flex flex-col">

            <label htmlFor="">Country</label>
            <input type="text" className="border rounded-md w-38 h-12 pl-3 border-gray-600" placeholder='Your Country' />
          </div>
          {/* <div className='grid mb-4'></div> */}
          <div className="flex flex-col ">
            <label htmlFor="">Postal code</label>
            <input type="tel" className="border rounded-md w-38 h-12 pl-3 border-gray-600" placeholder=' Your Postal code' />

          </div>
          
        </div>
        <div className='flex space-x-3'>
          <div className='w-30 flex items-center'><input className= "max-w-none" type="checkbox" name="" id=""/></div>
          
          <p>Save this Information for next time</p>
        </div>
        <div className='flex justify-center'>
        <button className=" bg-rose-900 mt-6 text-white py-1 px-5 text-lg rounded-md">Continue</button>
        </div>

      </div>
      
    </div>

    <div className='bg-pink-50'>
      <Checkouttotal/>
      
      </div>
   </div>


  )
}

export default Checkout