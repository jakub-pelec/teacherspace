import { SAVE_USER_UUID, CLEAR_AUTH } from "../../actions/types";
import { ActionWithPayload } from "../../typings/redux";

export const INITIAL_STATE = {
	firestoreID: null,
};

const reducer = (state: typeof INITIAL_STATE = INITIAL_STATE, action: ActionWithPayload<any>) => {
	switch (action.type) {
		case SAVE_USER_UUID:
			return { ...state, firestoreID: action.payload };
		case CLEAR_AUTH:
			return INITIAL_STATE;
		default:
			return state;
	}
};

export default reducer;
