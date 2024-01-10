// import React from 'react'
// import Hiraola from "@/public/images/logo1.png"
// import Like from "@/public/icons/like.svg"
// import Search from "@/public/icons/search.svg"
// import Bag from "@/public/icons/bag.svg"
// import Hamburger from "@/public/icons/hamburger-menu.svg"
// import Image from "next/image"
// import Checkout from '../checkout/checkout'

// const Header = () => {
//   return (
//     <>
//     <div className='flex justify-between bg-rose-950 px-8 max-sm:flex max-sm:flex-col'>
//       {/* <div className='flex gap-6 items-center '>
//         <div className='flex flex-col gap-2'>
//           <p>Location</p>
//           <p>Street 12345 - USA</p>
//         </div>
//         <div className='flex flex-col gap-2  border-x-green'>
//           <p>Location</p>
//           <p>Street 12345 - USA</p>
//         </div>
//       </div> */}

//          <div className='flex items-center max-sm:flex max-sm:justify-center '>
//         <Image src={Hiraola} alt={"logo image"} width={150} height={150}></Image>
//         </div>
//         <div className='flex gap-10 items-center max-sm:flex max-sm:justify-center max-sm:p-4'>
//           <Like className="w-10 h-10"/>
//           <Search className="w-10 h-10"/>
//           < Hamburger className="lg:hidden"/>
//           <Bag className="w-10 h-10"/>
//         </div>
//     </div>
    
//     </>
//   )
// }

// export default Header


"use client";

import Link from "next/link";
import React, { useState } from "react";
// import logo from "..//app/modules/assets/icons/logo.jpg";

import { TbMenuDeep } from "react-icons/tb"; 
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import clsx from "clsx";
// import About from "../../app/about/about"

export default function Navbar() {
  const [isSideMenuOpen, setMenu] = useState(false);

  const navlinks = [
    {
      labe: "Home",
      link: "/"
    },
    {
      labe: "About",
      link: "/about-us"
    },
    {
      labe: "Shop",
      link: "/shop"
    },
    // {
    //     labe: "Pages",
    //     link: "#"
    // },
    {
        labe: "Blog",
        link: "/blog"
    },
    {
      labe: "Contact",
      link: "/contact"
    }
  ];

  return (
    <main>
      <nav className="flex justify-between px-8 items-center py-6  ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <TbMenuDeep
              onClick={() => setMenu(true)}
              className="text-2xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            {/* <Link href={"/"} >
            <Image src={logo} alt="logo" width={200} height={300} />
            </Link> */}
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block  text-gray-400 hover:text-black"
              href={d.link}
            >
              {d.labe}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <CgClose
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.labe}
              </Link>
            ))}
          </section>
        </div>
        <div className="flex items-center gap-4">
         <section className="w-full sm:w-[200px] md:w-[70%] relative pl-2  ">
          <input
            className="border-gray-200 border p-1.5 px-4 mt-1 rounded-lg w-full "
            type="text"
            placeholder="Search here..."
          />
          {/* <CiSearch
            className="absolute right-0 top-0 mr-3 mt-2.5 text-gray-400  cursor-pointer"
            size={25}
          /> */}
        </section>
          <Link href={"#"} >
          <FaOpencart className="text-2xl cursor-pointer" />
          </Link>
          <Link href={"#"} >
          <VscAccount className="text-2xl cursor-pointer"/>
          </Link>
        </div>
      </nav>
      <hr className=" " />
    </main>
  );
}