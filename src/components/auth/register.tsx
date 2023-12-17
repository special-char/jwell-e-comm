import Link from "next/link";
import Button from "../common/Button";
import Input from "../common/form/Input";
import SignInWith from "../SignInWith";

type Props = {};

const RegisterForm = (props: Props) => {
  async function register(formData: FormData) {
    "use server";

    const rawFormData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log("formdata", rawFormData);

    // mutate data
    // revalidate cache
  }
  return (
    <div className="flex flex-col w-full items-center gap-4">
      <h4>Register</h4>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <p className="text-subtitle2">Have an account ?</p>
          <span>
            <Link className="text-blue-500" scroll={false} href={"/login"}>
              Log in
            </Link>
          </span>
        </div>
        <form action={register} className="flex flex-col gap-6 max-w-md">
          <Input
            name="name"
            placeholder="Enter your name"
            type="text"
            label="Name"
          />
          <Input
            name="email"
            placeholder="Enter your email"
            type="email"
            label="Email"
          />
          <Input name="password" placeholder="Password" label="Password" />
          <Button
            variant="fill"
            color="green"
            className="!rounded-xl"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <div className="flex items-center">
          <span className="flex-1">
            <hr />
          </span>
          <p className="text-subtitle2 px-4">Or SignUp with</p>
          <span className="flex-1">
            <hr />
          </span>
        </div>
        <SignInWith />
      </div>
    </div>
  );
};

export default RegisterForm;
