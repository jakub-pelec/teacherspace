import styled from "styled-components";
import { Button } from "@material-ui/core";

export const StyledButton = styled(Button)`
	&& {
		border: none;
		outline: none;
		border-radius: 5px;
		padding: 10px;
		background-color: ${({ theme }) => theme.primary};
	}
`;
