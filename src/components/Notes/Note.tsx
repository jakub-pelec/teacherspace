import React from "react";
import moment from "moment";
import { useSnackbar } from "notistack";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { NoteType } from "../../typings/wysiwyg";
import { deleteNote } from "../../actions/actions";
import { Row, Title, Subject, ClassesWrapper, DateContainer, Class, ButtonWrapper } from "./Elements";
import { Button } from "../../shared/components/Button/Button";
import DeleteIcon from "@mui/icons-material/Delete";

interface IProps {
	id: string;
	setShowNote: (s: FirestoreDocumentDataWithId<NoteType>) => void;
	title: string;
	classes: Option[];
	content: any;
	dateModified: number;
	subject: Subject;
	deleteNoteProps: any;
}

const NoteComponent: React.FC<IProps> = ({ id, title, subject, classes, content, dateModified, setShowNote, deleteNoteProps }) => {
	const { t } = useTranslation();
	const { enqueueSnackbar } = useSnackbar();
	const deleteNote = async (id: string) => {
		const successCallback = () => {
			enqueueSnackbar(t("snackbar.success.removeNote"), { variant: "success" });
		};
		const errorCallback = () => {
			enqueueSnackbar(t("snackbar.errors.default"), { variant: "error" });
		};
		const finalCallback = () => {};
		deleteNoteProps(id, { successCallback, errorCallback, finalCallback });
	};

	const removeHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.stopPropagation();
		deleteNote(id);
	};

	return (
		<Row
			id={id}
			onClick={() => {
				setShowNote({ id, title, subject, classes, content, dateModified });
			}}
		>
			<Title>{title}</Title>
			<Subject>{subject.label}</Subject>
			<ClassesWrapper>
				{classes?.length
					? classes.map(({ label }: Option) => {
							return <Class>{label}</Class>;
					  })
					: ""}
			</ClassesWrapper>
			<DateContainer>{moment(dateModified).format("DD-MM-YYYY")}</DateContainer>
			<ButtonWrapper>
				<Button onClick={removeHandler}>
					<DeleteIcon />
				</Button>
			</ButtonWrapper>
		</Row>
	);
};

export default connect(null, { deleteNoteProps: deleteNote })(NoteComponent);
