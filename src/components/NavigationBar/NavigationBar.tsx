import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { NavBar, Logo, OptionWrapper, NavOption, Label, ExpandButton } from "./Elements";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const NavigationBar = () => {
	const theme = useContext(ThemeContext);
	const [expanded, setExpanded] = useState<boolean>(false);
	return (
		<NavBar expanded={expanded}>
			<Logo />
			<OptionWrapper>
				<NavOption>
					<a href="/dashboard">
						<HomeIcon fontSize="large" htmlColor={theme.font} />
					</a>
					<Label expanded={expanded}>Home</Label>
				</NavOption>
				<NavOption>
					<a href="/dashboard">
						<AssignmentIndIcon fontSize="large" htmlColor={theme.font} />
					</a>
					<Label expanded={expanded}>Profile</Label>
				</NavOption>
				<NavOption>
					<a href="/dashboard">
						<NoteAltIcon fontSize="large" htmlColor={theme.font} />
					</a>
					<Label expanded={expanded}>Notes</Label>
				</NavOption>
			</OptionWrapper>
			<NavOption>
				<a href="/dashboard">
					<ExitToAppIcon fontSize="large" htmlColor={theme.font} />
				</a>
				<Label expanded={expanded}>Logout</Label>
			</NavOption>
			<ExpandButton expanded={expanded} onClick={() => setExpanded((prevState) => !prevState)}>
				<ArrowBackIosNewIcon />
			</ExpandButton>
		</NavBar>
	);
};

export default NavigationBar;
