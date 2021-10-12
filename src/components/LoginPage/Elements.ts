import styled from "styled-components";

export const PageWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
    background-color: ${({ theme }) => theme.secondary};
`;

export const ContentColumn = styled.div`
	width: 50%;
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
`;

export const FormField = styled.div`
`;
