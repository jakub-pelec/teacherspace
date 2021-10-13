import React from "react";
import { StandardTextFieldProps } from "@material-ui/core";
import { StyledTextField } from "./Elements";

interface IProps extends StandardTextFieldProps {}

export const TextField: React.FC<IProps> = (props) => {
	return <StyledTextField variant="outlined" size="small" {...props} />;
};
