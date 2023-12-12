import Link from "next/link";
import React from "react";
import Button from "../../Button";
import UserIcon from "@/public/icons/user.svg";
import CartIcon from "@/public/icons/cart.svg";
import HamburgerIcon from "@/public/icons/hamburger.svg";
import style from "./desktopnav.module.css";

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
  return (
    <div className={style.desknav}>
      <div className={style.logoWrapper}>
        <h1 className={style.heading1}>{data.heading1}</h1>
        <h1 className={style.heading2}>{data.heading2}</h1>
      </div>
      <div className={style.navlinks}>
        <ul className={style.links}>
          {data &&
            data.navLinks.map((item) => {
              return (
                <Link href={item.url} key={item.id} className={style.link}>
                  {item.title}
                </Link>
              );
            })}
        </ul>

        <div className={style.icons}>
          <Button variant="icon" className="p-0">
            <UserIcon className={"h-6"} />
          </Button>
          <Button variant="icon" className={"p-0"}>
            <CartIcon className={"h-6"} />
          </Button>
        </div>
      </div>
      <HamburgerIcon height={25} width={25} className="md:hidden" />
    </div>
  );
};

export default Desktopnav;
