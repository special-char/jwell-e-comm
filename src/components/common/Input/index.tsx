import React, { forwardRef, memo } from "react";
import style from "./input.module.css";
import clsx from "clsx";

type Props = {
	name: string;
	color?: "white";
	className?: string;
	wrapperClassName?: string;
	label?: string;
} & (
	| (React.InputHTMLAttributes<HTMLInputElement> & {
			as?: "input";
	  })
	| (React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
			as?: "textarea";
	  })
);
const Input = ({
	as: As = "input",
	name,
	color,
	label,
	wrapperClassName,
	className,
	...props
}: Props) => {
	return (
		<div className={clsx([style.inputGroup, wrapperClassName])}>
			{label && (
				<label
					htmlFor={name}
					className={clsx(style.label, {
						[style.label_required]: props.required,
					})}
				>
					{label}
				</label>
			)}
			<As
				className={clsx("peer/input", {
					[className || ""]: !!className,
				})}
				name={name}
				{...props}
			/>
		</div>
	);
};

export default memo(Input);
