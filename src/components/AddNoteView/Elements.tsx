import styled, { css } from "styled-components";

interface StyledProps {
	visible?: boolean;
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

export const OptionWrapper = styled.div<{ input?: boolean }>`
	height: 100%;
	width: ${({ input }) => (input ? "30%" : "100%")};
`;
export const Label = styled.div`
	font-weight: 700;
`;

export const AddNoteView = styled.div<StyledProps>`
	position: absolute;
	width: 90%;
	height: 90%;
	background-color: ${({ theme }) => theme.background};
	border-radius: 1em;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	opacity: ${({ visible }) => (visible ? 1 : 0)};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	transition: all 0.3s ease-out;
	padding: 40px;
`;

export const Form = styled.form`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	> * {
		width: 100%;
	}
`;

export const RowWrapper = styled.div<{ editor?: boolean }>`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: row;
	flex: ${({ editor }) => (editor ? 5 : 1)};
	${({ editor }) =>
		editor &&
		css`
			height: 100%;

			.rdw-wrapper-555 {
				min-width: 100%;
				min-height: 100%;
			}
		`}
`;
