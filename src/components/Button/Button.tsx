import React, { ButtonHTMLAttributes, HTMLProps } from "react";
import "./Button.css";

export interface ButtonProps {
  sizeClass?: "small" | "medium" | "large";
  icon?: string;
}

const Button = (
  props: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { sizeClass, icon, ...extraProps } = props;

  return <button {...extraProps}></button>;
};

export default Button;
