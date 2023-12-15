import ProductDetails from "@/components/products/ProductDetails";
import ProductOverviewImage from "@/components/products/ProductOverviewImage";
import { products } from "@/lib/data";

type ProductOverviewProps = {
	handle: any;
};

const ProductOverview = ({ handle }: ProductOverviewProps) => {
	const productDetails = products.find((x) => x.handle === handle);

	if (!productDetails) {
		return <div>Product not found</div>;
	}

	return (
		<section className="relative sm:mt-0 mt-4 grid lg:grid-cols-2 items-start grid-cols-1 flex-1 gap-x-5 lg:gap-x-20">
			<div className="lg:sticky lg:top-[100px]">
				<ProductOverviewImage
					productImagesData={[
						productDetails?.productThumbnail,
						...productDetails.productImages,
					]}
				/>
			</div>
			<div>
				<ProductDetails data={productDetails} />
			</div>
		</section>
	);
};

export default ProductOverview;
