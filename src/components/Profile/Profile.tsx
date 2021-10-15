import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../config/firebase";
import { Wrapper, Logo, LogoWrapper, Grid, InfoSection, Information, Label } from "./Elements";

interface IProps {
	auth: any;
	topLevelHistory: ReturnType<typeof useHistory>;
}

const Profile: React.FC<IProps> = ({ auth, topLevelHistory }) => {
	const [userInfo, setUserInfo] = useState<any>({});
	const { firestoreID } = auth;

	useEffect(() => {
		const fetchUserData = async () => {
			const userData = (await getDoc(doc(firestore, "users", firestoreID))).data();
			setUserInfo(userData);
		};
		fetchUserData();
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

const mapStateToProps = (state: any) => {
	return { auth: state.auth };
};

export default connect(mapStateToProps, {})(Profile);
