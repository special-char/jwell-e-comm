import RegisterForm from "@/components/auth/register";
import Modal from "@/components/common/Modal";

type Props = {};

const Login = (props: Props) => {
  return (
    <Modal>
      <RegisterForm />
    </Modal>
  );
};

export default Login;
