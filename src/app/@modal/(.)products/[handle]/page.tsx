import ProductModal from "@/components/products/ProductModal";
import { products } from "@/lib/data";
type Props = {
	params: {
		handle: string;
	};
};
const page = ({ params }: Props) => {
	const selectedProduct = products.find(
		(product) => product.handle === params.handle
	);

	if (!selectedProduct) {
		return <p>Product not found</p>;
	}
	return <ProductModal data={selectedProduct} />;
};

export default page;
