import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FieldWithLabel from "../../shared/form-components/FieldWithLabel/FieldWithLabelAndError";
import { Button } from "../../shared/components/Button/Button";
import { Wrapper, FormField, FormContainer, Title, FullNameContainer, ContentColumnRight, ContentColumnLeft, Background } from "./Elements";
import { registerSchema } from "../../schemas/registerSchema";
import { useSnackbar } from "notistack";
import { saveSignupData } from "../../actions/actions";
import { useHistory } from "react-router";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import FormTextField from "../../shared/form-components/FormTextField/FormTextField";

interface IProps {
	saveSignupDataProps: typeof saveSignupData;
}

const RegisterPage: React.FC<IProps> = ({ saveSignupDataProps }) => {
	const { t } = useTranslation();
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
		enqueueSnackbar(t("snackbar.success.registerSecondStep"), { variant: "success" });
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
						<Title>{t("registerPage.title")}</Title>
						<form onSubmit={handleSubmit(submitHandler)}>
							<FullNameContainer>
								<FormField>
									<FieldWithLabel label={t("registerPage.firstName")} errorMessage={errors.firstName?.message}>
										<FormTextField
											name="firstName"
											control={control}
											defaultValue=""
											errored={Boolean(errors.firstName?.message)}
										/>
									</FieldWithLabel>
								</FormField>
								<FormField>
									<FieldWithLabel label={t("registerPage.lastName")} errorMessage={errors.lastName?.message}>
										<FormTextField
											name="lastName"
											control={control}
											defaultValue=""
											errored={Boolean(errors.lastName?.message)}
										/>
									</FieldWithLabel>
								</FormField>
							</FullNameContainer>
							<FormField>
								<FieldWithLabel label={t("registerPage.email")} errorMessage={errors.email?.message}>
									<FormTextField name="email" control={control} defaultValue="" errored={Boolean(errors.email?.message)} />
								</FieldWithLabel>
							</FormField>
							<FormField>
								<FieldWithLabel label={t("registerPage.password")} errorMessage={errors.password?.message}>
									<FormTextField
										name="password"
										control={control}
										defaultValue=""
										errored={Boolean(errors.password?.message)}
										inputProps={{ type: "password" }}
									/>
								</FieldWithLabel>
							</FormField>
							<FormField>
								<FieldWithLabel label={t("registerPage.confirmPassword")} errorMessage={errors.confirmPassword?.message}>
									<FormTextField
										inputProps={{ type: "password" }}
										name="confirmPassword"
										control={control}
										defaultValue=""
										errored={Boolean(errors.confirmPassword?.message)}
									/>
								</FieldWithLabel>
							</FormField>
							<Button type="submit">{t("registerPage.continue")}</Button>
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
