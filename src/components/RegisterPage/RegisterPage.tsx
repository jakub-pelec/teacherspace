import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FieldWithLabel from "../../shared/form-components/FieldWithLabel/FieldWithLabel";
import { Button } from "../../shared/components/Button/Button";
import { Wrapper, FormField, FormContainer, Title, FullNameContainer, ContentColumnRight, ContentColumnLeft, Background } from "./Elements";
import { registerSchema } from "../../schemas/registerSchema";
import { useSnackbar } from "notistack";
import { register } from "../../actions/actions";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@material-ui/core";

interface IProps {
	registerProps: any;
}

const RegisterPage: React.FC<IProps> = ({ registerProps }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { t } = useTranslation();
	const { enqueueSnackbar } = useSnackbar();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(registerSchema) });
	const submitHandler = (formData: any) => {
		const { firstName, lastName, email, password } = formData;
		setIsLoading(true);
		registerProps({ firstName, lastName, email, password, enqueueSnackbar, disableLoading: setIsLoading });
	};
	return (
		<Wrapper>
			<FormContainer>
				<ContentColumnLeft>
					<Title>Register</Title>
					<form onSubmit={handleSubmit(submitHandler)}>
						<FullNameContainer>
							<FormField>
								<FieldWithLabel name="firstName" label="First name" control={control} errorMessage={errors.firstName?.message} />
							</FormField>
							<FormField>
								<FieldWithLabel name="lastName" label="Last name" control={control} errorMessage={errors.lastName?.message} />
							</FormField>
						</FullNameContainer>
						<FormField>
							<FieldWithLabel name="email" label="Email address" control={control} errorMessage={errors.email?.message} />
						</FormField>
						<FormField>
							<FieldWithLabel
								name="password"
								label="Password"
								control={control}
								inputProps={{ type: "password" }}
								errorMessage={errors.password?.message}
							/>
						</FormField>
						<FormField>
							<FieldWithLabel
								name="confirmPassword"
								label="Confirm password"
								control={control}
								inputProps={{ type: "password" }}
								errorMessage={errors.confirmPassword?.message}
							/>
						</FormField>
						<Button type="submit" disabled={isLoading}>
							{isLoading ? <CircularProgress size={23} /> : "Login"}
						</Button>
					</form>
				</ContentColumnLeft>
				<ContentColumnRight><Background /></ContentColumnRight>
			</FormContainer>
		</Wrapper>
	);
};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, { registerProps: register })(RegisterPage);
