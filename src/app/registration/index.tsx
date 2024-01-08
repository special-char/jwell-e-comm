import React from 'react';

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="font-[sans-serif] text-gray-800 bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center shadow-rose-900 rounded-xl overflow-hidden">
        <div className="md:order-1 flex flex-col justify-center space-y-16 md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4 ">
          <div>
            <p className="text-[13px] text-white mt-2">
              Welcome to our registration page! Get started by creating your account.
            </p>
          </div>
          <div>
            {/* <h4 className="text-white text-lg font-semibold">Simple & Secure Registration</h4>
            <p className="text-[13px] text-white mt-2">
              Our registration process is designed to be straightforward and secure. We prioritize
              your privacy and data security.
            </p> */}
          </div>
        </div>
        <form className="md:col-span-2 w-full md:py-10 md:px-10">
          <div className="mb-6">
            <h3 className="text-2xl text-rose-800 font-bold">Create an account</h3>
          </div>
          <div className="space-y-5">
            <div>
              <label className="text-sm mb-2 block">Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required
                  className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-rose-800"
                  placeholder="Enter name"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4"
                  viewBox="0 0 24 24"
                >
                  {/* SVG Path Content */}
                </svg>
              </div>
            </div>
            <div>
              <label className="text-sm mb-2 block">Email Id</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  required
                  className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-rose-800"
                  placeholder="Enter email"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4"
                  viewBox="0 0 682.667 682.667"
                >
                  {/* SVG Path Content */}
                </svg>
              </div>
            </div>
            <div>
              <label className="text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-rose-800"
                  placeholder="Enter password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  {/* SVG Path Content */}
                </svg>
              </div>
            </div>
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-rose-800 focus:ring-rose-800 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm ">
                I accept the{' '}
                <a href="javascript:void(0);" className="text-rose-800 font-semibold hover:underline ml-1">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <div className="!mt-10">
            <button
              type="button"
              className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-rose-800 hover:bg-rose-800 focus:outline-none"
            >
              Create an account
            </button>
          </div>
          <p className="text-sm mt-6 text-center">
            Already have an account?{' '}
            <a href="javascript:void(0);" className="text-rose-800 font-semibold hover:underline ml-1">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;