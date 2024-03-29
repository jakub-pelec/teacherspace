import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

interface ExpandProps {
	expanded?: boolean;
}

export const StyledLink = styled(Link)`
	text-decoration: none;
`;

export const Label = styled.div<ExpandProps>`
	display: ${({ expanded }) => (expanded ? "block" : "none")};
	opacity: ${({ expanded }) => (expanded ? 1 : 0)};
	margin: 0 0.5rem;
	transition: all 0.3s ease-out;
	color: ${({ theme }) => theme.background};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
export const NavBar = styled.nav<ExpandProps>`
	position: relative;
	display: flex;
	flex-direction: column;
	height: calc(100% - 1em);
	width: ${({ expanded }) => (expanded ? "14em" : "6em")};
	background-color: ${({ theme }) => theme.primary};
	border-radius: 1em;
	padding: 1rem;
	margin: 0.5em;
	align-items: flex-start;
	justify-content: space-between;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
	transition: all 0.3s ease-out;
`;

export const Logo = styled.div`
	height: 3.5rem;
	width: 3.5rem;
	border-radius: 1em;
	background-color: ${({ theme }) => theme.background};
`;

export const OptionWrapper = styled.div<ExpandProps>`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: ${({ expanded }) => (expanded ? "flex-start" : "center")}; ;
`;

export const NavOption = styled(Button)`
	&& {
		border-radius: 1em;
		text-transform: none;
		width: 100%;
		min-width: 0px;
		border: 3px solid rgba(0, 0, 0, 0);
		&:hover {
			border: 3px solid ${({ theme }) => theme.background};
		}
		&:not(:last-child) {
			margin-bottom: 2em;
		}
		&:last-child {
			margin-bottom: 1em;
		}
		a {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

export const LogOut = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	align-self: flex-end;
	flex-direction: row;
`;

export const ExpandButton = styled.div<ExpandProps>`
	display: grid;
	place-items: center;
	width: 2rem;
	height: 2rem;
	position: absolute;
	background-color: ${({ theme, expanded }) => (expanded ? theme.background : theme.primary)};
	border-radius: 50%;
	top: 1.6rem;
	/* left: ${({ expanded }) => (expanded ? "11em" : "6.5em")}; */
	left: 6.5em;
	&:hover {
		cursor: pointer;
	}
	transform: rotate(${({ expanded }) => (expanded ? "0deg" : "180deg")});
	transition: all 0.3s ease-out;
`;

export const BottomWrapper = styled.div``;

export const VersionWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
`;

export const Version = styled.div<ExpandProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: 600;
	transition: all 0.3s ease-out;
	padding-bottom: 0.5em;
`;
