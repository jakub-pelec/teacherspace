import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Wrapper, Logo, LogoWrapper, Grid, InfoSection, Information, Label, ListElement } from "./Elements";
import { Helmet } from "react-helmet";
import { AppState } from "../../typings/redux";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	userData: UserData;
}

const Profile: React.FC<IProps> = ({ userData: { firstName, lastName, email, classes, subjects }, topLevelHistory }) => {
	return (
		<>
			<Helmet>
				<title>Teacherspace - Profile</title>
			</Helmet>
			<Wrapper>
				<LogoWrapper>
					<Logo>
						{firstName[0]}
						{lastName[0]}
					</Logo>
				</LogoWrapper>
				<Grid>
					<InfoSection>
						<Label>Name:</Label>
						<Information>{`${firstName} ${lastName}`}</Information>
					</InfoSection>

					<InfoSection>
						<Label>Email:</Label>
						<Information>{email}</Information>
					</InfoSection>
					<InfoSection>
						<Label>Classes:</Label>
						<Information>
							{classes.length ? (
								classes.map(({ label }: Option, index: number) => {
									return <ListElement key={index}>{label}</ListElement>;
								})
							) : (
								<ListElement>No classes to display. Please add at least 1 class.</ListElement>
							)}
						</Information>
					</InfoSection>
					<InfoSection>
						<Label>Subjects:</Label>
						<Information>
							{subjects.length ? (
								subjects.map(({ label }: Option, index: number) => {
									return <ListElement key={index}>{label}</ListElement>;
								})
							) : (
								<div>No subjects to display. Please add at least 1 subject.</div>
							)}
						</Information>
					</InfoSection>
				</Grid>
			</Wrapper>
		</>
	);
};

const mapStateToProps = (state: AppState) => ({
	userData: state.fetch.userData,
});

export default connect(mapStateToProps)(Profile);
