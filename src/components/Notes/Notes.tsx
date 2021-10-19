import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import AddNoteView from "../AddNoteView/AddNoteView";
import { Wrapper, Row, Title, Subject, ClassesWrapper, AddButton, CardGrid, ScrollContainer, DateContainer } from "./Elements";
import { Helmet } from "react-helmet";
import { AppState } from "../../typings/redux";
import { NoteType } from "../../typings/wysiwyg";
import ShowNoteView from "../ShowNoteView/ShowNoteView";
import NoteComponent from "./Note";
import draftToHtml from "draftjs-to-html";
import PresentationView from "../PresentationView/PresentationView";
import { RawDraftContentState } from "draft-js";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	notes: FirestoreDocumentDataWithId<NoteType>[];
}

const Notes: React.FC<IProps> = ({ topLevelHistory, notes }) => {
	const [addNoteView, setAddNoteView] = useState(false);
	const [showNote, setShowNote] = useState<FirestoreDocumentDataWithId<NoteType>>();
	const [presentationMode, togglePresentationMode] = useState<boolean>(false);

	const handlePresentationOpen = () => {
		togglePresentationMode(true);
	};

	const handleClose = () => {
		togglePresentationMode(false);
	};

	return (
		<>
			<Helmet>
				<title>Teacherspace - Notes</title>
			</Helmet>
			<Wrapper>
				<h1>Notes</h1>
				<ScrollContainer>
					<CardGrid>
						{/* @ts-ignore */}
						<Row title>
							<Title>Title:</Title>
							<Subject>Subject:</Subject>
							<ClassesWrapper>Classes:</ClassesWrapper>
							<DateContainer>Modified on:</DateContainer>
						</Row>
						{notes.map((noteProps: FirestoreDocumentDataWithId<NoteType>) => (
							<NoteComponent {...noteProps} setShowNote={setShowNote} />
						))}
					</CardGrid>
				</ScrollContainer>
				<AddButton onClick={() => setAddNoteView((prevState) => !prevState)}>
					<AddIcon fontSize="large" />
				</AddButton>
				{addNoteView && <AddNoteView addNoteView={addNoteView} setAddNoteView={setAddNoteView} />}
				{showNote?.id && (
					<ShowNoteView
						note={showNote}
						open={showNote?.id ? true : false}
						setShowNote={setShowNote}
						handlePresentationOpen={handlePresentationOpen}
					/>
				)}
				{presentationMode && (
					<PresentationView
						html={draftToHtml(showNote?.content as RawDraftContentState)}
						title={showNote?.title as string}
						handleClose={handleClose}
					/>
				)}
			</Wrapper>
		</>
	);
};

const mapStateToProps = (state: AppState) => {
	return { notes: state.fetch.notes };
};

export default connect(mapStateToProps)(Notes);
