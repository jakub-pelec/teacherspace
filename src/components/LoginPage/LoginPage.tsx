import React from "react";
import { connect } from "react-redux";
import { Button } from "../../shared/components/Button/Button";
import { changeTheme } from "../../actions/actions";
import { useForm, Controller } from "react-hook-form";

import { PageWrapper, ContentColumn, FormField, FormWrapper } from "./Elements";
import { TextField } from "../../shared/components/TextInput/TextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/loginSchema";

interface IProps {
	changeThemeProps: typeof changeTheme;
	theme: "light" | "dark";
}

const LoginPage: React.FC<IProps> = ({ changeThemeProps, theme }) => {
	const { control, handleSubmit } = useForm({ resolver: yupResolver(loginSchema) });

	const submitHandler = (a: any) => {
		//TODO: LOGIN LOGIC
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
						<Button type="submit">Login</Button>
					</FormField>
				</FormWrapper>
			</ContentColumn>
			<ContentColumn>
				<div>hello world</div>
			</ContentColumn>
		</PageWrapper>
	);
};

const mapStateToProps = (state: any) => ({
	theme: state.theme.theme,
});

export default connect(mapStateToProps, { changeThemeProps: changeTheme })(LoginPage);
