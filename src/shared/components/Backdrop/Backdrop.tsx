import React from "react";
import styled from "styled-components";

import { Background } from "./Elements";
interface IProps {
	children: React.ReactNode;
}

const Backdrop: React.FC<IProps> = ({ children }) => {
	return <Background>{children}</Background>;
};
export default Backdrop;
