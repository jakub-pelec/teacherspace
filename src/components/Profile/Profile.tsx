import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useSnackbar } from "notistack";
import { removeUserProperties } from "../../actions/actions";
import {
	Wrapper,
	Logo,
	LogoWrapper,
	Grid,
	InfoSection,
	Information,
	Label,
	ListElement,
	ContentWrapper,
	AddMoreButton,
	ButtonWrapper,
} from "./Elements";
import { Helmet } from "react-helmet";
import { AppState } from "../../typings/redux";
import { useTranslation } from "react-i18next";
import { Button } from "../../shared/components/Button/Button";
import AddPropertyComponent from "./AddPropery";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	userData: UserData;
	removeUserPropertiesProps: any;
}

const Profile: React.FC<IProps> = ({ userData: { firstName, lastName, email, classes, subjects }, topLevelHistory, removeUserPropertiesProps }) => {
	const [addClassOpen, toggleAddClass] = useState<boolean>(false);
	const [addSubjectOpen, toggleAddSubject] = useState<boolean>(false);
	const { enqueueSnackbar } = useSnackbar();
	const { t } = useTranslation();

	const removeProperty = async (value: string, type: "class" | "subject") => {
		const reducedOptions = type === "class" ? classes.filter((el) => el.value !== value) : subjects.filter((el) => el.value !== value);
		const successCallback = () => {
			enqueueSnackbar(t("snackbar.success.removeUserProp", { property: type === "class" ? "Class" : "Subject" }), { variant: "success" });
		};
		const errorCallback = () => {
			enqueueSnackbar(t("snackbar.errors.default"), { variant: "error" });
		};
		const finalCallback = () => {};
		removeUserPropertiesProps(reducedOptions, type, { successCallback, errorCallback, finalCallback });
	};

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
									classes.map(({ label, value }: Option, index: number) => {
										return (
											<ListElement key={index}>
												{label}
												<ButtonWrapper>
													<Button onClick={() => removeProperty(value, "class")}>
														<DeleteIcon />
													</Button>
												</ButtonWrapper>
											</ListElement>
										);
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
									subjects.map(({ label, value }: Option, index: number) => {
										return (
											<ListElement key={index}>
												{label}{" "}
												<ButtonWrapper>
													<Button onClick={() => removeProperty(value, "subject")}>
														<DeleteIcon />
													</Button>
												</ButtonWrapper>
											</ListElement>
										);
									})
								) : (
									<ListElement>{t("profilePage.noSubjects")}</ListElement>
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

export default connect(mapStateToProps, { removeUserPropertiesProps: removeUserProperties })(Profile);
