import React from "react";
import { Button as MuiButton, ButtonProps } from "@material-ui/core";

interface IProps extends ButtonProps {
	children: React.ReactNode;
}

export const Button: React.FC<IProps> = (props) => {
	return <MuiButton {...props}>{props.children}</MuiButton>;
};
