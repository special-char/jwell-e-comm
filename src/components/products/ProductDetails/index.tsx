import { ProductCardType } from "@/utils/types";

const ProductDetails = ({ data }: ProductCardType) => {
	return (
		<div className="flex flex-col gap-4">
			<h1>{data.productName}</h1>
			rating
			<p>{data.productDescription}</p>
		</div>
	);
};

export default ProductDetails;
