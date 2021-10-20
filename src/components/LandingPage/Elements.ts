import styled from "styled-components";

export const PageWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.primary};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ContentWrapper = styled.div`
    width: 30%;
    height: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h1`
	font-size: 40px;
`;

export const Background = styled.div`
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 70%;
	width: 70%;
	border-radius: 25px;
	flex-direction: column;
`;
