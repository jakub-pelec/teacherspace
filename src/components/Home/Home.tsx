import React from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
}

const Home: React.FC<IProps> = ({ topLevelHistory }) => {
	const { t } = useTranslation();
	return (
		<>
			<Helmet>
				<title>Teacherspace - Home</title>
			</Helmet>
			<div>
				<h1>{t("homePage.title")}</h1>
			</div>
		</>
	);
};

export default Home;
