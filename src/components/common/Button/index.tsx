import React, { cloneElement, memo } from "react";
import clsx from "clsx";
import Styles from "./button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  prefix?: React.JSX.Element;
  suffix?: React.JSX.Element;
  className?: any;
  title?: string;
  as?: any;
} & (
    | {
        variant?: "fill" | "round";
        color?: "green" | "yellow" | "black";
      }
    | {
        variant?: "outlined";
        color?: "light" | "dark";
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
        Styles.btn,
        {
          [Styles[`btn--fill`]]: variant === "fill",
          [Styles[`btn--${variant}`]]: !!variant,
          [Styles[`btn--${color}`]]: !!color,
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
      <span className="flex items-center justify-center ">
        {props.children}
      </span>
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
