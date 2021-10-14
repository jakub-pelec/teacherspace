import { combineReducers } from "redux";
import themeReducer from "./theme/reducer";
import authReducer from "./auth/reducer";
import signupReducer from './signup/reducer';

export default combineReducers({
	theme: themeReducer,
	auth: authReducer,
	signup: signupReducer
});
