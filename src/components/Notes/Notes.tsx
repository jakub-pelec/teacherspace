import React, { useState } from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import AddNoteView from "../AddNoteView/AddNoteView";
import { Wrapper, Row, Title, Subject, ClassesWrapper, Class, AddButton, CardGrid, ScrollContainer, DateContainer } from "./Elements";
import { Helmet } from "react-helmet";
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
						{/* @ts-ignore */}
						<Row title>
							<Title>Title:</Title>
							<Subject>Subject:</Subject>
							<ClassesWrapper>Classes:</ClassesWrapper>
							<DateContainer>Modified on:</DateContainer>
						</Row>
						{notes.map(({ id, title, subject, classes, content, dateModified }: FirestoreDocumentDataWithId<NoteType>) => (
							<Row
								id={id}
								onClick={() => {
									setShowNote({ id, title, subject, classes, content, dateModified });
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
								<DateContainer>{moment(dateModified).format("DD-MM-YYYY")}</DateContainer>
							</Row>
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
