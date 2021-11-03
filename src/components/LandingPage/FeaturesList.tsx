import React from "react";
import {
	FeaturesTable,
	FeaturesTableHeader,
	FeaturesTableItem,
	FeaturesTableCellTitle,
	FeaturesTableCellStatus,
	FeaturesTableCellDescription,
} from "./Elements";

import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';

type FeatureStatus = "ready" | "in-progress" | "future-plan";

interface Feature {
	title: string;
	description: string;
	status: FeatureStatus;
}

const features: Feature[] = [
	{
		title: "notes",
		description: "Create rich-text notes for your students. You can add, edit or delete them anytime, anywhere! Simple as that.",
		status: "ready",
	},
	{
		title: "presentation mode",
		description:
			"Do you want to give a presentation for your students? No problem. Simply choose the note and you can easily display it's content for the viewers",
		status: "ready",
	},
	{
		title: "languages",
		description: "Currently supported languages: Polish and English",
		status: "ready",
	},
	{
		title: "classes",
		description: "Do you teach many classes at the same time? You can assign given note to the class to find it easier earlier!",
		status: "ready",
	},
	{
		title: "lesson subjects",
		description: "Select which subjects are you teaching during signup stage. You can always update them in your profile page!",
		status: "ready",
	},
	{
		title: "account",
		description: "Sign-in with your personal account to which only you have access",
		status: "ready",
	},
	{
		title: "images",
		description: "Do you want to include images in your note to make them more appealing? You will be able to do this!",
		status: "in-progress",
	},
	{
		title: "emails",
		description: "Do you want to send given note to your students via email? Nothing simpler than that!",
		status: "in-progress",
	},
	{
		title: "student accounts",
		description:
			'We are going to provide separate "Student" account, which you will be able to join one of your classes and get access to all of class related notes!',
		status: "future-plan",
	},
	{
		title: "homeworks",
		description:
			'We are planning on adding "Homeworks" section for your students, so you can plan them before the lesson and even mark the in the app! How cool is that!',
		status: "future-plan",
	},
];

const FeaturesList = () => {
    const getStatusIcon = (status: FeatureStatus) => {
        if(status === 'ready') return <CheckIcon htmlColor="#0e8c00" />
        if(status === 'in-progress') return <AccessTimeIcon htmlColor="#F6725E" />
        return <CloseIcon htmlColor="#8c0000" />
    }
	return (
		<FeaturesTable>
			<FeaturesTableHeader>
				<FeaturesTableCellTitle>Name</FeaturesTableCellTitle>
				<FeaturesTableCellDescription>Description</FeaturesTableCellDescription>
				<FeaturesTableCellStatus>Status</FeaturesTableCellStatus>
			</FeaturesTableHeader>
			{features.map((feature) => (
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
