import React, { Dispatch, SetStateAction } from "react";
import { NoteType } from "../../typings/wysiwyg";
import draftToHtml from "draftjs-to-html";
import CloseIcon from "@mui/icons-material/Close";
import { NoteView, Title, Subject, ClassesWrapper, Class, Content, ExitButton } from "./Elements";
import FadeBackground from "../../shared/components/FadeBackground/FadeBackground";

interface IProps {
	note: FirestoreDocumentDataWithId<NoteType>;
	open: boolean;
	setShowNote: Dispatch<SetStateAction<FirestoreDocumentDataWithId<NoteType> | undefined>>;
}

const ShowNoteView: React.FC<IProps> = ({ note, open, setShowNote }) => {
	const { title, subject, classes, content } = note;

	return (
		<FadeBackground>
			<NoteView open={open}>
				<Title>{title}</Title>
				<Subject>Subject: {subject}</Subject>
				<ClassesWrapper>
					Classes:
					{classes?.length
						? classes.map(({ label }: Option) => {
								return <Class>{label}</Class>;
						  })
						: ""}
				</ClassesWrapper>
				<Content dangerouslySetInnerHTML={{ __html: draftToHtml(content) }} />
				<ExitButton role="button" onClick={() => setShowNote(undefined)}>
					<CloseIcon />
				</ExitButton>
			</NoteView>
		</FadeBackground>
	);
};

export default ShowNoteView;
