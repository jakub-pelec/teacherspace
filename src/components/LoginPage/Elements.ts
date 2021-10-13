import styled from "styled-components";

export const PageWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	background-color: ${({ theme }) => theme.primary};
	border: 3px solid purple;
`;

export const ColumnWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.background};
	border-radius: 1rem;
	width: 30%;
	height: 60%;
`;

export const ContentColumn = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	border: 1px solid blue;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.background};
`;

export const FormWrapper = styled.form`
	margin: auto;
	width: 50%;
	background-color: ${({ theme }) => theme.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 5% 0;
	border: 2px solid black;
	background-color: ${({ theme }) => theme.background};
`;

export const FormField = styled.div``;
