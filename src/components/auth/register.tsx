import Button from "../common/Button";
import Input from "../common/Input";

type Props = {};

const RegisterForm = (props: Props) => {
	async function register(formData: FormData) {
		"use server";

		const rawFormData = {
			email: formData.get("email"),
			password: formData.get("password"),
		};

		console.log("formdata", rawFormData);

		// mutate data
		// revalidate cache
	}
	return (
		<form action={register}>
			<Input name="email" placeholder="Enter your email" type="email" />
			<Input name="password" placeholder="Password" />
			<Button
				variant="fill"
				color="green"
				className="!rounded-xl"
				type="submit"
			>
				register
			</Button>
		</form>
	);
};

export default RegisterForm;
