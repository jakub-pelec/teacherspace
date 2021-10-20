import React from "react";
import { Control, Controller } from "react-hook-form";
import Wysiwyg from "../../components/ReactWysiwyg/ReactWysiwyg";

interface IProps {
	control: Control;
	name: string;
	errored: boolean;
	defaultValue?: string;
}

const FormWysiwyg: React.FC<IProps> = ({ control, name, defaultValue, errored }) => {
	return (
		<Controller
			name={name}
			control={control}
			defaultValue={defaultValue || ""}
			render={({ field: { onChange, onBlur, ref } }) => <Wysiwyg onChange={onChange} onBlur={onBlur} editorRef={ref} error={errored} />}
		/>
	);
};

export default FormWysiwyg;
