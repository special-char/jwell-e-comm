import SidePanel from "@/components/common/sidePanel";
import Link from "next/link";

type Props = {};

const Cart = (props: Props) => {
	return (
		<SidePanel side="right">
			<div>Cart</div>
			<Link href={"/products"}>continue shoping</Link>
		</SidePanel>
	);
};

export default Cart;
