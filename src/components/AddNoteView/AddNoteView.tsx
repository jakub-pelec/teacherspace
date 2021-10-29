import React from "react";
import { AddNoteView as AddNoteViewStyling, OptionWrapper, ButtonWrapper, Form, RowWrapper } from "./Elements";
import FormTextField from "../../shared/form-components/FormTextField/FormTextField";
import FormSelectField from "../../shared/form-components/FormSelectField/FormSelectField";
import { Button as StyledButton } from "../../shared/components/Button/Button";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addNote } from "../../actions/actions";
import Modal from "../../shared/components/Modal/Modal";

import { useSnackbar } from "notistack";
import FormWysiwyg from "../../shared/form-components/FormWysiwyg/FormWysiwyg";
import { useTranslation } from "react-i18next";
import { noteSchema } from "../../schemas/noteSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import FieldWithLabelAndError from "../../shared/form-components/FieldWithLabel/FieldWithLabelAndError";
import draftToHtml from "draftjs-to-html";
import { AppState } from "../../typings/redux";

interface IProps {
	addNoteView: boolean;
	setAddNoteView: any;
	addNoteProps: any;
	userData: UserData;
}

const AddNoteView: React.FC<IProps> = ({ addNoteView, setAddNoteView, addNoteProps, userData }) => {
	const { t } = useTranslation();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(noteSchema) });
	const { enqueueSnackbar } = useSnackbar();
	const submitHandler = async (data: any) => {
		const classes = data.classes.map(({ label, value }: Option) => ({ label, value }));
		const note = { ...data, dateModified: Date.now(), classes, content: draftToHtml(data.content) };
		const successCallback = () => {
			enqueueSnackbar(t("snackbar.success.addNote"), { variant: "success" });
		};
		const errorCallback = () => {
			enqueueSnackbar(t("snackbar.errors.default"), { variant: "error" });
		};
		const finalCallback = () => {};
		addNoteProps(note, { successCallback, errorCallback, finalCallback });
		setAddNoteView((prevState: boolean) => !prevState);
	};

	return (
		<Modal open={!!addNoteView}>
			<AddNoteViewStyling visible={addNoteView}>
				<Form onSubmit={handleSubmit(submitHandler)}>
					<RowWrapper>
						<OptionWrapper>
							<FieldWithLabelAndError label={t("addNoteView.title")} errorMessage={errors.title?.message}>
								<FormTextField control={control} name="title" errored={errors.title?.message}></FormTextField>
							</FieldWithLabelAndError>
						</OptionWrapper>
						<OptionWrapper>
							<FieldWithLabelAndError label={t("addNoteView.subject")} errorMessage={errors.subject?.message}>
								<FormTextField control={control} name="subject" errored={errors.subject?.message}></FormTextField>
							</FieldWithLabelAndError>
						</OptionWrapper>
						<OptionWrapper>
							<FieldWithLabelAndError label={t("addNoteView.classes")} errorMessage={errors.classes?.message}>
								<FormSelectField
									options={userData.classes}
									control={control}
									name="classes"
									errored={errors.classes?.message}
								></FormSelectField>
							</FieldWithLabelAndError>
						</OptionWrapper>
					</RowWrapper>
					<RowWrapper editor>
						<OptionWrapper>
							<FieldWithLabelAndError label={t("addNoteView.note")} errorMessage={errors.content?.message}>
								<FormWysiwyg control={control} name="content" errored={errors.content?.message} />
							</FieldWithLabelAndError>
						</OptionWrapper>
					</RowWrapper>
					<RowWrapper>
						<ButtonWrapper>
							<StyledButton onClick={() => setAddNoteView((prevState: boolean) => !prevState)}>{t("addNoteView.cancel")}</StyledButton>
							<StyledButton type="submit">{t("addNoteView.add")}</StyledButton>
						</ButtonWrapper>
					</RowWrapper>
				</Form>
			</AddNoteViewStyling>
		</Modal>
	);
};

const mapStateToProps = (state: AppState) => {
	return { userData: state.fetch.userData };
};

export default connect(mapStateToProps, { addNoteProps: addNote })(AddNoteView);
