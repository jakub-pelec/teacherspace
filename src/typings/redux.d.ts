import { Action } from "redux";
import { INITIAL_STATE as authState } from '../reducers/auth';
import { INITIAL_STATE as fetchState } from '../reducers/fetch';
import { INITIAL_STATE as signupState } from '../reducers/signup';
import { INITIAL_STATE as themeState } from '../reducers/theme';


interface ActionWithPayload<T> extends Action {
	payload: T;
}

interface AppState {
	fetch: typeof fetchState,
	auth: typeof authState,
	signup: typeof signupState,
	theme: typeof themeState
}