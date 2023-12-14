import { ProductCardType } from "@/utils/types";

const ProductDetails = ({ data }: ProductCardType) => {
	return (
		<div>
			<h1>{data.productName}</h1>
		</div>
	);
};

export default ProductDetails;
