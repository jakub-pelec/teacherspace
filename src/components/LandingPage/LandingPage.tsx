import React from "react";
import { RouteComponentProps } from "react-router";
import { Button } from "../../shared/components/Button/Button";
import { Helmet } from "react-helmet";
import Select from "../../shared/components/Select/Select";
import { languageOptions } from "../../constants/options";
import { useTranslation } from "react-i18next";

import { Wrapper } from "./Elements";

interface IProps extends RouteComponentProps {}

const LandingPage: React.FC<IProps> = ({ history: { push } }) => {
	const { i18n, t } = useTranslation();
	const handleLanguageChange = (payload: any) => {
		i18n.changeLanguage(payload.value);
		localStorage.setItem("i18nextLng", payload.value);
	};
	return (
		<>
			<Helmet>
				<title>Teacherspace</title>
			</Helmet>
			<Wrapper>
				<Button onClick={() => push("/login")}>{t("landingPage.login")}</Button>
				<Button onClick={() => push("/register")}>{t("landingPage.register")}</Button>
				<Select options={languageOptions} onChange={handleLanguageChange} />
			</Wrapper>
		</>
	);
};

export default LandingPage;
