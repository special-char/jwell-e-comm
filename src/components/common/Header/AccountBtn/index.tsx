import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import UserIcon from "@/public/icons/user.svg";
import Link from "next/link";
import clsx from "clsx";

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
				<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
					<Menu.Item>
						{({ active }) => (
							<Link
								href={"/account"}
								className={clsx("block px-4 py-2 ", {
									"bg-gray/10": !!active,
								})}
							>
								Account
							</Link>
						)}
					</Menu.Item>

					<Menu.Item>
						{({ active }) => {
							if (customer) {
								return (
									<button
										type="button"
										className={clsx("block px-4 py-2 ", {
											"bg-gray/10": !!active,
										})}
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
								);
							} else {
								return (
									<Link
										href={"/login"}
										scroll={false}
										className={clsx("block px-4 py-2", {
											"bg-gray/10": !!active,
										})}
									>
										Login
									</Link>
								);
							}
						}}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default AccountBtn;
