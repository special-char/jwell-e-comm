import Button from "@/components/common/Button";
import BagIcon from "@/public/icons/bag.svg";

type Props = {};

const AddToCartBtn = (props: Props) => {
	return (
		<Button
			type="submit"
			variant="fill"
			color="green"
			className={"!rounded-md text-white"}
		>
			<BagIcon className="w-5 aspect-square" />
			<span>Add to bag</span>
		</Button>
	);
};

export default AddToCartBtn;
