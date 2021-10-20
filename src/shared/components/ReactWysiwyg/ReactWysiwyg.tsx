import React from "react";
import { Editor, EditorProps } from "react-draft-wysiwyg";
import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface IProps extends EditorProps {
	error?: boolean;
}

const Wysiwyg: React.FC<IProps> = (props) => {
	return (
		<Editor
			toolbar={{
				options: [
					"inline",
					"blockType",
					"fontSize",
					"list",
					"textAlign",
					"colorPicker",
					"emoji",
					// "image",
				],
			}}
			editorStyle={styles.editorStyle}
			wrapperStyle={styles.wrapperStyle}
			toolbarStyle={styles.toolbarStyle}
			{...props}
		/>
	);
};

interface Styles {
	wrapperStyle: React.CSSProperties;
	editorStyle: React.CSSProperties;
	toolbarStyle: React.CSSProperties;
}

const styles: Styles = {
	wrapperStyle: {
		height: "90%",
		width: "100%",
	},
	editorStyle: {
		height: "90%",
		border: "1px solid #F6725E",
		backgroundColor: "#ffe4e0",
		padding: "0 20px",

		maxHeight: "60vh",
	},
	toolbarStyle: {
		border: "1px solid #F6725E",
	},
};

export default Wysiwyg;
