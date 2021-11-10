import React from "react";
import {
	FeaturesTable,
	FeaturesTableHeader,
	FeaturesTableItem,
	FeaturesTableCellTitle,
	FeaturesTableCellStatus,
	FeaturesTableCellDescription,
} from "./Elements";

import CheckIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";

type FeatureStatus = "ready" | "in-progress" | "future-plan";

interface Feature {
	title: string;
	description: string;
	status: FeatureStatus;
}

const FeaturesList = () => {
	const { t } = useTranslation();
	const getStatusIcon = (status: FeatureStatus) => {
		if (status === "ready") return <CheckIcon htmlColor="#0e8c00" />;
		if (status === "in-progress") return <AccessTimeIcon htmlColor="#F6725E" />;
		return <CloseIcon htmlColor="#8c0000" />;
	};
	return (
		<FeaturesTable>
			<FeaturesTableHeader>
				<FeaturesTableCellTitle>Name</FeaturesTableCellTitle>
				<FeaturesTableCellDescription>Description</FeaturesTableCellDescription>
				<FeaturesTableCellStatus>Status</FeaturesTableCellStatus>
			</FeaturesTableHeader>
			{(t("landingPage.features", { returnObjects: true }) as Feature[]).map((feature) => (
				<FeaturesTableItem>
					<FeaturesTableCellTitle status={feature.status}>{feature.title.toUpperCase()}</FeaturesTableCellTitle>
					<FeaturesTableCellDescription>{feature.description}</FeaturesTableCellDescription>
					<FeaturesTableCellStatus status={feature.status}>{getStatusIcon(feature.status)}</FeaturesTableCellStatus>
				</FeaturesTableItem>
			))}
		</FeaturesTable>
	);
};

export default FeaturesList;
