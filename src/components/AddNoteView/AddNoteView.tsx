import React from "react";
import { AddNoteView as AddNoteViewStyling, Label, OptionWrapper, ButtonWrapper } from "./Elements";
import FormTextField from "../../shared/form-components/FormTextField/FormTextField";
import FormSelectField from "../../shared/form-components/FormSelectField/FormSelectField";
import { Button as StyledButton } from "../../shared/components/Button/Button";
import { classOptions } from "../SignupSecondStage/options";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addNote } from "../../actions/actions";
import { AppState } from "../../typings/redux";

interface IProps {
	addNoteView: boolean;
	setAddNoteView: any;
	firestoreID: string;
}

const AddNoteView: React.FC<IProps> = ({ addNoteView, setAddNoteView, firestoreID }) => {
	const { control, handleSubmit } = useForm();
	const submitHandler = async (data: any) => {
		const classes = data.classes.map(({ label, value }: Option) => ({ label, value }));
		const note = { ...data, dateModified: Date.now(), classes };
		addNote(note, firestoreID);
		setAddNoteView((prevState: boolean) => !prevState);
	};

	return (
		<AddNoteViewStyling visable={addNoteView}>
			<form onSubmit={handleSubmit(submitHandler)}>
				<OptionWrapper>
					<Label>Title</Label>
					<FormTextField control={control} name="title" errored={false}></FormTextField>
				</OptionWrapper>
				<OptionWrapper>
					<Label>Subject</Label>
					<FormTextField control={control} name="subject" errored={false}></FormTextField>
				</OptionWrapper>
				<OptionWrapper>
					<Label>Classes</Label>
					<FormSelectField options={classOptions} control={control} name="classes" errored={false}></FormSelectField>
				</OptionWrapper>
				<OptionWrapper>
					<Label>Note</Label>
					<FormTextField control={control} name="content" errored={false}></FormTextField>
				</OptionWrapper>
				<ButtonWrapper>
					<StyledButton onClick={() => setAddNoteView((prevState: boolean) => !prevState)}>Cancel</StyledButton>
					<StyledButton type="submit">Add</StyledButton>
				</ButtonWrapper>
			</form>
		</AddNoteViewStyling>
	);
};
const mapStateToProps = (state: AppState) => {
	return {
		firestoreID: state.auth.firestoreID,
	};
};

export default connect(mapStateToProps)(AddNoteView);
