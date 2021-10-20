import styled from "styled-components";
import background from "../../assets/background.svg";

export const PageWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	background-color: ${({ theme }) => theme.primary};
`;

export const ColumnWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1em;
	min-width: 800px;
	height: 60%;
	overflow: hidden;
	filter: blur(0px);
	box-shadow: 10px 10px 34px 0px rgba(0, 0, 0, 0.6);
`;

export const ContentColumnRight = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	padding: 80px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background-color: ${({ theme }) => theme.background};
	form {
		width: 100%;
	}
`;

export const ContentColumnLeft = styled.div`
	display: flex;
	position: relative;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.3);
	backdrop-filter: blur(1em);
`;

export const Title = styled.h1`
	margin-bottom: 1.5em;
`;

export const FormField = styled.div`
	width: 100%;
`;

export const Background = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${background});
	background-size: contain;
`;
