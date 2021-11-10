import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.bluredBg};
`;

export const ContentWrapper = styled.div`
	height: 100%;
	width: 100%;
	padding: 5em 1em 0 1em;
	overflow: hidden;
`;
