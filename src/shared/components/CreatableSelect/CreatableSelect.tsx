import React from "react";
import * as Select from 'react-select/creatable';
import { StyledSelect } from './Elements';

interface IProps extends Select.CreatableProps<any, any, any> {
	options: Option[];
	ref: React.Ref<any>;
	error: boolean;
}

const CreatableSelect: React.FC<IProps> = (props) => {
	// eslint-disable-next-line
	return <StyledSelect {...props} isMulti />;
};

export default CreatableSelect;
