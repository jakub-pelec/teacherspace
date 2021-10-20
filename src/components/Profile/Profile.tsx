import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Wrapper, Logo, LogoWrapper, Grid, InfoSection, Information, Label, ListElement, ContentWrapper, AddMoreButton } from "./Elements";
import { Helmet } from "react-helmet";
import { AppState } from "../../typings/redux";
import { useTranslation } from "react-i18next";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	userData: UserData;
}

const Profile: React.FC<IProps> = ({ userData: { firstName, lastName, email, classes, subjects }, topLevelHistory }) => {
	const { t } = useTranslation();
	return (
		<>
			<Helmet>
				<title>Teacherspace - Profile</title>
			</Helmet>
			<Wrapper>
				<ContentWrapper>
					<LogoWrapper>
						<Logo>
							{firstName[0]}
							{lastName[0]}
						</Logo>
					</LogoWrapper>
					<Grid>
						<InfoSection>
							<Label>{t("profilePage.name")}</Label>
							<Information>{`${firstName} ${lastName}`}</Information>
						</InfoSection>

						<InfoSection>
							<Label>{t("profilePage.email")}</Label>
							<Information>{email}</Information>
						</InfoSection>
						<InfoSection>
							<AddMoreButton>+</AddMoreButton>
							<Label>{t("profilePage.classes")}</Label>
							<Information>
								{classes.length ? (
									classes.map(({ label }: Option, index: number) => {
										return <ListElement key={index}>{label}</ListElement>;
									})
								) : (
									<ListElement>{t("profilePage.noClasses")}</ListElement>
								)}
							</Information>
						</InfoSection>
						<InfoSection>
							<AddMoreButton>+</AddMoreButton>
							<Label>{t("profilePage.subjects")}</Label>
							<Information>
								{subjects.length ? (
									subjects.map(({ label }: Option, index: number) => {
										return <ListElement key={index}>{label}</ListElement>;
									})
								) : (
									<div>{t("profilePage.noSubjects")}</div>
								)}
							</Information>
						</InfoSection>
					</Grid>
				</ContentWrapper>
			</Wrapper>
		</>
	);
};

const mapStateToProps = (state: AppState) => ({
	userData: state.fetch.userData,
});

export default connect(mapStateToProps)(Profile);
