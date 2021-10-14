import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import styled from "styled-components";

interface IProps {
	auth: any;
}

const Profile: React.FC<IProps> = ({ auth }) => {
	const [userInfo, setUserInfo] = useState<any>({});
	const { firestoreID } = auth;

	useEffect(() => {
		const fetchData = async () => {
			const docRef = doc(firestore, "users", firestoreID);
			const docSnap = await getDoc(docRef);
			setUserInfo(docSnap.data());
		};
		fetchData();
	}, [setUserInfo, firestoreID]);

	return (
		<Wrapper>
			<LogoWrapper>
				<Logo></Logo>
			</LogoWrapper>
			<Grid>
				<InfoSection>
					<Label>Name</Label>
					<Information>{`${userInfo.firstName} ${userInfo.lastName}`}</Information>
				</InfoSection>

				<InfoSection>
					<Label>Email</Label>
					<Information>{userInfo.email}</Information>
				</InfoSection>
				<InfoSection>
					<Label>Classes</Label>
					<Information>
						{userInfo.classes
							? userInfo.classes.map((el: any) => {
									return <div>{el.label}</div>;
							  })
							: ""}
					</Information>
				</InfoSection>
				<InfoSection>
					<Label>Subjects</Label>
					<Information>
						{userInfo.subjects
							? userInfo.subjects.map((el: any) => {
									return <div>{el.label}</div>;
							  })
							: ""}
					</Information>
				</InfoSection>
			</Grid>
		</Wrapper>
	);
};

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2em;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Logo = styled.div`
	height: 7rem;
	width: 7rem;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.primary};
`;

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 4em;
`;

const Label = styled.div`
	font-size: 1rem;
	padding-left: 0.5em;
	padding-bottom: 0.5em;
`;
const Information = styled.div`
	border-radius: 1em;
	border: 1px solid ${({ theme }) => theme.infoBorder};
	background-color: ${({ theme }) => theme.infoBg};
	width: fit-content;
	padding: 1em;
	min-width: 20rem;
`;

const InfoSection = styled.div`
	margin-bottom: 3em;
`;

const mapStateToProps = (state: any) => {
	return { auth: state.auth };
};

export default connect(mapStateToProps, {})(Profile);
