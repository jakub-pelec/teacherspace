import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextInput from "../../shared/form-components/FormTextField/FormTextField";
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
					<FormTextInput name="firstName" control={control} />
				</FormField>
				<FormField>
					<FormTextInput name="lastName" control={control} />
				</FormField>
				<FormField>
					<FormTextInput name="email" control={control} />
				</FormField>
				<FormField>
					<FormTextInput name="password" control={control} inputProps={{ type: "password" }} />
				</FormField>
				<FormField>
					<FormTextInput name="confirmPassword" control={control} inputProps={{ type: "password" }} />
				</FormField>
				<Button type="submit">Register</Button>
			</form>
		</Wrapper>
	);
};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, { registerProps: register })(RegisterPage);
