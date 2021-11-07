import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import AddNoteView from "../AddNoteView/AddNoteView";
import {
	Wrapper,
	Row,
	Title,
	Subject,
	ClassesWrapper,
	AddButton,
	CardGrid,
	ScrollContainer,
	DateContainer,
	FilterOptions,
	FilterOption,
} from "./Elements";
import { Helmet } from "react-helmet";
import { AppState } from "../../typings/redux";
import { NoteType } from "../../typings/wysiwyg";
import ShowNoteView from "../ShowNoteView/ShowNoteView";
import NoteComponent from "./Note";
import draftToHtml from "draftjs-to-html";
import PresentationView from "../PresentationView/PresentationView";
import { RawDraftContentState } from "draft-js";
import { useTranslation } from "react-i18next";
import { TextField } from "../../shared/components/TextInput/TextInput";
import Select from "../../shared/components/Select/Select";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	notes: FirestoreDocumentDataWithId<NoteType>[];
	userData: UserData;
}

interface IfilterOptions {
	title: string | undefined;
	subject: string | undefined;
	className: string | undefined;
}

const Notes: React.FC<IProps> = ({ topLevelHistory, notes, userData }) => {
	const { t } = useTranslation();
	const [addNoteView, setAddNoteView] = useState<boolean>(false);
	const [showNote, setShowNote] = useState<FirestoreDocumentDataWithId<NoteType>>();
	const [presentationMode, togglePresentationMode] = useState<boolean>(false);
	const [newContent, setNewContent] = useState(showNote?.content);
	const [filteredNotes, setFilteredNotes] = useState<FirestoreDocumentDataWithId<NoteType>[] | undefined>(undefined);
	const [filterOptions, setFilterOptions] = useState<IfilterOptions>({
		title: undefined,
		subject: undefined,
		className: undefined,
	});

	const subjects = userData.subjects.map((el) => el);
	const classes = userData.classes.map((el) => el);

	const handlePresentationOpen = () => {
		togglePresentationMode(true);
	};

	const handleClose = () => {
		togglePresentationMode(false);
	};

	const filter = () => {
		const defaultState = notes;
		const { title, subject, className } = filterOptions;
		let tempNotes = notes;

		if (title?.trim() === "" || (title === undefined && subject === undefined && className === undefined)) {
			setFilteredNotes(undefined);
		}

		// eslint-disable-next-line array-callback-return
		tempNotes = tempNotes.filter((note: FirestoreDocumentDataWithId<NoteType>) => {
			if (title === undefined) {
				return note;
			} else if (
				note.title.toLowerCase().includes(title.toLowerCase().trim()) ||
				note.title.toLowerCase().replace(/\s/g, "").includes(title.toLowerCase().trim())
			) {
				return note;
			}
		});

		// eslint-disable-next-line array-callback-return
		tempNotes = tempNotes.filter((note: FirestoreDocumentDataWithId<NoteType>) => {
			if (subject === undefined) {
				return note;
			} else if (note.subject.label === subject) {
				return note;
			}
		});

		// eslint-disable-next-line array-callback-return
		tempNotes = tempNotes.filter((note: FirestoreDocumentDataWithId<NoteType>) => {
			if (className === undefined) {
				return note;
			} else if (note.classes.map((el) => el.label === className)) {
				return note;
			}
		});
		console.log(tempNotes);
		setFilteredNotes(tempNotes);
	};

	const filterByTitle = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const search = event.target.value || undefined;
		setFilterOptions({ ...filterOptions, title: search });
		filter();
	};

	const filterBySubject = (option: any) => {
		setFilterOptions({ ...filterOptions, subject: option.label });
		filter();
	};

	const filterByClass = (option: any) => {
		setFilterOptions({ ...filterOptions, className: option.label });
		filter();
	};

	return (
		<>
			<Helmet>
				<title>Teacherspace - Notes</title>
			</Helmet>
			<Wrapper>
				<h1>{t("notesPage.title")}</h1>
				<FilterOptions>
					<FilterOption>
						Title:
						<TextField placeholder="Search by title" onChange={(event) => filterByTitle(event)} />
					</FilterOption>
					<FilterOption>
						Subject:
						<Select options={subjects} onChange={(option) => filterBySubject(option)}></Select>
					</FilterOption>
					<FilterOption>
						Class:
						<Select options={classes} onChange={(option) => filterByClass(option)}></Select>
					</FilterOption>
				</FilterOptions>
				<ScrollContainer>
					<CardGrid>
						{/* @ts-ignore */}
						<Row title>
							<Title>{t("notesPage.titleField")}</Title>
							<Subject>{t("notesPage.subjectField")}</Subject>
							<ClassesWrapper>{t("notesPage.classesField")}</ClassesWrapper>
							<DateContainer>{t("notesPage.dateModified")}</DateContainer>
						</Row>
						{filteredNotes
							? filteredNotes.map((noteProps: FirestoreDocumentDataWithId<NoteType>) => (
									<NoteComponent {...noteProps} setShowNote={setShowNote} />
							  ))
							: notes.map((noteProps: FirestoreDocumentDataWithId<NoteType>) => (
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
						onChange={(value: RawDraftContentState) => setNewContent(value)}
						content={(newContent || showNote?.content) as RawDraftContentState}
					/>
				)}
				{presentationMode && (
					<PresentationView
						html={draftToHtml(newContent as RawDraftContentState)}
						title={showNote?.title as string}
						handleClose={handleClose}
					/>
				)}
			</Wrapper>
		</>
	);
};

const mapStateToProps = (state: AppState) => {
	return { notes: state.fetch.notes, userData: state.fetch.userData };
};

export default connect(mapStateToProps)(Notes);
