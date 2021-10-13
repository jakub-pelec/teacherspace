import React from "react";
import { connect } from "react-redux";
import { Button } from "../../shared/components/Button/Button";
import { changeTheme } from "../../actions/actions";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";

import { PageWrapper, ContentColumn, FormField, FormWrapper } from "./Elements";
import { TextField } from "../../shared/components/TextInput/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";
import { login } from "../../actions/actions";
import { useTranslation } from "react-i18next";

interface IProps {
	changeThemeProps: any;
	loginProps: any;
	theme: "light" | "dark";
}

const LoginPage: React.FC<IProps> = ({ changeThemeProps, theme, loginProps }) => {
	const { enqueueSnackbar } = useSnackbar();
	const { t } = useTranslation();
	const { control, handleSubmit } = useForm({ resolver: yupResolver(loginSchema) });

	const submitHandler = (loginData: Credentials) => {
		loginProps({ ...loginData, enqueueSnackbar });
	};
	return (
		<PageWrapper>
			<ContentColumn>
				<FormWrapper onSubmit={handleSubmit(submitHandler)}>
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
						<Button type="submit">{t("login")}</Button>
					</FormField>
				</FormWrapper>
			</ContentColumn>
			<ContentColumn>
				<div>{t("hello_world")}</div>
			</ContentColumn>
		</PageWrapper>
	);
};

const mapStateToProps = (state: any) => ({
	theme: state.theme.theme,
});

export default connect(mapStateToProps, { changeThemeProps: changeTheme, loginProps: login })(LoginPage);
