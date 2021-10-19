import React from "react";
import { Props } from "react-select";
import { Component as Select, Img, SVWrapper } from "./Elements";

interface IProps extends Props {}

const SingleOption = ({ innerRef, innerProps, data }: any) => {
	return (
		<SVWrapper ref={innerRef} {...innerProps} role="button">
			{data.flag && (
				<span>
					<Img src={data.flag} alt="flag" />
				</span>
			)}
			{data.label}
		</SVWrapper>
	);
};

const SelectComponent: React.FC<IProps> = (props) => {
	return <Select {...props} components={{ Option: SingleOption }} />;
};

export default SelectComponent;
