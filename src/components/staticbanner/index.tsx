import React from 'react'
import Image from 'next/image'
import Banner_i from "../../../public/images/static-banner-2.webp"

interface Props {

}

const StaticBanner  = (props: Props) => {
    return (
        <div className=' container px-container'>
                  <Image className=' mt-10 w-full h-full relative animate-pulse'
                   src={Banner_i}
                    alt="img"  />
                    </div>
                    
                 
                

        
    )
}

export default StaticBanner