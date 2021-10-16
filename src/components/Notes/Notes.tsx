import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import AddNoteView from "../AddNoteView/AddNoteView";
import { Wrapper, Card, Title, Subject, ClassesWrapper, Class, Note, AddButton, CardGrid, ScrollContainer } from "./Elements";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	notes: any;
}

const Notes: React.FC<IProps> = ({ topLevelHistory, notes }) => {
	const [addNoteView, setAddNoteView] = useState(false);

	return (
		<Wrapper>
			<h1>Notes</h1>
			<ScrollContainer>
				<CardGrid>
					{notes.map((note: any) => (
						<Card>
							<Title>{note.title}</Title>
							<Subject>{note.subject}</Subject>

							<ClassesWrapper>
								{note?.classes?.length
									? note.classes.map((el: any) => {
											return <Class>{el?.label}</Class>;
									  })
									: ""}
							</ClassesWrapper>

							<Note>{note.content}</Note>
						</Card>
					))}
				</CardGrid>
			</ScrollContainer>
			<AddButton onClick={() => setAddNoteView((prevState) => !prevState)}>
				<AddIcon fontSize="large" />
			</AddButton>
			{addNoteView && <AddNoteView addNoteView={addNoteView} setAddNoteView={setAddNoteView} />}
		</Wrapper>
	);
};

const mapStateToProps = (state: any) => {
	return { notes: state.fetch.notes };
};

export default connect(mapStateToProps)(Notes);
