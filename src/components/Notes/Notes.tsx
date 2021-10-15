import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

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

const mapStateToProps = () => {};

export default connect(mapStateToProps)(Notes);
