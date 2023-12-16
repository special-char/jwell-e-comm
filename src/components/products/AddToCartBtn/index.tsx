import Button from "@/components/common/Button";
import BagIcon from "@/public/icons/bag.svg";
import Plus from "@/public/icons/plus.svg";

type Props = {
	varient?: "icon" | "text";
};

const AddToCartBtn = ({ varient = "text" }: Props) => {
	if (varient === "icon")
		return (
			<Button variant="round" color="black">
				<span className="sr-only">add to card button</span>
				<Plus className="h-4" />
			</Button>
		);
	else
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
