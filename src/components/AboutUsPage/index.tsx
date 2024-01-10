import React from 'react'

type Props = {}
const people = [

    {
        name: 'Timothy Beck',
        role: 'IT Expert',
        imageUrl:
            'https://template.hasthemes.com/hiraola/hiraola/assets/images/about-us/team/1.jpg',

    },

    {
        name: 'Sarah Sanchez',
        role: 'Web Designer',
        imageUrl:
            'https://template.hasthemes.com/hiraola/hiraola/assets/images/about-us/team/2.jpg',
    },

    {

        name: 'Edwin Adams',
        role: 'Content Writer',
        imageUrl:
            'https://template.hasthemes.com/hiraola/hiraola/assets/images/about-us/team/3.jpg',

    },

    {
        name: 'Anny Adams',
        role: 'Marketing officer',
        imageUrl:
            'https://template.hasthemes.com/hiraola/hiraola/assets/images/about-us/team/4.jpg',
    },
    // More people...
]

const About = (_props: Props) => {
    return (
        <><div className="">
            <img src="https://i.pinimg.com/originals/05/e0/7a/05e07a75023dcd2c5356bf0fa2fe8140.jpg"></img>
        </div>
        

            <section className="bg-pink-50">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg">
                            <h2 className="text-3xl font-extrabold text-white sm:text-rose-900">WELCOME TO TRISHNA'S STORE!</h2>
                            <p className="mt-4 text-rose-900 text-lg">we Provide Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae nisi fuga facilis, consequuntur, maiores eveniet voluptatum, omnis possimus temporibus aspernatur nobis animi in exercitationem vitae nulla! Adipisci ullam illum quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, nulla veniam? Magni aliquid asperiores magnam. Veniam ex tenetur.</p>
                            <div className="mt-8">
                                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-rose-50 transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-rose-900 rounded-lg hover:bg-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-80 hover:scale-110">SHOP NOW</button>
                            </div>
                        </div>
                        <div className="mt-12 md:mt-0">
                            <img src="https://template.hasthemes.com/hiraola/hiraola/assets/images/about-us/1.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md " />
                        </div>
                    </div>
                </div>
                <div className="bg-pink-50 py-24 sm:py-32">
                    <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold tracking-tight text-rose-900 sm:text-4xl">Our Team</h2>
                            <p className="mt-6 text-lg leading-8 text-rose-900">
                                Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper

                            </p>
                        </div>



                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            {people.map((person) => (
                                <li key={person.name}>
                                    <div className="flex items-center gap-x-6">
                                        <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                        <div>
                                            <h3 className="text-base font-semibold leading-7 tracking-tight text-rose-900">{person.name}</h3>
                                            <p className="text-sm font-semibold leading-6 text-rose-800">{person.role}</p>
                                            <div className="flex gap-2 py-2 hover:cursor-pointer">
                                                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"className="hover:scale-110" width="20" height="20" alt="fb" />
                                                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" className="hover:scale-110"width="20" height="20" alt="tw" />
                                                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"className="hover:scale-110" width="20" height="20" alt="inst" />
                                                <img src="https://www.svgrepo.com/show/28145/linkedin.svg"className="hover:scale-110" width="20" height="20" alt="in" />

                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section></>
    )
}
export default About

