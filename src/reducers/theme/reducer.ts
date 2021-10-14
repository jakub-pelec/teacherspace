import { SWITCH_THEME, CLEAR_THEME } from "../../actions/types";
import { ActionWithPayload } from "../../typings/redux";

const INITIAL_STATE = {
	color: "light",
};

const reducer = (state: typeof INITIAL_STATE = INITIAL_STATE, action: ActionWithPayload<any>) => {
	switch (action.type) {
		case SWITCH_THEME:
			return { ...state, theme: action.payload };
		case CLEAR_THEME:
			return INITIAL_STATE;
		default:
			return state;
	}
};

export default reducer;
