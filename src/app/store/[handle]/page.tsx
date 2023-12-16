import ProductOverview from "@/containers/ProductOverview";
import React from "react";

type Props = {
	params: {
		handle: string;
	};
};

const page = ({ params }: Props) => {
	return <ProductOverview handle={params.handle} />;
};

export default page;
