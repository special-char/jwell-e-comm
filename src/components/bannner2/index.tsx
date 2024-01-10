import React from 'react'
import Image from 'next/image'



interface Props {

}

const Divider = (props: Props) => {
    return (
        <div className=' container pt-10 px-container'>
            <div className='grid sm:grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-2'>
                <div className='overflow-hidden '>
                    <Image
                        className='hover:scale-105 transition-transform'
                        src='/images/SB-2.webp'
                        alt='img1'
                        width={600}
                        height={100}
                    />
                </div>
                <div className='overflow-hidden '>
                    <Image
                        className='hover:scale-105 transition-transform'
                        src='/images/SB-3.webp'
                        alt='img2'
                        width={600}
                        height={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default Divider
