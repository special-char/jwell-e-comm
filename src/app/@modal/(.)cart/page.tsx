import Button from "@/components/common/Button";
import SidePanel from "@/components/common/SidePanel";
import Image from "next/image";
import { products } from "@/lib/data";
import CartItem from "@/components/CartItem";

type Props = {};

const Cart = (props: Props) => {
	return (
		<SidePanel side="right">
			<div className="flex h-full flex-col overflow-y-scroll no-scrollbar">
				<div className="flow-root overflow-hidden overflow-y-auto flex-1 no-scrollbar">
					<ul role="list" className="divide-y divide-gray">
						{products &&
							products.map((item) => <CartItem key={item.id} data={item} />)}
					</ul>
				</div>

				<div className="border-t border-gray/30 flex flex-col pt-2 gap-4">
					<div>
						<div className="flex justify-between items-center text-body2 font-semibold">
							<span>Subtotal</span>
							<span>₹ 100000</span>
						</div>
						<p className="text-caption2 text-gray">
							Shipping and taxes calculated at checkout.
						</p>
					</div>
					<div className="grid gap-2">
						<Button variant="fill" color="green" className="!rounded-xl">
							<span className="sr-only">Checkout</span>
							Checkout
						</Button>
						<div className="flex justify-center items-center">
							<p>
								or &nbsp;
								<a href={"/cart"} className="text-gray">
									Continue Shopping
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</SidePanel>
	);
};

export default Cart;
