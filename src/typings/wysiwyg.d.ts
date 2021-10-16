import { RawDraftContentState } from 'draft-js';

interface NoteType {
	content: RawDraftContentState;
	title: string;
	classes: Class[];
	subject: Subject;
}
