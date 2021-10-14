import { SAVE_USER_UUID, SWITCH_THEME } from "./types";
import { auth, apiPath, apiRoutes } from "../config/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { Dispatch } from "redux";
import axios from "axios";

interface RegisterResponseData {
	code: string;
	message: string;
	firestoreID: string;
}

export const register =
	({ firstName, lastName, email, password, successCallback, errorCallback, finalCallback }: RegisterParams) =>
	async (dispatch: Dispatch) => {
		try {
			const userDocument = { firstName, lastName, email, password };
			const resp: Response<RegisterResponseData> = await axios.post(`${apiPath}${apiRoutes.createAccount}`, userDocument);
			const { firestoreID } = resp.data;
			dispatch({ type: SAVE_USER_UUID, payload: firestoreID });
			successCallback();
		} catch (e) {
			errorCallback();
		} finally {
			finalCallback();
		}
	};

export const login =
	({ email, password, successCallback, errorCallback, finalCallback }: LoginParams) =>
	async (dispatch: Dispatch) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			const userAuthData = await auth.currentUser?.getIdTokenResult();
			dispatch({ type: SAVE_USER_UUID, payload: userAuthData?.claims.firestoreID });
			successCallback();
		} catch (e) {
			errorCallback();
		} finally {
			finalCallback();
		}
	};

export const changeTheme = (newTheme: string) => {
	return { type: SWITCH_THEME, payload: newTheme };
};
