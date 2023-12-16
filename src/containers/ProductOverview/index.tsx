import ProductDetails from "@/components/products/ProductDetails";
import ProductOverviewImage from "@/components/products/ProductOverviewImage";
import ProductReviewCard from "@/components/products/ProductReviewCard";
import ProductReviewForm from "@/components/products/ProductReviewForm";
import { products } from "@/lib/data";
import { productReviews } from "@/lib/data";

type ProductOverviewProps = {
	handle: any;
};

const ProductOverview = ({ handle }: ProductOverviewProps) => {
	const productDetails = products.find((x) => x.handle === handle);

	if (!productDetails) {
		return <div>Product not found</div>;
	}

	return (
		<>
			<section className="relative sm:mt-0 mt-4 grid lg:grid-cols-2 items-start grid-cols-1 flex-1 gap-5 lg:gap-20">
				<div>
					<h3 className="font-bold md:hidden mb-4">
						{productDetails.productName}
					</h3>
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
			<section className="grid md:grid-cols-2 gap-6">
				<div className="flex flex-col gap-4">
					<h5 className="pt-8">Reviews</h5>
					{productReviews.map((review) => (
						<ProductReviewCard key={review.id} data={review} />
					))}
				</div>
				<div>
					<h5 className="py-8">Leave a Review</h5>
					<ProductReviewForm />
				</div>
			</section>
		</>
	);
};

export default ProductOverview;
