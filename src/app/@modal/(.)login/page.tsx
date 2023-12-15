import LoginForm from "@/components/auth/login";
import Modal from "@/components/common/Modal";

type Props = {};

const Login = (props: Props) => {
	return (
		<Modal>
			<LoginForm />
		</Modal>
	);
};

export default Login;
