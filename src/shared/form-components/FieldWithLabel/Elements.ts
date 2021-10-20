import styled from "styled-components";

export const Label = styled.div`
	font-size: 0.8em;
	font-weight: 500;
	padding: 0.5em 0;
`;

export const ErrorMessage = styled.div`
	font-size: 0.7em;
	font-weight: 500;
	color: ${({ theme }) => theme.error};
	position: absolute;
	bottom: -15px;
	left: 0;
`;

export const FieldWrapper = styled.div`
	position: relative;
	height: 100%;
`;
