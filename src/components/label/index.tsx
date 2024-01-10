import Image from 'next/image'
import React from 'react'

const Label = () => {
    return (
        <div className="bg-pink-50 py-24 sm:py-32 px-container mt-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Trusted by the world’s most innovative teams
                </h2>
                <div className="mt-10 grid max-w-lg grid-cols-4  gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 /images/one.webp lg:max-w-none lg:grid-cols-5 px-container">
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/images/one.webp"
                        alt="Transistor"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/images/two.webp"
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/images/three.webp"
                        alt="Tuple"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src="/images/four.webp"
                        alt="SavvyCal"
                        width={158}
                        height={48}
                    />
                    <Image
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                        src="/images/two.webp"
                        alt="Reform"
                        width={158}
                        height={48}
                    />
                </div>
            </div>
        </div>
    )
}
    

export default Label