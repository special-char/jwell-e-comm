import React from "react";
import { navbarData } from "@/lib/data";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <header className="bg-green sticky top-0 z-40">
        <DesktopNav data={navbarData} />
        <MobileNav data={navbarData} />
      </header>
    </>
  );
};

export default Header;
