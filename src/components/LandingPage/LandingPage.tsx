import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Helmet } from "react-helmet";
import Select from "../../shared/components/Select/Select";
import { languageOptions } from "../../constants/options";
import { useTranslation } from "react-i18next";
import FeaturesList from "./FeaturesList";
import book from "../../assets/book.svg";

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
	ImageWrapper
} from "./Elements";

interface IProps extends RouteComponentProps {}

const LandingPage: React.FC<IProps> = ({ history: { push } }) => {
	const { i18n, t } = useTranslation();
	const [heights, setHeights] = useState<number[]>([]);
	const [navbarStyle, setNavbarStyle] = useState<boolean>(true);
	const initialLang = localStorage.getItem("i18nextLng");
	const handleLanguageChange = (payload: any) => {
		i18n.changeLanguage(payload.value);
		localStorage.setItem("i18nextLng", payload.value);
	};

	const calculateSections = () => {
		const sections = Array.from(document.querySelectorAll("section") || []);
		const heights = sections.map((section) => section.getBoundingClientRect().top + window.scrollY);
		setHeights(heights);
	};

	const scrollListener = () => {
		const scrollPos = window.scrollY;
		if (scrollPos > heights[0] && scrollPos < heights[1] && !navbarStyle) {
			setNavbarStyle(true);
		}

		if (scrollPos > heights[1] && scrollPos < heights[2] && navbarStyle) {
			setNavbarStyle(false);
		}

		if (scrollPos > heights[2] && scrollPos < heights[3] && !navbarStyle) {
			setNavbarStyle(true);
		}

		if (scrollPos > heights[3] && navbarStyle) {
			setNavbarStyle(false);
		}
	};

	useEffect(() => {
		calculateSections();
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", scrollListener);
		return () => window.removeEventListener("scroll", scrollListener);
	});
	return (
		<>
			<Helmet>
				<title>Teacherspace</title>
			</Helmet>
			<PageWrapper>
				<Navbar orange={navbarStyle}>
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
					<ImageWrapper>
						<img src={book} alt="book" />
					</ImageWrapper>
				</Section>
				<Section row>
					<HeaderContainer>
						<Header>{t("landingPage.section2.header")}</Header>
						<Subheader>{t("landingPage.section2.subheader")}</Subheader>
					</HeaderContainer>
				</Section>
				<Section column>
					<HeaderContainer>
						<Header>{t("landingPage.section3.header")}</Header>
						<Subheader>{t("landingPage.section3.subheader")}</Subheader>
					</HeaderContainer>
					<FeaturesList />
				</Section>
				<Section column colored>
					<HeaderContainer>
						<Header>{t("landingPage.contactSection.header")}</Header>
						<Subheader>{t("landingPage.contactSection.subheader")}</Subheader>
					</HeaderContainer>
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
