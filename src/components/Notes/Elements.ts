import styled, { css } from "styled-components";
import { Button } from "@material-ui/core";

export const Wrapper = styled.div`
	position: relative;
	height: 90%;
	min-width: 700px;
	max-width: 100%;
	h1 {
		font-size: 3em;
	}
`;
export const ScrollContainer = styled.div`
	padding: 3em;
	height: 100%;
	overflow-y: auto;
`;
export const CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 12fr);
	padding-bottom: 1em;
`;

export const AddButton = styled(Button)`
	&& {
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.primary};
		min-width: 0;
		min-height: 0;
		width: 4.5em;
		height: 4.5em;
		padding: 0.7em;
		border-radius: 50%;
		box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
		right: 3em;
		bottom: 3em;
		&:hover {
			background-color: ${({ theme }) => theme.background};
		}
	}
`;

export const Row = styled.div<{ title?: boolean }>`
	padding: 1% 5%;
	margin-bottom: 1.5em;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.background};
	border-radius: 10px;
	width: 100%;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	overflow: hidden;
	transition: transform 0.2s;
	${({ title }) =>
		!title
			? css`
					&:hover {
						cursor: pointer;
						transform: scale(1.02);
						transition: transform 0.2s;
					}
			  `
			: css`
					background-color: #ffd4cf;
					* {
						font-weight: 700;
						font-size: 1.5rem;
					}
			  `}
`;

export const Title = styled.div`
	flex: 4;
	font-size: 2rem;
	text-transform: capitalize;
	max-width: 15em;
	font-weight: 600;
`;

export const Subject = styled.div`
	flex: 2;
	font-size: 1.5rem;
	text-transform: capitalize;
	max-width: 15em;
`;

export const Class = styled.div`
	font-size: 1em;
	font-weight: bold;
	border: 2px solid ${({ theme }) => theme.infoBorder};
	background-color: ${({ theme }) => theme.infoBg};
	width: fit-content;
	border-radius: 1em;
	max-width: 15em;
`;

export const ClassesWrapper = styled.div`
	flex: 2;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const Note = styled.div`
	font-size: 1.5em;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const FilterOptions = styled.form`
	display: flex;
	background-color: ${({ theme }) => theme.background};
	border-radius: 0.5em;
	align-items: center;
	justify-content: space-between;
	padding: 1em;
`;
export const FilterOption = styled.div`
	width: 30%;
`;
export const FilterButton = styled.div`
	width: 5em;
`;

export const DateContainer = styled.div``;
