import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Wrapper, Logo, LogoWrapper, Grid, InfoSection, Information, Label, ListElement, ContentWrapper, AddMoreButton } from "./Elements";
import { Helmet } from "react-helmet";
import { AppState } from "../../typings/redux";
import { useTranslation } from "react-i18next";
import AddPropertyComponent from "./AddPropery";
import AddIcon from "@mui/icons-material/Add";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	userData: UserData;
}

const Profile: React.FC<IProps> = ({ userData: { firstName, lastName, email, classes, subjects }, topLevelHistory }) => {
	const [addClassOpen, toggleAddClass] = useState<boolean>(false);
	const [addSubjectOpen, toggleAddSubject] = useState<boolean>(false);
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
							<Label>{t("profilePage.classes")}</Label>
							<AddMoreButton onClick={() => toggleAddClass(true)}>
								<AddIcon />
							</AddMoreButton>
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
							<Label>{t("profilePage.subjects")}</Label>
							<AddMoreButton onClick={() => toggleAddSubject(true)}>
								<AddIcon />
							</AddMoreButton>
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
				{addClassOpen && (
					<AddPropertyComponent
						title="Add classes"
						open={addClassOpen}
						toggleModal={toggleAddClass}
						type="class"
						firestoreValues={classes}
					/>
				)}
				{addSubjectOpen && (
					<AddPropertyComponent
						title="Add subjects"
						open={addSubjectOpen}
						toggleModal={toggleAddSubject}
						type="subject"
						firestoreValues={subjects}
					/>
				)}
			</Wrapper>
		</>
	);
};

const mapStateToProps = (state: AppState) => ({
	userData: state.fetch.userData,
});

export default connect(mapStateToProps)(Profile);
