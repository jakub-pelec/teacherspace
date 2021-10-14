import styled from "styled-components";

interface ExpandProps {
	expanded?: boolean;
}

export const Label = styled.div<ExpandProps>`
	display: ${({ expanded }) => (expanded ? "block" : "none")};
	opacity: ${({ expanded }) => (expanded ? 1 : 0)};
	margin: 0 0.5em;
	transition: all 0.3s ease-out;
`;

export const NavBar = styled.nav<ExpandProps>`
	position: relative;
	display: flex;
	flex-direction: column;
	height: calc(100% - 1em);
	width: ${({ expanded }) => (expanded ? "10em" : "6em")};
	background-color: ${({ theme }) => theme.primary};
	border-radius: 1em;
	margin-top: 0.5em;
	margin-left: 0.5em;
	padding-top: 1em;
	padding-left: 1.3em;
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

export const OptionWrapper = styled.div``;

export const NavOption = styled.div`
	display: flex;
	align-items: center;
	border-radius: 1em;
	padding: 0.5em;
	&:hover {
		background-color: ${({ theme }) => theme.background};
	}
	a {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&:not(:last-child) {
		margin-bottom: 2em;
	}
	&:last-child {
		margin-bottom: 1em;
	}
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
