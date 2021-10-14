import React from "react";
import { useHistory } from "react-router-dom";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
}

const Profile: React.FC<IProps> = ({ topLevelHistory }) => {
	return (
		<div>
			<h1>Profile</h1>
		</div>
	);
};

export default Profile;
