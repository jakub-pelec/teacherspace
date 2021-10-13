import React from "react";
import { Label as StyledLabel } from "./Elements";
interface IProps {
	name: string;
}
export const Label: React.FC<IProps> = ({ name = "" }) => {
	return <StyledLabel>{name}</StyledLabel>;
};
