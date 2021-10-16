import { SAVE_USER_DATA, CLEAR_FETCH, SAVE_NOTES } from "../../actions/types";
import { ActionWithPayload } from "../../typings/redux";
import { NoteType } from "../../typings/wysiwyg";

interface State {
	userData: UserData;
	notes: NoteType[];
}

export const INITIAL_STATE: State = {
	userData: {
		firstName: "",
		lastName: "",
		email: "",
		classes: [],
		subjects: [],
	},
	notes: [],
};

const reducer = (state: typeof INITIAL_STATE = INITIAL_STATE, action: ActionWithPayload<any>) => {
	switch (action.type) {
		case SAVE_USER_DATA:
			return { ...state, userData: action.payload };
		case SAVE_NOTES:
			return { ...state, notes: action.payload };
		case CLEAR_FETCH:
			return INITIAL_STATE;
		default:
			return state;
	}
};

export default reducer;
