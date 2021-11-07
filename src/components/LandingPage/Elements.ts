import styled from "styled-components";
import { Button as RawButton } from "../../shared/components/Button/Button";

export const HeaderContainer = styled.div`
	width: 90%;
`;

export const Header = styled.h1``;

export const Subheader = styled.h3``;

export const PageWrapper = styled.div`
	height: 100vh;
	background-color: ${({ theme }) => theme.white};
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Navbar = styled.nav`
	padding: 1% 0;
	width: 100%;
	height: 5rem;
	background-color: ${({ theme }) => theme.primary};
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const Section = styled.section<{ row?: boolean; column?: boolean; colored?: boolean }>`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: ${({ row, column }) => (row ? "row" : column ? "column" : "initial")};
	padding: 10% 0;
	background-color: ${({ theme, colored }) => (colored ? `${theme.primary} !important` : "initial")};
	color: ${({ colored }) => (colored ? "white !important" : "initial")};

	:nth-of-type(2n) {
		background-color: ${({ theme }) => theme.primaryWithOpacity};
	}
`;

export const FeaturesTable = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 60%;
	border: 1px solid ${({ theme }) => theme.primary};
	margin: 2% 0;
	background-color: ${({ theme }) => theme.primaryWithOpacity};
`;

export const FeaturesTableItem = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: row;
	width: 100%;
	padding: 2% 0;
	border-bottom: 2px solid ${({ theme }) => theme.primary};

	:last-child {
		border-bottom: none;
	}
`;

export const FeaturesTableHeader = styled(FeaturesTableItem)`
	font-weight: 600;
	text-align: center;
`;

export const FeaturesTableItemCell = styled.div`
	padding: 2%;
`;

export const FeaturesTableCellTitle = styled(FeaturesTableItemCell)<{ status?: "future-plan" | "in-progress" | "ready" }>`
	flex: 1;
	border-right: 2px solid ${({ theme }) => theme.primary};
	flex-basis: 25%;
	text-align: center;
	font-weight: 700;
	color: ${({ theme, status }) =>
		status === "ready" ? "#0e8c00" : status === "in-progress" ? theme.primary : status === "future-plan" ? "#8c0000" : "black"};
`;

export const FeaturesTableCellDescription = styled(FeaturesTableItemCell)`
	flex: 5;
	border-right: 2px solid ${({ theme }) => theme.primary};
	flex-basis: 60%;
`;
export const FeaturesTableCellStatus = styled(FeaturesTableItemCell)<{ status?: "future-plan" | "in-progress" | "ready" }>`
	flex: 1;
	flex-basis: 15%;
	text-align: center;
`;

export const ButtonContainer = styled.div`
	flex-basis: 20%;
	display: flex;
	justify-content: center;
`;

export const Button = styled(RawButton)`
	:hover {
		background-color: white !important;
	}
`;

export const SelectContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

export const ContactUs = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	width: 80%;
	justify-content: space-evenly;
`;

export const Block = styled.p`
	background-color: white;
	color: black;
	margin: 5% 0;
	padding: 3%;
	border-radius: 5px;
	font-weight: 600;
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.primary};
	}
`;
