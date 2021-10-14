import React, { useState } from "react";
import { useTheme } from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { NavBar, Logo, OptionWrapper, NavOption, Label, ExpandButton, StyledLink } from "./Elements";
import { Link } from "react-router-dom";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const NavigationBar = () => {
	const [expanded, setExpanded] = useState<boolean>(false);
	const theme: any = useTheme();
	return (
		<NavBar expanded={expanded}>
			<Logo />
			<OptionWrapper>
				<StyledLink to="home">
					<NavOption>
						<Link to="/home">
							<HomeIcon fontSize="large" htmlColor={theme.background} />
						</Link>
						<Label expanded={expanded}>Home</Label>
					</NavOption>
				</StyledLink>

				<StyledLink to="/profile">
					<NavOption>
						<Link to="/profile">
							<AssignmentIndIcon fontSize="large" htmlColor={theme.background} />
						</Link>
						<Label expanded={expanded}>Profile</Label>
					</NavOption>
				</StyledLink>
				<StyledLink to="/notes">
					<NavOption>
						<Link to="/notes">
							<NoteAltIcon fontSize="large" htmlColor={theme.background} />
						</Link>
						<Label expanded={expanded}>Notes</Label>
					</NavOption>
				</StyledLink>
			</OptionWrapper>
			<NavOption>
				<Link to="/dashboard">
					<ExitToAppIcon fontSize="large" htmlColor={theme.background} />
				</Link>
				<Label expanded={expanded}>Logout</Label>
			</NavOption>
			<ExpandButton expanded={expanded} onClick={() => setExpanded((prevState) => !prevState)}>
				<ArrowBackIosNewIcon htmlColor={expanded ? theme.primary : theme.background} />
			</ExpandButton>
		</NavBar>
	);
};

export default NavigationBar;
