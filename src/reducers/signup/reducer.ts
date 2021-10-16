import { SAVE_SIGNUP_DATA, CLEAR_SIGNUP } from "../../actions/types";
import { ActionWithPayload } from "../../typings/redux";

export const INITIAL_STATE = {
	firstName: '',
    lastName: '',
    email: '',
    password: '',
};

const reducer = (state: typeof INITIAL_STATE = INITIAL_STATE, action: ActionWithPayload<any>) => {
	switch (action.type) {
		case SAVE_SIGNUP_DATA:
			return { ...state, ...action.payload };
        case CLEAR_SIGNUP:
            return INITIAL_STATE;
		default:
			return state;
	}
};

export default reducer;
