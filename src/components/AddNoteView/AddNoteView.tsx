import React from "react";
import { AddNoteView as AddNoteViewStyling, Label, OptionWrapper, ButtonWrapper, Form, RowWrapper } from "./Elements";
import FormTextField from "../../shared/form-components/FormTextField/FormTextField";
import FormSelectField from "../../shared/form-components/FormSelectField/FormSelectField";
import { Button as StyledButton } from "../../shared/components/Button/Button";
import { classOptions } from "../SignupSecondStage/options";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { addNote } from "../../actions/actions";
import FadeBackground from "../../shared/components/FadeBackground/FadeBackground";
import { useSnackbar } from "notistack";
import FormWysiwyg from "../../shared/form-components/FormWysiwyg/FormWysiwyg";
import { useTranslation } from "react-i18next";

interface IProps {
	addNoteView: boolean;
	setAddNoteView: any;
	addNoteProps: any;
}

const AddNoteView: React.FC<IProps> = ({ addNoteView, setAddNoteView, addNoteProps }) => {
	const { t } = useTranslation();
	const { control, handleSubmit } = useForm();
	const { enqueueSnackbar } = useSnackbar();
	const submitHandler = async (data: any) => {
		const classes = data.classes.map(({ label, value }: Option) => ({ label, value }));
		const note = { ...data, dateModified: Date.now(), classes };
		const successCallback = () => {
			enqueueSnackbar(t('snackbar.success.addNote'), { variant: "success" });
		};
		const errorCallback = () => {
			enqueueSnackbar(t('snackbar.errors.default'), { variant: "error" });
		};
		const finalCallback = () => {};
		addNoteProps(note, { successCallback, errorCallback, finalCallback });
		setAddNoteView((prevState: boolean) => !prevState);
	};

	return (
		<FadeBackground>
			<AddNoteViewStyling visible={addNoteView}>
				<Form onSubmit={handleSubmit(submitHandler)}>
					<RowWrapper>
						<OptionWrapper>
							<Label>{t("addNoteView.title")}</Label>
							<FormTextField control={control} name="title" errored={false}></FormTextField>
						</OptionWrapper>
					</RowWrapper>
					<RowWrapper>
						<OptionWrapper>
							<Label>{t("addNoteView.subject")}</Label>
							<FormTextField control={control} name="subject" errored={false}></FormTextField>
						</OptionWrapper>
						<OptionWrapper>
							<Label>{t("addNoteView.classes")}</Label>
							<FormSelectField options={classOptions} control={control} name="classes" errored={false}></FormSelectField>
						</OptionWrapper>
					</RowWrapper>
					<RowWrapper editor>
						<OptionWrapper>
							<Label>{t("addNoteView.note")}</Label>
							<FormWysiwyg control={control} name="content" errored={false} />
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
		</FadeBackground>
	);
};

export default connect(null, { addNoteProps: addNote })(AddNoteView);
