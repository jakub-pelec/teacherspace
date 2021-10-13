import React from "react";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "../../shared/components/TextInput/TextInput";
import { Button } from "../../shared/components/Button/Button";
import { Wrapper, FormField } from "./Elements";
import { registerSchema } from "../../schemas/registerSchema";
import { useSnackbar } from "notistack";
import { register } from "../../actions/actions";

interface IProps {
	registerProps: any;
}

const RegisterPage: React.FC<IProps> = ({ registerProps }) => {
	const { enqueueSnackbar } = useSnackbar();
	const { control, handleSubmit } = useForm({ resolver: yupResolver(registerSchema) });
	const submitHandler = (formData: any) => {
		const { firstName, lastName, email, password } = formData;
		registerProps({ firstName, lastName, email, password, enqueueSnackbar });
	};
	return (
		<Wrapper>
			<form onSubmit={handleSubmit(submitHandler)}>
				<FormField>
					<Controller
						name="firstName"
						control={control}
						defaultValue=""
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<TextField onChange={onChange} onBlur={onBlur} value={value} inputRef={ref} />
						)}
					/>
				</FormField>
				<FormField>
					<Controller
						name="lastName"
						control={control}
						defaultValue=""
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<TextField onChange={onChange} onBlur={onBlur} value={value} inputRef={ref} />
						)}
					/>
				</FormField>
				<FormField>
					<Controller
						name="email"
						control={control}
						defaultValue=""
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<TextField onChange={onChange} onBlur={onBlur} value={value} inputRef={ref} />
						)}
					/>
				</FormField>
				<FormField>
					<Controller
						name="password"
						control={control}
						defaultValue=""
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<TextField onChange={onChange} onBlur={onBlur} value={value} inputRef={ref} type="password" />
						)}
					/>
				</FormField>
				<FormField>
					<Controller
						name="confirmPassword"
						control={control}
						defaultValue=""
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<TextField onChange={onChange} onBlur={onBlur} value={value} inputRef={ref} type="password" />
						)}
					/>
				</FormField>
				<Button type="submit">Register</Button>
			</form>
		</Wrapper>
	);
};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, { registerProps: register })(RegisterPage);
