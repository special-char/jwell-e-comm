import React from 'react'

type Props = {}

const CheckoutPage = (props: Props) => {
    return (
        <div><div className="mt-20">
            <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl"> Checkout Page 
            </h1>
        </div>
            <div className="container p-12 mx-auto">
                <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full">
                        <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                        </h2>
                        <form className="justify-center w-full mx-auto" method="post" >
                            <div className="">
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">First
                                            Name</label>
                                        <input name="firstName" type="text" placeholder="First Name"
                                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                            >

                                            </input>
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label htmlFor="firstName" className="block mb-3 text-sm font-semibold text-gray-500">Last
                                            Name</label>
                                        <input name="Last Name" type="text" placeholder="Last Name"
                                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"></input>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label htmlFor="Email"
                                            className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                        <input name="Last Name" type="text" placeholder="Email"
                                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"></input>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label htmlFor="Address"
                                            className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                        <textarea
                                            class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                            name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                    </div>
                                </div>
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label htmlFor="city"
                                            className="block mb-3 text-sm font-semibold text-gray-500">City</label>
                                        <input name="city" type="text" placeholder="City"
                                            className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"></input>
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label htmlFor="postcode" className="block mb-3 text-sm font-semibold text-gray-500">
                                            Postcode</label>
                                        <input name="postcode" type="text" placeholder="Post Code"
                                            className=""></input>
                                    </div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <label className="flex items-center text-sm group text-heading">
                                        <input type="checkbox"
                                            className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"></input>
                                        <span className="ml-2">Save this information for next time</span></label>
                                </div>
                                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                                    <p className="text-xl font-bold">Payment Details</p>
                                    <p className="text-gray-400 font-light">Complete your order by providing your payment details.</p>
                                    <div className="">
                                        <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
                                        <div className="relative">
                                            <input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">

                                            </div>
                                            <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
                                            <div className="relative">
                                                <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
                                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Card Details</label>
                                            <div className="flex">
                                                <div className="relative w-7/12 flex-shrink-0">
                                                    <input type="text" id="card-no" name="card-no" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                        <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                                            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />

                                                        </svg>
                                                    </div>
                                                </div>
                                                <input type="text" name="credit-expiry" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
                                                <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
                                            </div>
                                            <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
                                            <div className="flex flex-col sm:flex-row">
                                                <div className="relative flex-shrink-0  sm:w-7/12">
                                                    <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                                        <img className="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
                                                    </div>
                                                </div>
                                                <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                                    <option value="State">State</option>
                                                </select>
                                                <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
                                            </div>
                                            <div className='mt-6'>
                                                <label> Total </label> </div>
                                            <div className="mt-6 border-t border-b py-2">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm font-medium text-gray-900">Subtotal</p>
                                                    <p className="font-semibold text-gray-900">$399.00</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm font-medium text-gray-900">Shipping Charge</p>
                                                    <p className="font-semibold text-gray-900">$8.00</p>
                                                </div>
                                            </div>
                                            <div className="mt-6 flex items-center justify-between">
                                                <p className="text-sm font-medium text-gray-900">Total</p>
                                                <p className="text-xl font-semibold text-gray-900">$408.00</p>
                                            </div>
                                        </div>
                                        <button className="mt-4 mb-8 w-full rounded-md bg-gradient-to-r from-purple-700 to-indigo-800 px-6 py-3 font-medium text-white">Place Order</button>
                                    </div>
                                </div>
                                <div className="relative pt-3 xl:pt-6"><label htmlFor="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500"> Notes
                                    (Optional)</label><textarea name="note"
                                        class="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        rows="4" placeholder="Notes for delivery"></textarea>
                                </div>
                                <div className="mt-4">
                                    <button
                                        className="mt-4 mb-8 w-full rounded-md bg-gradient-to-r from-purple-700 to-indigo-800 px-6 py-3 font-medium text-white">Process</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                        <div className="pt-12 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl font-bold">Order Summary
                            </h2>
                            <div className="mt-8">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/user/erondu/1600x900" alt="image"
                                                className="w-60"></img>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold">Title</h2>
                                            <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                            <span className="text-red-600">Price</span> $20
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src="https://source.unsplash.com/collection/190727/1600x900" alt="image"
                                                className="w-60"></img>
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold">Title</h2>
                                            <p className="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                            <span className="text-red-600">Price</span> $20
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex p-4 mt-4">
                                <h2 className="text-xl font-bold">ITEMS 2</h2>
                            </div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Subtotal<span className="ml-2">$40.00</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Shipping Tax<span className="ml-2">$10</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                Total<span className="ml-2">$50.00</span></div>
                        </div>
                    </div></div>
            </div>
        </div>

    )
}

export default CheckoutPage