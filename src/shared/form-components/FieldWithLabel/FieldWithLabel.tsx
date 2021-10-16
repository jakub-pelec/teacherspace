import React from "react";
import FormTextField from "../FormTextField/FormTextField";
import { StandardTextFieldProps } from "@material-ui/core";
import { Control } from 'react-hook-form';

import { Label, ErrorMessage, FieldWrapper } from './Elements';

interface IProps {
	control: Control;
	name: string;
	inputProps?: StandardTextFieldProps;
	defaultValue?: string;
	label?: string;
    errorMessage?: string
}

const FieldWithLabel: React.FC<IProps> = ({ control, name, inputProps, defaultValue, label, errorMessage }) => {
	return (
		<FieldWrapper>
			<Label>{label || ''}</Label>
            <FormTextField name={name} control={control} inputProps={inputProps} defaultValue={defaultValue} errored={!!errorMessage}/>
            <ErrorMessage>{errorMessage || ''}</ErrorMessage>
		</FieldWrapper>
	);
};

export default FieldWithLabel;
