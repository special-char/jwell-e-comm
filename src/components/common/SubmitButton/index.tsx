"use client";
import { useFormStatus } from "react-dom";
import Button from "../Button";

type Props = {
	children: React.ReactNode;
};

const SubmitButton = ({ children, ...props }: Props) => {
	const { pending } = useFormStatus();
	return (
		<Button {...props} aria-disabled={pending} disabled={pending}>
			{pending ? "Loading..." : children}
		</Button>
	);
};

export default SubmitButton;
