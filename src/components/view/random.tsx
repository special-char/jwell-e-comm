// "use client"
// import { useParams } from 'next/navigation';
// import React from 'react';
//  // For handling route parameters

// const View = () => {
//   // Use useParams to get the product ID from the URL
//   const { productId } = useParams();

//   // Fetch product details based on productId (simulated data)
//   const product = {
//     id: productId,
//     name: 'Example Product',
//     price: 49.99,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
//   };

//   return (
//     <div className="container mx-auto mt-6">
//       <div className="flex">
//         <div className="w-1/2">
          
//         </div>
//         <div className="w-1/2 px-4">
//           <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
//           <p className="text-gray-700 mb-4">{product.description}</p>
//           <p className="text-xl font-semibold mb-2">${product.price}</p>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default View;

// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable @next/next/no-img-element */
// "use client"
// import React, { useState } from 'react'
// import Router from 'next/router'
// import Image from 'next/image';

// function Counter() {
//   const [images, setImages] = useState({
//     img1: "ring1.jpg",
//     img2: "ring2.jpg",
//     img3: "ring3.jpg",
//     img4: "ring4.jpg",

// })

// }

    
// const View = () => {

//     const [activeImg, setActiveImage] = useState(images.img1)

//     const [amount, setAmount] = useState(1);


//     return (
//         <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center ">
//             <div className="flex flex-col gap-6 lg:w-2/4">
//                 <img src={activeImg} alt="" className=' w-full h-full aspect-square object-cover rounded-xl' />
//                 <div className="flex flex-col justify-between h-24">
//                     <img src={images.img2} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)} />
//                     <img src={images.img3} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)} />
//                     <img src={images.img4} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)} />
//                     <img src={Images.img1} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)} />

//                 </div>
//             </div>
//             <div className=" flex flex-col gap-4 lg:w-2/4">
//                 <div>
//                     <span className=" text-rose-950 font-semibold">JWDA Penant Lamp Brshed Steel</span>
//                     <h1 className="text-3xl font-bold">Reference: demo_1</h1>
//                 </div>
//                 <h6 className=" text-2xl font-semibold">EX Tax: £453.35
//                     Brands Buxton
//                     Product Code: Product 16
//                     Reward Points: 600</h6>
//                 <div className="flex flex-row items-center gap-12">
//                     <div className="flex flex-row items-center">
//                         <button className="bg-gray py-2 px-4 rounded-lg text-rose-950 text-3xl " onClick={() => setAmount((prev) => prev - 1) } >-</button>
//                     <span className=" bg-gray py-4 px-6 rounded-lg " {...setAmount}>1</span>
//                     <button className=" bg-gray py-2 px-4 rounded-lg text-rose-950 text-3xl " onClick={() => setAmount((prev) => prev + 1) } >+</button>
//             </div>
//         </div><button className=" bg-rose-950 text-rose-300 py-3 px-6 rounded-xl h-full">Add to Cart</button>
//         </div>
//         </div>
        
//     );
// }


// export default View