import React, { useEffect, useState } from "react";
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
	FilterButton,
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
import { Button } from "../../shared/components/Button/Button";

interface IProps {
	topLevelHistory: ReturnType<typeof useHistory>;
	notes: FirestoreDocumentDataWithId<NoteType>[];
	userData: UserData;
}

interface IFilters {
	title: (n: NoteType) => boolean;
	subject: (n: NoteType) => boolean;
	classes: (n: NoteType) => boolean;
}

const Notes: React.FC<IProps> = ({ topLevelHistory, notes, userData }) => {
	const { t } = useTranslation();
	const [filters, setFilters] = useState<IFilters>({
		title: () => true,
		subject: () => true,
		classes: () => true,
	});
	const [filteredNotes, setFilteredNotes] = useState<FirestoreDocumentDataWithId<NoteType>[]>(notes);
	const [showNote, setShowNote] = useState<FirestoreDocumentDataWithId<NoteType>>();
	const [newContent, setNewContent] = useState(showNote?.content);

	const [presentationMode, togglePresentationMode] = useState<boolean>(false);
	const [addNoteView, setAddNoteView] = useState<boolean>(false);

	useEffect(() => {
		const ffNotes = notes.filter(filters.title).filter(filters.subject).filter(filters.classes);
		setFilteredNotes(ffNotes);
	}, [filters, notes]);

	const handlePresentationOpen = () => {
		togglePresentationMode(true);
	};

	const handleClose = () => {
		togglePresentationMode(false);
	};

	return (
		<>
			<Helmet>
				<title>{t("notesPage.pageHelmet")}</title>
			</Helmet>
			<Wrapper>
				<h1>{t("notesPage.title")}</h1>
				<FilterOptions>
					<FilterOption>
						{t("notesPage.fieldTitle")}
						<TextField
							placeholder={t("notesPage.inputPlaceholder")}
							onChange={({ target: { value } }) =>
								setFilters({
									...filters,
									title: (note) =>
										note.title.toLowerCase().includes(value.toLowerCase().trim()) ||
										note.title.toLowerCase().replace(/\s/g, "").includes(value.toLowerCase().trim()),
								})
							}
						/>
					</FilterOption>
					<FilterOption>
						{t("notesPage.subjectSelect")}
						<Select
							options={userData.subjects}
							onChange={(option) => {
								setFilters({ ...filters, subject: (note) => note.subject.value === (option as Option).value });
							}}
						></Select>
					</FilterOption>
					<FilterOption>
						{t("notesPage.classSelect")}
						<Select
							options={userData.classes}
							onChange={(option) => {
								setFilters({ ...filters, classes: (note) => note.classes?.some((s) => s.value === (option as Option).value) });
							}}
						></Select>
					</FilterOption>
					<FilterButton>
						<Button
							type="reset"
							onClick={() => {
								setFilteredNotes(notes);
								setFilters({ title: () => true, subject: () => true, classes: () => true });
							}}
						>
							{t("notesPage.clearButton")}
						</Button>
					</FilterButton>
				</FilterOptions>
				<ScrollContainer>
					<CardGrid>
						{/* @ts-ignore */}
						<Row title key="main">
							<Title>{t("notesPage.titleField")}</Title>
							<Subject>{t("notesPage.subjectField")}</Subject>
							<ClassesWrapper>{t("notesPage.classesField")}</ClassesWrapper>
							<DateContainer>{t("notesPage.dateModified")}</DateContainer>
						</Row>
						{filteredNotes.map((noteProps: FirestoreDocumentDataWithId<NoteType>) => (
							<NoteComponent {...noteProps} setShowNote={setShowNote} />
						))}
					</CardGrid>
				</ScrollContainer>
				<AddButton onClick={() => setAddNoteView(!addNoteView)}>
					<AddIcon fontSize="large" />
				</AddButton>
				{addNoteView && <AddNoteView addNoteView={addNoteView} setAddNoteView={setAddNoteView} />}
				{showNote?.id && (
					<ShowNoteView
						note={showNote}
						open={!!showNote?.id}
						setShowNote={setShowNote}
						setNewContent={setNewContent}
						handlePresentationOpen={handlePresentationOpen}
						onChange={(value: RawDraftContentState) => setNewContent(value)}
						content={(newContent || showNote?.content) as RawDraftContentState}
					/>
				)}
				{presentationMode && (
					<PresentationView
						html={draftToHtml((newContent || showNote!.content) as RawDraftContentState)}
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
