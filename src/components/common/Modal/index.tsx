"use client";
import { Dialog } from "@headlessui/react";
import React, { useCallback } from "react";
import XMarkIcon from "@/public/icons/cencel.svg";
import { useRouter } from "next/navigation";

type Props = {
	children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
	const router = useRouter();

	const onDismiss = useCallback(() => {
		router.back();
	}, [router]);

	return (
		<Dialog as="div" open className="fixed inset-0 z-50" onClose={onDismiss}>
			<div className="fixed inset-0 hidden bg-black/20 backdrop-blur-md transition-opacity md:block" />

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
					<Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
						<div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-md">
							<button
								type="button"
								className="absolute right-4 top-4 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
								onClick={onDismiss}
							>
								<span className="sr-only">Close Modal button</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>

							{children}
						</div>
					</Dialog.Panel>
				</div>
			</div>
		</Dialog>
	);
};

export default Modal;
