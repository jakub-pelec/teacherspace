import React from "react";
import { connect } from "react-redux";
import { Button } from "../../shared/components/Button/Button";
import { PageWrapper } from "./Elements";
import { changeTheme } from "../../actions/actions";

interface IProps {
	changeThemeProps: typeof changeTheme;
	theme: 'light' | 'dark';
}

const LoginPage: React.FC<IProps> = ({ changeThemeProps, theme }) => {
	return (
		<PageWrapper>
			<Button onClick={() => changeThemeProps(theme === "light" ? "dark" : "light")}>Siema</Button>
		</PageWrapper>
	);
};

const mapStateToProps = (state: any) => ({
	theme: state.theme.theme,
});

export default connect(mapStateToProps, { changeThemeProps: changeTheme })(LoginPage);
