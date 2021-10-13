import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	background-color: ${({ theme }) => theme.primary};
`;

export const FormContainer = styled.div`
	background-color: ${({ theme }) => theme.background};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-radius: 1em;
	min-width: 50vw;

	height: 60%;
	overflow: hidden;
	padding: 5em;
	button {
		margin-top: 2em;
	}
	form {
		min-width: 50%;
	}
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const FormField = styled.div`
	padding-bottom: 0.5em;
`;

export const Title = styled.h1`
	margin-bottom: 1em;
`;
