import styled from "styled-components";
import background from "../../assets/background.svg";

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
	min-width: 800px;
	height: 60%;
	overflow: hidden;
	filter: blur(0px);
	button {
		margin-top: 2em;
	}
	box-shadow: 10px 10px 34px 0px rgba(0, 0, 0, 0.6);
`;

export const ContentColumnRight = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(1em);
`;

export const ContentColumnLeft = styled.div`
	padding: 50px;
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

export const Background = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${background});
	background-size: contain;
`;
