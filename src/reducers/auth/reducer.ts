import { SAVE_USER_UUID } from "../../actions/types";
import { ActionWithPayload } from "../../typings/redux";

const INITIAL_STATE = {
	firestoreID: null,
};

const reducer = (state: typeof INITIAL_STATE = INITIAL_STATE, action: ActionWithPayload<any>) => {
	switch (action.type) {
		case SAVE_USER_UUID:
			return { ...state, firestoreID: action.payload };
		default:
			return state;
	}
};

export default reducer;
