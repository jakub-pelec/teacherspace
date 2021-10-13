import React from "react";
import { ButtonProps } from '@material-ui/core';
import { StyledButton } from "./Elements";
interface IProps extends ButtonProps {
	children: React.ReactNode;
}

export const Button: React.FC<IProps> = (props) => {
	return <StyledButton {...props}>{props.children}</StyledButton>;
};
