import { CLEAR_AUTH, CLEAR_SIGNUP, CLEAR_THEME, SAVE_SIGNUP_DATA, SAVE_USER_UUID, SWITCH_THEME } from "./types";
import { auth, apiPath, apiRoutes, firestore } from "../config/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "@firebase/auth";
import { collection, onSnapshot } from "@firebase/firestore";
import { Dispatch } from "redux";
import axios from "axios";

interface RegisterResponseData {
	code: string;
	message: string;
	firestoreID: string;
}

export const register =
	({ subjects, classes, successCallback, errorCallback, finalCallback }: RegisterParams) =>
	async (dispatch: Dispatch, getState: any) => {
		const { firstName, lastName, email, password } = getState().signup;
		try {
			const userDocument = { firstName, lastName, email, password, subjects, classes };
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

export const logout =
	({ successCallback, errorCallback, finalCallback }: PromiseCallback) =>
	async (dispatch: Dispatch, getState: any) => {
		try {
			await signOut(auth);
			clearStore(dispatch);
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

export const saveSignupData = (signupData: SignupData) => ({
	type: SAVE_SIGNUP_DATA,
	payload: signupData,
});

export const subscribeToAuthUser = () =>
	onAuthStateChanged(auth, async (user) => {
		if (user) {
			const {
				claims: { firestoreID },
			} = await user.getIdTokenResult();
			const userNotesRef = collection(firestore, `users/${firestoreID}/notes`);
			onSnapshot(userNotesRef, (snapshot) => {
				snapshot.docs.forEach((doc) => {
					/*TODO*/
				});
			});
		}
	});

const clearStore = (dispatch: Dispatch) => {
	dispatch({ type: CLEAR_THEME });
	dispatch({ type: CLEAR_AUTH });
	dispatch({ type: CLEAR_SIGNUP });
};
