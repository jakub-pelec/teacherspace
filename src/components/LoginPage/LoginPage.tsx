import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Button } from "../../shared/components/Button/Button";
import { changeTheme } from "../../actions/actions";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";
import { login } from "../../actions/actions";
import FieldWithLabel from "../../shared/form-components/FieldWithLabel/FieldWithLabelAndError";
import { CircularProgress } from "@material-ui/core";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { PageWrapper, ContentColumnRight, ContentColumnLeft, FormField, Title, ColumnWrapper, Background } from "./Elements";
import { AppState } from "../../typings/redux";
import { useTranslation } from "react-i18next";
import FormTextField from "../../shared/form-components/FormTextField/FormTextField";

interface IProps extends RouteComponentProps {
	changeThemeProps: any;
	loginProps: any;
	theme: "light" | "dark";
}

const LoginPage: React.FC<IProps> = ({ changeThemeProps, theme, loginProps, history }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { t } = useTranslation();
	const { enqueueSnackbar } = useSnackbar();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginSchema) });

	const submitHandler = (loginData: Credentials) => {
		setIsLoading(true);
		const successCallback = () => {
			enqueueSnackbar(t("snackbar.success.login"), { variant: "success" });
			history.push("/dashboard");
		};
		const errorCallback = () => {
			enqueueSnackbar(t("snackbar.errors.default"), { variant: "error" });
		};
		const finalCallback = () => {
			setIsLoading(false);
		};
		loginProps({ ...loginData, successCallback, errorCallback, finalCallback });
	};
	return (
		<>
			<Helmet>
				<title>Teacherspace - Login</title>
			</Helmet>
			<PageWrapper>
				<ColumnWrapper>
					<ContentColumnLeft>
						<Background />
					</ContentColumnLeft>
					<ContentColumnRight>
						<Title>{t("loginPage.title")}</Title>
						<form onSubmit={handleSubmit(submitHandler)}>
							<FormField>
								<FieldWithLabel label={t("loginPage.email")} errorMessage={errors.email?.message}>
									<FormTextField name="email" control={control} defaultValue="" errored={Boolean(errors.email?.message)} />
								</FieldWithLabel>
							</FormField>
							<FormField>
								<FieldWithLabel label={t("loginPage.password")} errorMessage={errors.password?.message}>
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
								<Button type="submit" disabled={isLoading}>
									{isLoading ? <CircularProgress size={23} /> : t("loginPage.login")}
								</Button>
							</FormField>
						</form>
					</ContentColumnRight>
				</ColumnWrapper>
			</PageWrapper>
		</>
	);
};

const mapStateToProps = (state: AppState) => ({
	theme: state.theme.theme,
});

export default withRouter(connect(mapStateToProps, { changeThemeProps: changeTheme, loginProps: login })(LoginPage));
