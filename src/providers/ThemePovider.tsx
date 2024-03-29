import React from "react";
import { ThemeProvider as ThemeProviderSC } from "styled-components";
import { connect } from "react-redux";
import { darkTheme } from "../theme/darkTheme";
import { lightTheme } from "../theme/lightTheme";
import { AppState } from "../typings/redux";

interface IProps {
	children: React.ReactNode;
	theme: "dark" | "light";
}

const ThemeProvider: React.FC<IProps> = ({ children, theme = "light" }) => {
	return <ThemeProviderSC theme={theme === "light" ? lightTheme : darkTheme}>{children}</ThemeProviderSC>;
};

const mapStateToProps = (state: AppState) => ({
	theme: state.theme.theme,
});

export default connect(mapStateToProps)(ThemeProvider);
