import React from "react";
import { MobileScreen, FirsLine, SecondLine } from "./Elements";

const MobileScreenInfo = () => {
	return (
		<MobileScreen>
			<FirsLine>Mobile is currently unsupported</FirsLine>
			<SecondLine>We are working on this {`:)`}</SecondLine>
		</MobileScreen>
	);
};

export default MobileScreenInfo;
