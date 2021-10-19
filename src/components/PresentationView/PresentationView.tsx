import React from "react";
import { Button } from "../../shared/components/Button/Button";

import { PresentationWrapper, PresentationNavbar, NavButton, NavTitle, PresentationContent, NavbarContainer } from "./Elements";

interface IProps {
	html: string;
	title: string;
	handleClose: () => void;
}

const PresentationView: React.FC<IProps> = ({ html, title, handleClose }) => {
	return (
		<PresentationWrapper>
			<PresentationNavbar>
				<NavbarContainer>
					<NavTitle>{title}</NavTitle>
					<NavButton>
						<Button onClick={handleClose}>Close</Button>
					</NavButton>
				</NavbarContainer>
			</PresentationNavbar>
			<PresentationContent dangerouslySetInnerHTML={{ __html: html }} />
		</PresentationWrapper>
	);
};

export default PresentationView;
