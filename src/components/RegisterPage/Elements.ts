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
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1em;
	min-width: 50vw;
	height: 60%;
	overflow: hidden;

	button {
		margin-top: 2em;
	}
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const ContentColumnRight = styled.div`
	padding: 5em;
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(1em);
`;

export const ContentColumnLeft = styled.div`
	padding: 5em;
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: flex-start;
	background-color: ${({ theme }) => theme.background};
`;

export const FullNameContainer = styled.div`
	display: flex;
	div:not(:last-child) {
		margin-right: 1rem;
	}
`;

export const FormField = styled.div`
	padding-bottom: 0.5em;
`;

export const Title = styled.h1`
	margin-bottom: 1em;
`;
