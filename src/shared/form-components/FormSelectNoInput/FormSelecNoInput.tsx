import React from "react";
import { Control, Controller } from "react-hook-form";
import SelectNoInput from "../../components/Select/Select";
import * as Select from "react-select/creatable";

interface IProps extends Select.CreatableProps<any, any, any> {
	control: Control;
	name: string;
	options: Option[];
}

const FormSelecNoInput: React.FC<IProps> = ({ control, name, options, placeholder }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value } }) => (
				<div>
					<SelectNoInput onChange={onChange} value={value} options={options} placeholder={placeholder} />
				</div>
			)}
		/>
	);
};

export default FormSelecNoInput;
