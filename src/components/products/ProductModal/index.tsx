import Image from "next/image";
import { ProductCardType } from "@/utils/types";
import AddToCartBtn from "../AddToCartBtn";
import Modal from "@/components/common/Modal";
import Rating from "../Rating";
import { usePathname, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import Button from "@/components/common/Button";

const ProductModal = ({ data }: ProductCardType) => {
	return (
		<Modal>
			<div className="grid w-full grid-cols-1 sm:grid-cols-2 rounded-md">
				<div className="relative w-full aspect-square">
					<Image
						src={data.productThumbnail.url}
						alt={data.productName}
						fill
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="flex flex-col justify-between gap-4">
					<h3 className="font-bold">{data.productName}</h3>
					<p className="text-gray">{data.productDescription}</p>
					<h6 className="font-bold">{data.productPrice}</h6>
					<Rating rating={data.rating} reviewCount={data.reviewCount} />
					<AddToCartBtn />
					<Button
						as="a"
						href={`/products/${data.handle}`}
						className="text-blue-500 text-center"
					>
						View more
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default ProductModal;
