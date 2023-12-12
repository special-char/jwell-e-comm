"use client";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../../Button";
import UserIcon from "@/public/icons/user.svg";
import CartIcon from "@/public/icons/cart.svg";
import HamburgerIcon from "@/public/icons/hamburger.svg";
import style from "./desktopnav.module.css";
import Mobilenav from "../Mobilenav";
import { navbarData } from "@/lib/data";

type Props = {
  data: {
    heading1: string;
    heading2: string;
    navLinks: Array<{
      id: number;
      title: string;
      url: string;
    }>;
  };
};

const Desktopnav = ({ data }: Props) => {
  const [menuopen, setmenuopen] = useState(false);
  return (
    <div className={style.desknav}>
      <div className={style.logoWrapper}>
        <h1 className={style.heading1}>{data.heading1}</h1>
        <h1 className={style.heading2}>{data.heading2}</h1>
      </div>
      <div className="flex">
        <div className={style.navlinks}>
          <div className={style.links}>
            {data &&
              data.navLinks.map((item) => {
                return (
                  <Link href={item.url} key={item.id} className={style.link}>
                    {item.title}
                  </Link>
                );
              })}
          </div>
          <div className={style.icons}>
            <Button variant="icon">
              <UserIcon className={"h-6"} />
            </Button>
            <Button variant="icon">
              <CartIcon className={"h-6"} />
            </Button>
          </div>
        </div>

        <div className="md:hidden">
          <Button
            variant="icon"
            title="menu button"
            as={"a"}
            href="#open-menu"
            onClick={() => setmenuopen(!menuopen)}
          >
            <HamburgerIcon className="h-6" />
          </Button>
          <Mobilenav data={navbarData} open={menuopen} setopen={setmenuopen} />
        </div>
      </div>
    </div>
  );
};

export default Desktopnav;
