import Image from 'next/image'
import React from 'react'

const Sale = () => {
  return (
    <div className='container pt-10 px-container'>
        <div className='grid sm:grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-3'>
            <div className='overflow-hidden rounded-lg'>
                <Image
                className='hover:scale-105 transition-transform'
                src='/images/salebanner1.webp'
                alt='sale'
                width={500}
                height={100}
                />
            </div>

            <div className= 'overflow-hidden rounded-lg'>
                <Image 
                className='hover:scale-105 transition-transform'
                src='/images/salebanner1.webp'
                alt='sale'
                width={500}
                height={100}
                />
            </div>

            <div className='overflow-hidden rounded-lg'>
                <Image
                className='hover:scale-105 transition-transform'
                src='/images/salebanner1.webp'
                alt='sale'
                width={500}
                height={100}
                />
            </div>


        </div>
    </div>
  )
}

export default Sale