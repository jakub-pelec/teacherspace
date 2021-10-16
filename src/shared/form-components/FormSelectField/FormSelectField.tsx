import React from "react";
import { Control, Controller } from "react-hook-form";
import CreatableSelect from "../../components/CreatableSelect/CreatableSelect";
import * as Select from 'react-select/creatable';

interface IProps extends Select.CreatableProps<any, any, any> {
	control: Control;
	name: string;
	errored: boolean;
	options: Option[];
}

const FormSelectField: React.FC<IProps> = ({ control, name, errored, options, placeholder }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, onBlur, value, ref } }) => (
				<CreatableSelect onChange={onChange} onBlur={onBlur} value={value} ref={ref} options={options} error={errored} placeholder={placeholder} />
			)}
		/>
	);
};

export default FormSelectField;
