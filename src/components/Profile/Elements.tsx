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
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
	color: white;
	letter-spacing: 0.5rem;
	text-align: center;
	font-family: "Roboto Mono";
	box-shadow: 0px 11px 26px -15px ${({ theme }) => theme.primary}, 0px 31px 26px -15px rgba(0, 0, 0, 1);
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 4em;
`;

export const Label = styled.div`
	font-size: 1.5rem;
	padding-left: 0.5em;
	padding-bottom: 0.5em;
	text-decoration: underline white 2px;
	font-weight: 600;
`;
export const Information = styled.div`
	border-radius: 1em;
	width: fit-content;
	padding: .5em;
	min-width: 20rem;
	font-size: 1.5rem;
`;

export const InfoSection = styled.div`
	margin-bottom: 3em;
`;

export const ListElement = styled.div`
	background-color: ${({ theme }) => theme.primary};
	border-radius: 5px;
	border: 2px solid white;
	padding: 0.25rem;
	text-align: center;
	margin-bottom: 4%;
	font-weight: 700;
	box-shadow: 0px 10px 30px -10px white;
	`;
