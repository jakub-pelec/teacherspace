import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import AddNoteView from "../AddNoteView/AddNoteView";
import { Wrapper, Card, Title, Subject, ClassesWrapper, Class, Note, AddButton, CardGrid, ScrollContainer } from "./Elements";
import { Helmet } from "react-helmet";
import draftToHtml from "draftjs-to-html";
import { AppState } from "../../typings/redux";
import { NoteType } from "../../typings/wysiwyg";
import ShowNoteView from "../ShowNoteView/ShowNoteView";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	notes: FirestoreDocumentDataWithId<NoteType>[];
}

const Notes: React.FC<IProps> = ({ topLevelHistory, notes }) => {
	const [addNoteView, setAddNoteView] = useState(false);
	const [showNote, setShowNote] = useState<FirestoreDocumentDataWithId<NoteType>>();

	return (
		<>
			<Helmet>
				<title>Teacherspace - Notes</title>
			</Helmet>
			<Wrapper>
				<h1>Notes</h1>
				<ScrollContainer>
					<CardGrid>
						{notes.map(({ id, title, subject, classes, content }: FirestoreDocumentDataWithId<NoteType>) => (
							<Card
								id={id}
								onClick={() => {
									setShowNote({ id, title, subject, classes, content });
								}}
							>
								<Title>{title}</Title>
								<Subject>{subject}</Subject>
								<ClassesWrapper>
									{classes?.length
										? classes.map(({ label }: Option) => {
												return <Class>{label}</Class>;
										  })
										: ""}
								</ClassesWrapper>
								<Note dangerouslySetInnerHTML={{ __html: draftToHtml(content) }} />
							</Card>
						))}
					</CardGrid>
				</ScrollContainer>
				<AddButton onClick={() => setAddNoteView((prevState) => !prevState)}>
					<AddIcon fontSize="large" />
				</AddButton>
				{addNoteView && <AddNoteView addNoteView={addNoteView} setAddNoteView={setAddNoteView} />}
				{showNote?.id && <ShowNoteView note={showNote} open={showNote?.id ? true : false} setShowNote={setShowNote} />}
			</Wrapper>
		</>
	);
};

const mapStateToProps = (state: AppState) => {
	return { notes: state.fetch.notes };
};

export default connect(mapStateToProps)(Notes);
