import React, { Dispatch, SetStateAction } from "react";
import { connect } from "react-redux";
import { NoteType } from "../../typings/wysiwyg";
import CloseIcon from "@mui/icons-material/Close";
import { NoteView, Title, Subject, ClassesWrapper, Class, ExitButton } from "./Elements";
import FadeBackground from "../../shared/components/FadeBackground/FadeBackground";
import ReacyWysiwyg from "../../shared/components/ReactWysiwyg/ReactWysiwyg";
import { Button } from "../../shared/components/Button/Button";
import { RawDraftContentState } from "draft-js";
import { updateNote } from "../../actions/actions";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

interface IProps {
	note: FirestoreDocumentDataWithId<NoteType>;
	open: boolean;
	setShowNote: Dispatch<SetStateAction<FirestoreDocumentDataWithId<NoteType> | undefined>>;
	updateNoteProps: any;
	handlePresentationOpen: () => void;
	onChange: (value: RawDraftContentState) => void;
	content: RawDraftContentState
}

const ShowNoteView: React.FC<IProps> = ({ note, open, setShowNote, updateNoteProps, handlePresentationOpen, onChange, content }) => {
	const { t } = useTranslation();
	const { title, subject, classes } = note;
	const { enqueueSnackbar } = useSnackbar();

	const handleSubmit = () => {
		const successCallback = () => {
			enqueueSnackbar(t('snackbar.success.updateNote'), { variant: "success" });
			setShowNote(undefined);
		};
		const errorCallback = () => {
			enqueueSnackbar(t('snackbar.errors.default'), { variant: "error" });
		};
		const finalCallback = () => {};
		updateNoteProps({ ...note, content }, { successCallback, errorCallback, finalCallback });
	};

	return (
		<FadeBackground>
			<NoteView open={open}>
				<Title>{title}</Title>
				<Subject>
					{t("showNoteView.subject")} {subject}
				</Subject>
				<ClassesWrapper>
					{t("showNoteView.classes")}
					{classes?.length
						? classes.map(({ label }: Option) => {
								return <Class>{label}</Class>;
						  })
						: ""}
				</ClassesWrapper>
				<ReacyWysiwyg initialContentState={content} onChange={onChange} />
				<ExitButton role="button" onClick={() => setShowNote(undefined)}>
					<CloseIcon />
				</ExitButton>
				<Button onClick={handleSubmit}>{t("showNoteView.save")}</Button>
				<Button onClick={handlePresentationOpen}>{t("showNoteView.present")}</Button>
			</NoteView>
		</FadeBackground>
	);
};

export default connect(null, { updateNoteProps: updateNote })(ShowNoteView);
