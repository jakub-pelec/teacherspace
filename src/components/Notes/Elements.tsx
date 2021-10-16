import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Wrapper = styled.div`
	position: relative;
	height: 100%;
	padding-left: 2em;
	h1 {
		padding-bottom: 2em;
		font-size: 3em;
	}
`;
export const ScrollContainer = styled.div`
	max-height: 100%;
	overflow: auto;
`;
export const CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-row-gap: 4em;
`;

export const AddButton = styled(Button)`
	&& {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.primary};
		min-width: 0;
		min-height: 0;
		width: 4.5em;
		height: 4.5em;
		padding: 0.7em;
		border-radius: 50%;
		box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
		right: 3em;
		bottom: 3em;
		&:hover {
			background-color: ${({ theme }) => theme.background};
		}
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: ${({ theme }) => theme.background};
	border-radius: 1em;
	padding: 1.5em;
	width: 20em;
	max-width: 20em;
	height: 20em;
	max-height: 20em;
	div {
		margin-bottom: 0.5em;
	}
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Title = styled.div`
	font-size: 2.5rem;
	text-transform: capitalize;
	max-width: 15em;
`;

export const Subject = styled.div`
	font-size: 1.5rem;
	text-transform: capitalize;
	max-width: 15em;
`;

export const Class = styled.div`
	font-size: 1em;
	font-weight: bold;
	border: 2px solid ${({ theme }) => theme.infoBorder};
	background-color: ${({ theme }) => theme.infoBg};
	width: fit-content;
	padding: 0.2em 0.5em;
	border-radius: 1em;
	max-width: 15em;
`;

export const ClassesWrapper = styled.div`
	display: flex;
	max-width: 15em;
`;

export const Note = styled.div`
	max-width: 15em;
	word-break: break-word;
	font-size: 1.5em;
`;
