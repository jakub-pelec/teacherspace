import styled from "styled-components";
import { Button } from "@material-ui/core";

export const StyledButton = styled(Button)`
	&& {
		border: none;
		outline: none;
		border-radius: 5px;
		padding: 0.5em;
		background-color: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.background};
		width: 100%;
		text-transform: none;

		transition: all 0.2s ease-in-out;

		:disabled {
			background-color: ${({ theme }) => theme.primaryWithOpacity};
		}

		:hover {
			color: ${({ theme }) => theme.primary};
		}
	}
`;
