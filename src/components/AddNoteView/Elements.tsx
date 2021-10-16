import styled from "styled-components";

interface StyledProps {
	visable?: boolean;
}

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: space-between;
	width: 10em;
	button {
		max-width: 2rem;
	}
`;

export const OptionWrapper = styled.div`
	padding: 2em;
`;
export const Label = styled.div`
	font-weight: 700;
`;

export const AddNoteView = styled.div<StyledProps>`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30%;
	height: 70%;
	min-height: fit-content;
	background-color: ${({ theme }) => theme.background};
	border-radius: 1em;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: ${({ visable }) => (visable ? 1 : 0)};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	transition: all 0.3s ease-out;
`;
