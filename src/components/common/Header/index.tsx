import { navbarData } from "@/lib/data";
import DesktopNav from "./Desktopnav";
import MobileNav from "./Mobilenav";

type Props = {};

const Header = (props: Props) => {
	return (
		<>
			<header className="bg-gradient-to-r from-purple-700 to-indigo-800 sticky top-0 z-40">
				<DesktopNav data={navbarData} />
				<MobileNav data={navbarData} />
			</header>
		</>
	);
};

export default Header;
