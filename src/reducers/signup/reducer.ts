import { SAVE_SIGNUP_DATA } from "../../actions/types";
import { ActionWithPayload } from "../../typings/redux";

const INITIAL_STATE = {
	firstName: '',
    lastName: '',
    email: '',
    password: '',
};

const reducer = (state: typeof INITIAL_STATE = INITIAL_STATE, action: ActionWithPayload<any>) => {
	switch (action.type) {
		case SAVE_SIGNUP_DATA:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default reducer;
