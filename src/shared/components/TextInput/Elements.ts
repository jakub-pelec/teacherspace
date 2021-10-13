import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const StyledTextField = styled(TextField)`
	&& {
		width: 100%;
		color: red;
		& .MuiInput-underline:after,
		.MuiOutlinedInput-root,
		.Mui-focused fieldset {
			border-color: ${({ theme }) => theme.primary};
			border-radius: 0.5em;
		}

		& .MuiInput {
			height: 3em;
		}
	}
`;
