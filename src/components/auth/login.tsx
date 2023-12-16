import Button from "../common/Button";
import Input from "../common/Input";

type Props = {};

const LoginForm = (props: Props) => {
	async function login(formData: FormData) {
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
		<div>
			<h4>Login</h4>
			<form action={login} className="flex w-full flex-col gap-6">
				<Input name="email" placeholder="Enter your email" type="email" />
				<Input name="password" placeholder="Password" />
				<Button
					variant="fill"
					color="green"
					className="!rounded-xl"
					type="submit"
				>
					Login
				</Button>
			</form>
		</div>
	);
};

export default LoginForm;
