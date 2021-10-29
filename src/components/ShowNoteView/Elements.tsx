import styled, { keyframes } from "styled-components";

interface StyledProps {
	open: boolean;
}

const SlideIn = keyframes`
 0% { transform: translate(-50%, -200%); }

 100% { transform: translate(-50%, -50%); }
`;

export const NoteView = styled.div<StyledProps>`
	visibility: ${({ open }) => (open ? "visable" : "hidden")};
	transform: scale(${({ open }) => (open ? 1 : 0)});
	position: absolute;
	display: flex;
	flex-direction: column;
	top: 50%;
	left: 50%;
	background-color: ${({ theme }) => theme.background};
	height: 90%;
	width: 90%;
	border-radius: 1em;
	padding: 1em;
	overflow: hidden;
	transform: translate(-50%, -50%);
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	animation: ${SlideIn} 0.4s ease-in-out;
	z-index: 100;
`;

export const Title = styled.h1`
	align-self: center;
`;
export const Subject = styled.h2`
	margin-bottom: 0.5em;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-evenly;
	align-items: center;
	width: 50%;
	align-self: center;
	button {
		max-width: 20rem;
	}
`;

export const ClassesWrapper = styled.div`
	display: flex;
	max-width: 15em;
	margin-bottom: 0.5em;
	font-size: 1em;
	font-weight: bold;
	align-items: center;
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

export const Content = styled.div`
	font-size: 2em;
	max-width: 100%;
	max-height: 80%;
	overflow-y: auto;
`;

export const ExitButton = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0.5em;
	right: 0.5em;
	font-weight: bold;
	font-size: 1.5em;
	color: ${({ theme }) => theme.background};
	background-color: ${({ theme }) => theme.primary};
	height: 1em;
	width: 1em;
	border-radius: 50%;
	padding: 0.5em;

	&:hover {
		cursor: pointer;
	}
`;
