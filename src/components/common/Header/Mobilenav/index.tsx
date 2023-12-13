"use client";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CrossIcon from "@/public/icons/cross.svg";
import UserIcon from "@/public/icons/user.svg";
import CartIcon from "@/public/icons/cart.svg";
import Link from "next/link";
import style from "./mobilenav.module.css";
import Button from "../../Button";

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
  open: boolean;
};

function Mobilenav({ data, open, setopen }: Props) {
  const closeMobileNav = () => {
    const urlWithoutOpenMenu = window.location.href.split("#open-menu")[0];
    history.replaceState(null, document.title, urlWithoutOpenMenu);
    setopen(false);
  };
  return (
    <>
      <Transition.Root show={!!open} as={Fragment}>
        <Dialog
          as="div"
          className="relative md:hidden"
          onClose={closeMobileNav}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={style.blureffect} onClick={closeMobileNav}></div>
          </Transition.Child>

          <div className={style.sidemenu}>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className={`no-scrollbar ${style.dialogpanel}`}>
                <div className={style.container}>
                  <div className={style.menuheader}>
                    <div className="flex items-center">
                      <h1 className={style.heading1}>{data.heading1}</h1>
                      <h1 className={style.heading2}>{data.heading2}</h1>
                    </div>
                    <a>
                      <CrossIcon
                        className="h-6"
                        onClick={() => {
                          history.go(-1);
                          setopen(false);
                        }}
                      />
                    </a>
                  </div>

                  <div className={style.navlinks}>
                    {data &&
                      data.navLinks.map((item) => {
                        return (
                          <Link
                            href={item.url}
                            key={item.id}
                            className={style.link}
                          >
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default Mobilenav;
