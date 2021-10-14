import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "../../shared/components/Button/Button";
import { changeTheme } from "../../actions/actions";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";
import { login } from "../../actions/actions";
import FieldWithLabel from "../../shared/form-components/FieldWithLabel/FieldWithLabel";
import { useTranslation } from "react-i18next";
import { CircularProgress } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import { PageWrapper, ContentColumnRight, ContentColumnLeft, FormField, Title, ColumnWrapper, Background } from "./Elements";

interface IProps {
	changeThemeProps: any;
	loginProps: any;
	theme: "light" | "dark";
	history?: any;
}

const LoginPage: React.FC<IProps> = ({ changeThemeProps, theme, loginProps, history }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { enqueueSnackbar } = useSnackbar();
	const { t } = useTranslation();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginSchema) });

	const submitHandler = (loginData: Credentials) => {
		setIsLoading(true);
		const successCallback = () => {
			enqueueSnackbar("Logged in!", { variant: "success" });
			history.push("/dashboard");
		};
		const errorCallback = () => {
			enqueueSnackbar("Something went wrong! Please try again.", { variant: "error" });
		};
		const finalCallback = () => {
			setIsLoading(false);
		};
		loginProps({ ...loginData, successCallback, errorCallback, finalCallback });
	};
	return (
		<PageWrapper>
			<ColumnWrapper>
				<ContentColumnLeft>
					<Background />
				</ContentColumnLeft>
				<ContentColumnRight>
					<Title>Let's get started</Title>
					<form onSubmit={handleSubmit(submitHandler)}>
						<FormField>
							<FieldWithLabel
								name="email"
								control={control}
								defaultValue=""
								label="Email address"
								errorMessage={errors.email?.message}
							/>
						</FormField>
						<FormField>
							<FieldWithLabel
								name="password"
								control={control}
								defaultValue=""
								label="Password"
								errorMessage={errors.password?.message}
								inputProps={{ type: "password" }}
							/>
						</FormField>
						<FormField>
							<Button type="submit" disabled={isLoading}>
								{isLoading ? <CircularProgress size={23} /> : "Login"}
							</Button>
						</FormField>
					</form>
				</ContentColumnRight>
			</ColumnWrapper>
		</PageWrapper>
	);
};

const mapStateToProps = (state: any) => ({
	theme: state.theme.theme,
});

export default withRouter(connect(mapStateToProps, { changeThemeProps: changeTheme, loginProps: login })(LoginPage));
