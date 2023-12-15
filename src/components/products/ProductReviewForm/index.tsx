import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

type Props = {};

const ProductReviewForm = (props: Props) => {
	async function submitReview(formData: FormData) {
		"use server";

		const rawFormData = {
			revirew: formData.get("revirew"),
			name: formData.get("name"),
			email: formData.get("email"),
		};

		console.log("formdata", rawFormData);
	}
	return (
		<form action={submitReview} className="flex flex-col gap-6">
			<Input
				as="textarea"
				name="revirew"
				placeholder="Enter you Review"
				rows={5}
			/>
			<Input name="name" placeholder="Enter your name" />
			<Input name="email" placeholder="Enter your email" type="email" />
			<Button
				variant="fill"
				color="green"
				className="!rounded-xl"
				type="submit"
			>
				<span className="sr-only">Submit review</span>
				{/* <SendIcon /> */}
				Submit
			</Button>
		</form>
	);
};

export default ProductReviewForm;
