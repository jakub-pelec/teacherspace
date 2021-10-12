import React from "react";
import { ButtonProps } from '@material-ui/core';
import { StyledButton } from "./Elements";
interface IProps extends ButtonProps {
	children: string;
}

export const Button: React.FC<IProps> = (props) => {
	return <StyledButton {...props}>{props.children}</StyledButton>;
};
