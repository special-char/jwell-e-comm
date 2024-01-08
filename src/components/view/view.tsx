/* eslint-disable @next/next/no-img-element */
/**
 * v0 by Vercel.
 @see https://v0.dev/t/PR2gHg9Thbu
 */

import Image from "next/image"
import ring from "../../../public/images/ring1.jpg"
export default function Component() {
  return (
    <section className=" w-3/4 m-auto mt-10 bg-pink-50 rounded-lg px-container">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        
        <div className="gap-4">
        <div>
           <Image
           src={ring}
           alt="ring image"/> 
        </div>
          <div className="grid grid-cols-3 gap-8 mt-4">
            <Image
              alt="Product Thumbnail"
              className="rounded-lg object-cover w-full aspect-square"
              height="200"
              src={ring}
              width="200"
            />
            <Image
              alt="Product Thumbnail"
              className="rounded-lg object-cover w-full aspect-square"
              height="200"
              src={ring}
              width="200"
            />
            <Image
              alt="3D Model Tripod"
              className="rounded-lg object-cover w-full aspect-square"
              height="200"
              src={ring}
              width="200"
            />
          
          </div> 
        </div>
        <div>
          <h1 className="font-bold text-rose-900">Product Name</h1>
          <h3>Brand Name</h3>
          <h4>category</h4>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            This is a brief description of the product. It highlights its features and unique selling points.
          </p>
          
          <h2 className="text-4xl font-bold mt-6">$99.99</h2>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Quantity</label>
            <input
              className="mt-1 block w-20 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              max="10"
              min="1"
              type="number"
            />
          </div>
          <button className="mt-8 bg-rose-900 hover-bg-rose-800 rounded-lg text-white p-3" >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  )
}

