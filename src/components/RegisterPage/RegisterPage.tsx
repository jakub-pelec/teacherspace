import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FieldWithLabel from "../../shared/form-components/FieldWithLabel/FieldWithLabel";
import { Button } from "../../shared/components/Button/Button";
import { Wrapper, FormField, FormContainer, Title, FullNameContainer, ContentColumnRight, ContentColumnLeft, Background } from "./Elements";
import { registerSchema } from "../../schemas/registerSchema";
import { useSnackbar } from "notistack";
import { saveSignupData } from "../../actions/actions";
import { useHistory } from "react-router";
import { Helmet } from 'react-helmet'; 

interface IProps {
	saveSignupDataProps: typeof saveSignupData;
}

const RegisterPage: React.FC<IProps> = ({ saveSignupDataProps }) => {
	const { push } = useHistory();
	const { enqueueSnackbar } = useSnackbar();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(registerSchema) });

	const submitHandler = (formData: any) => {
		const { firstName, lastName, password, email } = formData;
		saveSignupDataProps({ firstName, lastName, password, email });
		enqueueSnackbar("Just one more step!", { variant: "success" });
		push("/second-stage");
	};
	return (
		<>
			<Helmet>
				<title>Teacherspace - Create account</title>
			</Helmet>
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
							<Button type="submit">Continue</Button>
						</form>
					</ContentColumnLeft>
					<ContentColumnRight>
						<Background />
					</ContentColumnRight>
				</FormContainer>
			</Wrapper>
		</>
	);
};

export default connect(null, { saveSignupDataProps: saveSignupData })(RegisterPage);
