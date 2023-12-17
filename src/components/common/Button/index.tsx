import React, { cloneElement, memo } from "react";
import clsx from "clsx";
import styles from "./button.module.css";

type Props = {
	prefix?: React.JSX.Element;
	suffix?: React.JSX.Element;
	className?: any;
	title?: string;
} & (
	| (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
	| (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" })
) &
	(
		| {
				variant?: "fill";
				color?: "green" | "yellow" | "black";
		  }
		| {
				variant?: "outlined";
				color?: "light" | "dark";
		  }
		| {
				variant?: "round";
				color?: "black" | "green";
		  }
		| {
				variant?: "icon";
		  }
	);

const Button = ({
	variant,
	color,
	prefix: Prefix,
	suffix: Suffix,
	as: As = "button",
	className,
	title,
	...props
}: Props) => {
	return (
		<As
			className={clsx(
				styles.btn,
				{
					[styles[`btn--fill`]]: variant === "fill",
					[styles[`btn--${variant}`]]: !!variant,
					[styles[`btn--${color}`]]: !!color,
				},
				className
			)}
			{...props}
		>
			{Prefix &&
				cloneElement(<Prefix />, {
					height: 24,
					width: 24,
				})}
			{props.children}
			{Suffix &&
				cloneElement(<Suffix />, {
					height: 24,
					width: 24,
				})}
			{title && <span className="sr-only">{title}</span>}
		</As>
	);
};

export default memo(Button);
