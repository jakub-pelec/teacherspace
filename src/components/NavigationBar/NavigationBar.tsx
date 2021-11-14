import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/actions";
import { useTheme } from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { NavBar, Logo, OptionWrapper, NavOption, Label, ExpandButton, StyledLink, LogOut, Version, BottomWrapper, VersionWrapper } from "./Elements";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

interface IProps {
	logoutProps: any;
	topLevelHistory: ReturnType<typeof useHistory>;
}

const NavigationBar: React.FC<IProps> = ({ logoutProps, topLevelHistory }) => {
	const { t } = useTranslation();
	const [expanded, setExpanded] = useState<boolean>(false);
	const { enqueueSnackbar } = useSnackbar();
	const theme: any = useTheme();
	const handleLogout = () => {
		const successCallback = () => {
			enqueueSnackbar(t("snackbar.success.logout"), { variant: "success" });
			topLevelHistory.push("/");
		};
		const errorCallback = () => {
			enqueueSnackbar(t("snackbar.errors.default"), { variant: "error" });
		};
		const finalCallback = () => {};
		logoutProps({ successCallback, errorCallback, finalCallback });
	};
	return (
		<NavBar expanded={expanded}>
			<Logo />
			<OptionWrapper expanded={expanded}>
				<StyledLink to="home">
					<NavOption>
						<LogOut>
							<HomeIcon fontSize="large" htmlColor={theme.background} />
						</LogOut>
						<Label expanded={expanded}>{t("navBar.homePath")}</Label>
					</NavOption>
				</StyledLink>
				<StyledLink to="/profile">
					<NavOption>
						<LogOut>
							<AssignmentIndIcon fontSize="large" htmlColor={theme.background} />
						</LogOut>
						<Label expanded={expanded}>{t("navBar.profilePath")}</Label>
					</NavOption>
				</StyledLink>
				<StyledLink to="/notes">
					<NavOption>
						<LogOut>
							<NoteAltIcon fontSize="large" htmlColor={theme.background} />
						</LogOut>
						<Label expanded={expanded}>{t("navBar.notesPath")}</Label>
					</NavOption>
				</StyledLink>
			</OptionWrapper>
			<NavOption>
				<BottomWrapper>
					<LogOut role="button" onClick={() => handleLogout()}>
						<ExitToAppIcon fontSize="large" htmlColor={theme.background} />
					</LogOut>
					<Label expanded={expanded}>{t("navBar.logout")}</Label>
				</BottomWrapper>
			</NavOption>
			<VersionWrapper>
				<Version expanded={expanded}>{process.env.REACT_APP_VERSION}</Version>
			</VersionWrapper>

			<ExpandButton expanded={expanded} onClick={() => setExpanded((prevState) => !prevState)}>
				<ArrowBackIosNewIcon htmlColor={expanded ? theme.primary : theme.background} />
			</ExpandButton>
		</NavBar>
	);
};

export default connect(null, { logoutProps: logout })(NavigationBar);
