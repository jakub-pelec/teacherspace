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
	({ firstName, lastName, email, password, enqueueSnackbar }: RegisterParams) =>
	async (dispatch: Dispatch) => {
		try {
			const userDocument = { firstName, lastName, email, password };
			const resp: Response<RegisterResponseData> = await axios.post(`${apiPath}${apiRoutes.createAccount}`, userDocument);
			const { firestoreID } = resp.data;
			dispatch({ type: SAVE_USER_UUID, payload: firestoreID });
			enqueueSnackbar("Account created succesfully!", { variant: "success" });
		} catch (e) {
			enqueueSnackbar("Something went wrong! Please try again.", { variant: "error" });
		}
	};

export const login =
	({ email, password, enqueueSnackbar }: LoginParams) =>
	async (dispatch: Dispatch) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			const userAuthData = await auth.currentUser?.getIdTokenResult();
			dispatch({ type: SAVE_USER_UUID, payload: userAuthData?.claims.firestoreID });
			enqueueSnackbar("Logged in!", { variant: "success" });
		} catch (e) {
			enqueueSnackbar("Something went wrong! Please try again.", { variant: "error" });
		}
	};

export const changeTheme = (newTheme: string) => {
	return { type: SWITCH_THEME, payload: newTheme };
};
