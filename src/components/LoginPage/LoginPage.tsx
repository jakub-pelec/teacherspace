import React from "react";
import { connect } from "react-redux";
import { Button } from "../../shared/components/Button/Button";
import { changeTheme } from "../../actions/actions";
import { useForm, Controller } from "react-hook-form";
import { useSnackbar } from "notistack";
import { PageWrapper, ContentColumnRight, ContentColumnLeft, FormField, Title, FormWrapper, ColumnWrapper } from "./Elements";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";
import { login } from "../../actions/actions";
import FormTextField from "../../shared/form-components/FormTextField/FormTextField";

interface IProps {
	changeThemeProps: any;
	loginProps: any;
	theme: "light" | "dark";
}

const LoginPage: React.FC<IProps> = ({ changeThemeProps, theme, loginProps }) => {
	const { enqueueSnackbar } = useSnackbar();
	const { control, handleSubmit } = useForm({ resolver: yupResolver(loginSchema) });

	const submitHandler = (loginData: Credentials) => {
		loginProps({ ...loginData, enqueueSnackbar });
	};
	return (
		<PageWrapper>
			<ColumnWrapper>
				<ContentColumnLeft>
					<div>hello world</div>
				</ContentColumnLeft>
				<ContentColumnRight>
					<FormWrapper onSubmit={handleSubmit(submitHandler)}>
						<Title>Get's started</Title>
						<FormField>
							<FormTextField name="email" control={control} defaultValue="" label={"Email address"} />
						</FormField>
						<FormField>
							<FormTextField name="password" control={control} defaultValue="" label={"Password"} inputProps={{ type: "password" }} />
						</FormField>
						<FormField>
							<Button type="submit">Login</Button>
						</FormField>
					</FormWrapper>
				</ContentColumnRight>
			</ColumnWrapper>
		</PageWrapper>
	);
};

const mapStateToProps = (state: any) => ({
	theme: state.theme.theme,
});

export default connect(mapStateToProps, { changeThemeProps: changeTheme, loginProps: login })(LoginPage);
