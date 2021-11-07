import React from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import Select from "../../shared/components/Select/Select";
import { languageOptions } from "../../constants/options";
import { useTranslation } from "react-i18next";
import FeaturesList from "./FeaturesList";

import {
	PageWrapper,
	Navbar,
	Section,
	Header,
	HeaderContainer,
	Subheader,
	Button,
	ButtonContainer,
	SelectContainer,
	ContactUs,
	Block,
} from "./Elements";

interface IProps extends RouteComponentProps {}

const LandingPage: React.FC<IProps> = ({ history: { push } }) => {
	const { i18n, t } = useTranslation();
	const initialLang = localStorage.getItem("i18nextLng");
	const handleLanguageChange = (payload: any) => {
		i18n.changeLanguage(payload.value);
		localStorage.setItem("i18nextLng", payload.value);
	};
	return (
		<>
			<Helmet>
				<title>Teacherspace</title>
			</Helmet>
			<PageWrapper>
				<Navbar>
					<ButtonContainer>
						<Button onClick={() => push("/login")}>{t("landingPage.login")}</Button>
					</ButtonContainer>
					<ButtonContainer>
						<Button onClick={() => push("/register")}>{t("landingPage.register")}</Button>
					</ButtonContainer>
					<SelectContainer>
						<Select
							options={languageOptions}
							onChange={handleLanguageChange}
							placeholder="Language"
							defaultValue={{ label: initialLang?.toUpperCase() || "EN", value: initialLang || "en" }}
						/>
					</SelectContainer>
				</Navbar>
				<Section row>
					<HeaderContainer>
						<Header>{t("landingPage.section1.header")}</Header>
						<Subheader>{t("landingPage.section1.subheader")}</Subheader>
					</HeaderContainer>
					<img
						src="data:image/jpeg;base64,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"
						alt="teacher"
					/>
				</Section>
				<Section row>
					<HeaderContainer>
						<Header>{t("landingPage.section2.header")}</Header>
						<Subheader>{t("landingPage.section2.subheader")}</Subheader>
					</HeaderContainer>
				</Section>
				<Section column>
					<Header>{t("landingPage.section3.header")}</Header>
					<Subheader>{t("landingPage.section3.subheader")}</Subheader>
					<FeaturesList />
				</Section>
				<Section column colored>
					<Header>{t("landingPage.contactSection.header")}</Header>
					<Subheader>{t("landingPage.contactSection.subheader")}</Subheader>
					<ContactUs>
						<Block>
							{t("landingPage.contactSection.blocks.mail")} <a href="mailto:kuba1pelec@gmail.com">kuba1pelec@gmail.com</a>
						</Block>
					</ContactUs>
				</Section>
			</PageWrapper>
		</>
	);
};

export default LandingPage;
