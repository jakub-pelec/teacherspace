import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/actions";
import { useTheme } from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { NavBar, Logo, OptionWrapper, NavOption, Label, ExpandButton, StyledLink, LogOut } from "./Elements";
import { Link } from "react-router-dom";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useSnackbar } from "notistack";

interface IProps {
	logoutProps: any;
	topLevelHistory: ReturnType<typeof useHistory>;
}

const NavigationBar: React.FC<IProps> = ({ logoutProps, topLevelHistory }) => {
	const [expanded, setExpanded] = useState<boolean>(false);
	const { enqueueSnackbar } = useSnackbar();
	const theme: any = useTheme();
	const handleLogout = () => {
		const successCallback = () => {
			enqueueSnackbar("Bye bye!", { variant: "success" });
			topLevelHistory.push("/");
		};
		const errorCallback = () => {
			enqueueSnackbar("Something went wrong. Please try again!", { variant: "error" });
		};
		const finalCallback = () => {};
		logoutProps({ successCallback, errorCallback, finalCallback });
	};
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
				<LogOut role="button" onClick={() => handleLogout()}>
					<ExitToAppIcon fontSize="large" htmlColor={theme.background} />
				</LogOut>
				<Label expanded={expanded}>Logout</Label>
			</NavOption>
			<ExpandButton expanded={expanded} onClick={() => setExpanded((prevState) => !prevState)}>
				<ArrowBackIosNewIcon htmlColor={expanded ? theme.primary : theme.background} />
			</ExpandButton>
		</NavBar>
	);
};

export default connect(null, { logoutProps: logout })(NavigationBar);
