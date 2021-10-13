import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextInput from "../../shared/form-components/FormTextField/FormTextField";
import { Button } from "../../shared/components/Button/Button";
import { Wrapper, FormField, FormContainer, Title } from "./Elements";
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
			<FormContainer>
				<Title>Register</Title>
				<form onSubmit={handleSubmit(submitHandler)}>
					<FormField>
						<FormTextInput name="firstName" label="First name" control={control} />
					</FormField>
					<FormField>
						<FormTextInput name="lastName" label="Last name" control={control} />
					</FormField>
					<FormField>
						<FormTextInput name="email" label="Email address" control={control} />
					</FormField>
					<FormField>
						<FormTextInput name="password" label="Password" control={control} inputProps={{ type: "password" }} />
					</FormField>
					<FormField>
						<FormTextInput name="confirmPassword" label="Confirm password" control={control} inputProps={{ type: "password" }} />
					</FormField>
					<Button type="submit">Register</Button>
				</form>
			</FormContainer>
		</Wrapper>
	);
};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, { registerProps: register })(RegisterPage);
