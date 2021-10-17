import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { NoteType } from "../../typings/wysiwyg";
import draftToHtml from "draftjs-to-html";

interface IProps {
	note: FirestoreDocumentDataWithId<NoteType>;
	open: boolean;
	setShowNote: Dispatch<SetStateAction<FirestoreDocumentDataWithId<NoteType> | undefined>>;
}

const ShowNoteView: React.FC<IProps> = ({ note, open, setShowNote }) => {
	const { title, subject, classes, content } = note;
	return (
		<NoteView open={open}>
			<Title>{title}</Title>
			<Subject>{subject}</Subject>
			<ClassesWrapper>
				{classes?.length
					? classes.map(({ label }: Option) => {
							return <Class>{label}</Class>;
					  })
					: ""}
			</ClassesWrapper>
			<Content dangerouslySetInnerHTML={{ __html: draftToHtml(content) }} />
			<ExitButton role="button" onClick={() => setShowNote(undefined)}>
				x
			</ExitButton>
		</NoteView>
	);
};

interface StyledProps {
	open: boolean;
}

export const NoteView = styled.div<StyledProps>`
	visibility: ${({ open }) => (open ? "visable" : "hidden")};
	transform: scale(${({ open }) => (open ? 1 : 0)});
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.background};
	height: 80%;
	width: 40%;
	border-radius: 1em;
	padding: 1em;
	overflow: hidden;
`;

export const Title = styled.h1``;
export const Subject = styled.h2`
	margin-bottom: 0.5em;
`;
export const ClassesWrapper = styled.div`
	display: flex;
	max-width: 15em;
	margin-bottom: 0.5em;
`;
export const Class = styled.div`
	font-size: 1em;
	font-weight: bold;
	border: 2px solid ${({ theme }) => theme.infoBorder};
	background-color: ${({ theme }) => theme.infoBg};
	width: fit-content;
	padding: 0.2em 0.5em;
	border-radius: 1em;
	max-width: 15em;
`;

export const Content = styled.div`
	font-size: 2em;
	max-width: 100%;
	max-height: 80%;
	overflow-y: auto;
`;

export const ExitButton = styled.div`
	position: absolute;
	top: 0;
	right: 0.5em;
	font-weight: bold;
	font-size: 2em;
	&:hover {
		cursor: pointer;
	}
`;

export default ShowNoteView;
