import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="flex justify-center items-center font-[sans-serif] text-[#333] min-h-screen p-4">
      <div className="max-w-md w-full mx-auto">
        <form className="bg-opacity-70 bg-white rounded-2xl p-6 shadow-md-[0_2px_16px_-3px_rose-900]">
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold text-indigo-800">Sign in</h3>
          </div>
          <div className="mb-4">
            <div className="relative flex items-center">
              <input
                name="email"
                type="text"
                required
                className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder-text-[#333]"
                placeholder="Enter email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#333"
                stroke="#333"
                className="w-[18px] h-[18px] absolute right-2"
                viewBox="0 0 682.667 682.667"
              >
                {/* SVG Path Content */}
              </svg>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative flex items-center">
              <input
                name="password"
                type="password"
                required
                className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder-text-[#333]"
                placeholder="Enter password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#333"
                stroke="#333"
                className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                viewBox="0 0 128 128"
              >
                {/* SVG Path Content */}
              </svg>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-between gap-2">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-sm font-semibold hover:underline text-indigo-800">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="mb-6">
            <button
              type="button"
              className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-gradient-to-r from-purple-700 to-indigo-800 focus:outline-none hover:animate-pulse"
            >
              Sign in
            </button>
          </div>
          <p className="text-sm text-center mb-6">
            Don't have an account{' '}
            <a href="#" className="font-semibold hover:underline ml-1 whitespace-nowrap text-indigo-800">
              Register here
            </a>
          </p>
          <hr className="my-6 border-gray-500" />
          <div className="space-x-8 flex justify-center">
            <button type="button" className="border-none outline-none">
              <a
                href="https://www.thespecialcharacter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaGoogle size={20} style={{ marginRight: '10px' }} />
                {/* google no logo mukvano che */}
              </a>
            </button>
            <a
              href="https://www.instagram.com/thespecialchar?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaInstagram size={20} style={{ marginRight: '10px' }} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100054730871790"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaFacebookF size={20} style={{ marginRight: '10px' }} />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;











// import Link from "next/link";
// import SignInWith from "../../components/auth/SignInWith";
// import Input from "../../components/common/formElements/Input";
// import SubmitButton from "../../components/common/formElements/SubmitButton";

// type Props = {};

// const LoginForm = (props: Props) => {
// 	async function login(formData: FormData) {
// 		"use server";

// 		const rawFormData = {
// 			email: formData.get("email"),
// 			password: formData.get("password"),
// 		};

// 		console.log("formdata", rawFormData);

// 		// mutate data
// 		// revalidate cache
// 	}

// 	return (
// 		<div className="flex flex-col w-full items-center gap-4">
// 			<h4>Login</h4>
// 			<div className="flex flex-col gap-2">
// 				<div className="flex gap-2 items-center">
// 					<p className="text-subtitle2">Don&apos;t have an account ?</p>
// 					<span>
// 						<Link className="text-blue-500" scroll={false} href={"/register"}>
// 							Sign up
// 						</Link>
// 					</span>
// 				</div>
// 				<form action={login} className="flex flex-col gap-6 max-w-md">
// 					<Input
// 						name="email"
// 						placeholder="Enter your email"
// 						type="email"
// 						label="Email"
// 					/>
// 					<Input name="password" placeholder="Password" label="Password" />
// 					<SubmitButton
// 						variant="fill"
// 						color="green"
// 						className="!rounded-xl"
// 						type="submit"
// 					>
// 						Login
// 					</SubmitButton>
// 				</form>
// 				<div className="flex items-center">
// 					<span className="flex-1">
// 						<hr />
// 					</span>
// 					<p className="text-subtitle2 px-4">Or Login with</p>
// 					<span className="flex-1">
// 						<hr />
// 					</span>
// 				</div>
// 				<SignInWith />
// 			</div>
// 		</div>
// 	);
// };

// export default LoginForm;
