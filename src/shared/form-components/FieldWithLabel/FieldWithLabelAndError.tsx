import React from "react";

import { Label, ErrorMessage, FieldWrapper } from "./Elements";

interface IProps {
	label: string;
	children: React.ReactElement;
	errorMessage?: string;
}

const FieldWithLabelAndError: React.FC<IProps> = ({ label, errorMessage, children }) => {
	return (
		<FieldWrapper>
			<Label>{label || ""}</Label>
			{children}
			<ErrorMessage>{errorMessage || ""}</ErrorMessage>
		</FieldWrapper>
	);
};

export default FieldWithLabelAndError;
