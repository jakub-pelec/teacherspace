import styled from "styled-components";

interface ModalProps {
	open: boolean;
}

export const Modal = styled.div<ModalProps>`
	position: fixed;
	widht: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: ${({ open }) => (open ? "block" : "none")};
`;
