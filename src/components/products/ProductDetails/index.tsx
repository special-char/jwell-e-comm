import Button from "@/components/common/Button";
import { ProductCardType } from "@/utils/types";
import Link from "next/link";
import StarIcon from "@/public/icons/star.svg";
import clsx from "clsx";
import AddToCartBtn from "../AddToCartBtn";

const ProductDetails = ({ data }: ProductCardType) => {
	return (
		<div className="flex flex-col justify-between gap-4">
			<h3 className="font-bold max-md:hidden">{data.productName}</h3>
			<p className="text-gray">{data.productDescription}</p>

			<h6 className="font-bold">{data.productPrice}</h6>

			<div className="flex items-center gap-4">
				<div className="flex">
					{[0, 1, 2, 3, 4].map((rating) => (
						<StarIcon
							key={rating}
							className={clsx("h-5 w-5 flex-shrink-0", {
								["text-yellow"]: data.rating > rating,
								["text-gray/20"]: data.rating <= rating,
							})}
							aria-hidden="true"
						/>
					))}
				</div>

				<p className="text-gray">{data.reviewCount} reviews</p>
			</div>

			<AddToCartBtn />
		</div>
	);
};

export default ProductDetails;
