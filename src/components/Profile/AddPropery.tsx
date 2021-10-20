import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "../../shared/components/Modal/Modal";
import { classOptions, subjectOptions } from "../../constants/options";
import CreatableSelect from "../../shared/components/CreatableSelect/CreatableSelect";
import { updateUserProperties } from "../../actions/actions";

import { AddPropertyWrapper, AddPropertyButton, CloseModal, AddPropertyContentWrapper, Title } from "./Elements";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

interface IProps {
	open: boolean;
	title: string;
	toggleModal: (s: boolean) => void;
	type: "class" | "subject";
	firestoreValues: Option[];
	updateUserPropertiesProps: (p: Option[], type: "class" | "subject", callbacks: PromiseCallback) => void;
}

const AddPropertyComponent: React.FC<IProps> = ({ open, title, toggleModal, type, firestoreValues, updateUserPropertiesProps }) => {
	const { t } = useTranslation();
	const { enqueueSnackbar } = useSnackbar();
	const optionsToUse = type === "class" ? classOptions : subjectOptions;
	const options = optionsToUse.filter((option) => firestoreValues.findIndex((el) => el.value === option.value) === -1);
	const [newProps, setNewProps] = useState<Option[]>([]);
	const handleSubmit = () => {
		const optionsToSave = newProps.map(({ value, label }: Option) => ({
			value,
			label,
		}));
		const successCallback = () => {
			enqueueSnackbar(t("snackbar.success.updateUserProp", { property: type === "class" ? "Classes" : "Subjects" }), { variant: "success" });
			toggleModal(false);
		};
		const errorCallback = () => {
			enqueueSnackbar(t("snackbar.errors.default"), { variant: "error" });
		};
		const finalCallback = () => {};
		updateUserPropertiesProps(optionsToSave, type, { successCallback, errorCallback, finalCallback });
	};
	return (
		<Modal open={open}>
			<AddPropertyWrapper>
				<CloseModal onClick={() => toggleModal(false)}>X</CloseModal>
				<AddPropertyContentWrapper>
					<Title>{title}</Title>
					<CreatableSelect options={options} onChange={(o: Option[]) => setNewProps([...o])} />
					<AddPropertyButton onClick={handleSubmit}>Save</AddPropertyButton>
				</AddPropertyContentWrapper>
			</AddPropertyWrapper>
		</Modal>
	);
};

export default connect(null, { updateUserPropertiesProps: updateUserProperties })(AddPropertyComponent);
