import styled from "styled-components";

export const MobileScreen = styled.div`
	position: fixed;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	background-color: ${({ theme }) => theme.primary};
	padding: 10%;
	text-align: center;
`;

export const FirsLine = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`;
export const SecondLine = styled.div`
	font-size: 1.5rem;
`;
