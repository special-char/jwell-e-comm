import React from "react";
import { topProduct, products } from "@/lib/data";
import Button from "@/components/common/Button";
import ProductCard from "@/components/common/ProductCard";
type Props = {};

const HomeProducts = (props: Props) => {
	return (
		<section className="grid lg:grid-cols-[25%_1fr] grid-cols-1 items-center gap-2">
			<div className="flex flex-col gap-4">
				<h3>{topProduct.heading}</h3>
				<p className="text-caption1">{topProduct.description}</p>
				<div>
					<Button variant="fill" color="black">
						{topProduct.actionBtn}
					</Button>
				</div>
			</div>
			<div className="grid md:grid-cols-3 grid-cols-1 gap-4">
				{products.slice(0, 3).map((product, index) => (
					<ProductCard key={index} data={product} />
				))}
			</div>
		</section>
	);
};

export default HomeProducts;
