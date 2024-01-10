import Image from 'next/image'
import React from 'react'
// import image from "../../../public/images/aboutbanner.webp"
import Gridimage from '@/public/images/gridimage.avif'
import image2 from "../../../public/images/aboutimage.webp"
import Bannerabout from "@/public/images/bannerabout.jpg"

type Props = {}

const About = (_props: Props) => {
    return (
        <><div className="">
            <Image src={Bannerabout} alt={''} className=' w-full h-70'  />
        </div>
        

            <section className="bg-white">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-extrabold text-white sm:text-purple-800">WELCOME TO TRISHNAS STORE!</h2>
                            <p className="mt-4 text-black text-lg">Welcome to Trishna's store where timeless elegance meets modern craftsmanship. Our journey in the world of fine jewelry began with a passion for creating exquisite pieces that capture the essence of individual stories and celebrate life's precious moments.
                            .</p>
                            <p className='mt-4 text-black text-lg'>Unique Designs
Our jewelry is more than adornment; it's an expression of individuality. Whether you're seeking a stunning engagement ring, a meaningful pendant, or a pair of earrings to make a statement, our diverse collection has something for every style and occasion. We believe that jewelry should not just be an accessory but a reflection of the wearer's personality and story.

                            </p>
                            <div className="mt-8">
                                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-rose-50 transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gradient-to-r from-purple-700 to-indigo-800 rounded-lg hover:bg-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-80 hover:scale-110">SHOP NOW</button>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <img sizes="(min-width: 768px) 100vw, (max-width: 427px) min(100%, 387px), (max-height: 786px) min(100%, 387px), (min-aspect-ratio: 4640/6960) calc((calc(100vh - 205px)) * 0.666667), calc(100vw - 40px)" srcSet="https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=387&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 387w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=687&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 687w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=774&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 774w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=987&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 987w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=1287&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1287w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=1374&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1374w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=1587&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1587w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=1887&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1887w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=1974&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1974w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=2187&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2187w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=2487&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2487w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2574w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=2787&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2787w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=3087&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3087w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=3174&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3174w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=3387&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3387w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=3687&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3687w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=3774&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3774w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=3987&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3987w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=4287&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4287w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=4374&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4374w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=4587&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4587w, https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=4640&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4640w" src="https://plus.unsplash.com/premium_photo-1681276170538-092ed3578648?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="a shell with a bunch of jewelry on top of it" class="tB6UZ a5VGX" alt="image"></img>
                            {/* <Image src={image2} alt="About Us Image" className="object-cover rounded-lg shadow-md " width={700} height={300} /> */}
                        </div>
                    </div>
                </div>
                <div className="bg-white py-24 sm:py-32">
                <div className="my-6 font-[sans-serif] text-indigo-800">
    <div className="md:mb-28 mb-12 text-center">
        <h2 className="text-3xl font-extrabold">What our happy client say</h2>
    </div>
    <div className="grid md:grid-cols-3 md:gap-6 max-md:gap-10 max-w-6xl mx-auto relative">
        <div
            className="bg-gradient-to-r from-purple-700 to-indigo-800 max-w-[60%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden">
        </div>
        <div className="max-w-[350px] h-auto lg:p-8 p-4 rounded-md mx-auto bg-white border-purple-700 relative max-md:shadow-md">
            <div className="">
                <img src="https://readymadeui.com/profile_2.webp" className="w-12 h-12 rounded-full" />
                <h4 className="text-sm whitespace-nowrap font-extrabold mt-2">John Doe</h4>
                <p className="mt-1 text-xs text-gray-400">Founder of Rubik</p>
            </div>
            <div className="mt-4">
                <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food.
                    The staff was friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
        </div>
        <div className="max-w-[350px] h-auto lg:p-8 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
            <div className="">
                <img src="https://readymadeui.com/profile_3.webp" className="w-12 h-12 rounded-full" />
                <h4 className="text-sm whitespace-nowrap font-extrabold mt-2">Mark Adair</h4>
                <p className="mt-1 text-xs text-gray-400">Founder of Alpha</p>
            </div>
            <div className="mt-4">
                <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food.
                    The staff was friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
        </div>
        <div className="max-w-[350px] h-auto lg:p-8 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md">
            <div className="">
                <img src="https://readymadeui.com/profile_4.webp" className="w-12 h-12 rounded-full" />
                <h4 className="text-sm whitespace-nowrap font-extrabold mt-2">Simon Konecki</h4>
                <p className="mt-1 text-xs text-gray-400">Founder of Labar</p>
            </div>
            <div className="mt-4">
                <p className="text-sm leading-relaxed">The service was amazing. I never had to wait that long for my food.
                    The staff was friendly and attentive, and the delivery was impressively prompt.</p>
            </div>
        </div>
    </div>
</div>
                    
                </div>
            </section>
            </>
    )
}
export default About