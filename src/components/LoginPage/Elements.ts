import styled from "styled-components";

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
	min-width: 50vw;
	height: 60%;
	overflow: hidden;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const ContentColumnRight = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	padding: 5em;
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
	padding: 5em;
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
	padding-bottom: 2em;
	width: 100%;
`;
