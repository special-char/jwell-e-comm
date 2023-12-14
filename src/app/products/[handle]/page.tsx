import ProductOverview from "@/containers/ProductOverview";
import React from "react";

type Props = {
	params: {
		handle: string;
	};
};

const page = ({ params }: Props) => {
	return (
		<div>
			product details page product id:{" "}
			<span className="text-rose-500">{params.handle}</span>
			<ProductOverview handle={params.handle} />
		</div>
	);
};

export default page;
