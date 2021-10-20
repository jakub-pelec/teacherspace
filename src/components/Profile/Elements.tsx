import styled from "styled-components";
import { Button } from "../../shared/components/Button/Button";

export const ContentWrapper = styled.div`
	width: 90%;
	height: 90%;
	background-color: white;
	border-radius: 25px;
	box-shadow: 0px 11px 26px -15px ${({ theme }) => theme.primary}, 0px 31px 26px -15px rgba(0, 0, 0, 1);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	padding: 5% 0;
	text-align: center;
	min-width: 800px;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 6fr);
	grid-gap: 2em;
	flex: 3;
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
	flex: 1;
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
	padding: 0.5em;
	min-width: 20rem;
	font-size: 1.5rem;
`;

export const InfoSection = styled.div`
	margin-bottom: 3em;
	border: 2px solid ${({ theme }) => theme.primary};
	box-shadow: 0px 11px 26px -15px ${({ theme }) => theme.primary}, 0px 31px 26px -15px ${({ theme }) => theme.primary};
	max-height: 250px;
	overflow: auto;
	padding: 5% 0;
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

export const AddMoreButton = styled(Button)`
	position: absolute;
	top: -20px;
	left: -20px;
	width: 10px !important;
	height: 10px !important;
	border-radius: 25px !important;
	padding: 5% !important;
	min-width: unset !important;
`;

export const AddPropertyWrapper = styled.div`
	background-color: white;
	width: 50%;
	height: 50%;
	transform: translate(50%, 50%);
	border-radius: 20px;
`;

export const AddPropertyContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	height: 100%;
`

export const AddPropertyButton = styled(Button)`
	width: 40% !important;
`;

export const CloseModal = styled(Button)`
	position: fixed;
	top: 10%;
	left: 85%;
	width: 10px !important;
	height: 10px !important;
	border-radius: 25px !important;
	padding: 3% !important;
	min-width: unset !important;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.div`
	font-size: 32px;
`