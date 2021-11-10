import React from "react";
import moment from "moment";
import { NoteType } from "../../typings/wysiwyg";
import { Row, Title, Subject, ClassesWrapper, DateContainer, Class } from "./Elements";

interface IProps {
	id: string;
	setShowNote: (s: FirestoreDocumentDataWithId<NoteType> | undefined) => void;
	title: string;
	classes: Option[];
	content: any;
	dateModified: number;
	subject: Subject;
}

const NoteComponent: React.FC<IProps> = ({ id, title, subject, classes, content, dateModified, setShowNote }) => {
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
		</Row>
	);
};

export default NoteComponent;
