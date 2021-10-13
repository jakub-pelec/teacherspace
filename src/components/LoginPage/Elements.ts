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
	max-width: 60%;
	min-width: 70vw;
	height: 60%;
	overflow: hidden;
`;

export const ContentColumnRight = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.background};
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

export const FormWrapper = styled.form`
	margin: auto;
	width: 100%;
	background-color: ${({ theme }) => theme.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: left;
	flex-direction: column;
	padding: 5% 0;
	background-color: ${({ theme }) => theme.background};
`;

export const Title = styled.h1`
	align-self: flex-start;
	margin-left: 1em;
`;

export const FormField = styled.div`
	padding-bottom: 2em;
`;
