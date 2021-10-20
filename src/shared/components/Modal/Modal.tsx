import React from "react";

import { Modal } from "./Elements";
import Backdrop from "../Backdrop/Backdrop";

interface IProps {
	children: React.ReactElement;
	open: boolean;
}

const Dialog: React.FC<IProps> = ({ children, open }) => {
	return (
		<Modal open={open}>
			<Backdrop>{children}</Backdrop>
		</Modal>
	);
};

export default Dialog;
