import Link from "next/link";
import Button from "../../Button";
import UserIcon from "@/public/icons/user.svg";
import CartIcon from "@/public/icons/cart.svg";
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
		<div className={style.deskNav}>
			<div className={style.logoWrapper}>
				<h1 className={style.heading1}>{data.heading1}</h1>
				<h1 className={style.heading2}>{data.heading2}</h1>
			</div>
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
				<div className="flex gap-4 px-2">
					<Button variant="icon">
						<UserIcon className="h-5" />
					</Button>
					<Button variant="icon">
						<CartIcon className="h-5" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Desktopnav;
