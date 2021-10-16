import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Wrapper, Logo, LogoWrapper, Grid, InfoSection, Information, Label, ListElement } from "./Elements";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	userData: UserData;
}

const Profile: React.FC<IProps> = ({ userData: { firstName, lastName, email, classes, subjects }, topLevelHistory }) => {
	return (
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
							classes.map((el: any) => {
								return <ListElement>{el.label}</ListElement>;
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
							subjects.map((el: any) => {
								return <ListElement>{el.label}</ListElement>;
							})
						) : (
							<div>No subjects to display. Please add at least 1 subject.</div>
						)}
					</Information>
				</InfoSection>
			</Grid>
		</Wrapper>
	);
};

const mapStateToProps = (state: any) => ({
	userData: state.auth.firestoreID,
});

export default connect(mapStateToProps)(Profile);
