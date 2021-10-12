import React from "react";
import { TextField as MuiTextField, StandardTextFieldProps } from "@material-ui/core";

interface IProps extends StandardTextFieldProps {}

export const TextField: React.FC<IProps> = (props) => {
	return <MuiTextField {...props} />;
};
