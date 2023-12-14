import Button from "@/components/common/Button";
import React from "react";

type Props = {};

const AddToCartBtn = (props: Props) => {
	return (
		<Button
			type="submit"
			variant="fill"
			color="green"
			className={"!rounded-md"}
		>
			Add to bag
		</Button>
	);
};

export default AddToCartBtn;
