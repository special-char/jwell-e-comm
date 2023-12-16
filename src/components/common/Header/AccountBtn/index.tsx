import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import UserIcon from "@/public/icons/user.svg";
import Link from "next/link";

const AccountBtn = () => {
	const customer = false;
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button>
					<span className="sr-only">user account button</span>
					<UserIcon className="h-5" />
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
					<div className="p-4">
						<Menu.Item>
							{({ active }) => (
								<Link href={"/account"} className="hover:text-rose-500">
									Account
								</Link>
							)}
						</Menu.Item>

						<div className="">
							<Menu.Item>
								{customer ? (
									<button
										type="button"
										className="hover:text-rose-500"
										onClick={() => {
											console.log("log out pending");
											// 	handleLogout();
											// 	customerLogout();
											// 	resetCart();
											// 	mixpanel.reset();
										}}
									>
										Logout
									</button>
								) : (
									<Link href={"/login"} className="hover:text-rose-500">
										Login
									</Link>
								)}
							</Menu.Item>
						</div>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default AccountBtn;
