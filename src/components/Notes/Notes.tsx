import React from "react";
import { useHistory } from "react-router-dom";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
}

const Notes: React.FC<IProps> = ({ topLevelHistory }) => {
	return (
		<div>
			<h1>Notes</h1>
		</div>
	);
};

export default Notes;
