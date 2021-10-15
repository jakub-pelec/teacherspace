import styled from "styled-components";

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2em;
`;

export const Wrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Logo = styled.div`
	height: 7rem;
	width: 7rem;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.primary};
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 4em;
`;

export const Label = styled.div`
	font-size: 1rem;
	padding-left: 0.5em;
	padding-bottom: 0.5em;
`;
export const Information = styled.div`
	border-radius: 1em;
	border: 1px solid ${({ theme }) => theme.infoBorder};
	background-color: ${({ theme }) => theme.infoBg};
	width: fit-content;
	padding: 1em;
	min-width: 20rem;
`;

export const InfoSection = styled.div`
	margin-bottom: 3em;
`;
