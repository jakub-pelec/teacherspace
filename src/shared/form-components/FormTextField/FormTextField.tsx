import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "../../components/TextInput/TextInput";
import { StandardTextFieldProps } from "@material-ui/core";

interface IProps {
	control: any;
	name: string;
	errored: boolean;
	inputProps?: StandardTextFieldProps;
	defaultValue?: string;
}

const FormTextField: React.FC<IProps> = ({ control, name, inputProps, defaultValue, errored }) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue || ""}
			render={({ field: { onChange, onBlur, value, ref } }) => (
				<TextField onChange={onChange} onBlur={onBlur} value={value} inputRef={ref} {...inputProps} error={errored} />
			)}
		/>
	);
};

export default FormTextField;
