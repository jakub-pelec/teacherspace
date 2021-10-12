import { SWITCH_THEME } from "../../actions/types";
import { ActionWithPayload } from "../../typings/redux";

const INITIAL_STATE = {
	color: "light",
};

const reducer = (state: typeof INITIAL_STATE = INITIAL_STATE, action: ActionWithPayload<any>) => {
	switch (action.type) {
		case SWITCH_THEME:
			return { ...state, theme: action.payload };
		default:
			return state;
	}
};

export default reducer;
