import React from "react";
import styled from "styled-components";

interface IProps {
	children: React.ReactNode;
}

const FadeBackground: React.FC<IProps> = ({ children }) => {
	return <Background>{children}</Background>;
};

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0em;
	right: 0;
	bottom: 0;
	content: " ";
	background: rgba(0, 0, 0, 0.5);
`;

export default FadeBackground;
