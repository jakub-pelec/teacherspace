import {
	CLEAR_AUTH,
	CLEAR_FETCH,
	CLEAR_SIGNUP,
	CLEAR_THEME,
	SAVE_NOTES,
	SAVE_SIGNUP_DATA,
	SAVE_USER_DATA,
	SAVE_USER_UUID,
	SWITCH_THEME,
} from "./types";
import { auth, apiPath, apiRoutes, firestore } from "../config/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "@firebase/auth";
import { collection, onSnapshot, doc, addDoc } from "firebase/firestore";
import { Dispatch } from "redux";
import axios from "axios";
import { AppState } from "../typings/redux";

interface RegisterResponseData {
	code: string;
	message: string;
	firestoreID: string;
}

export const register =
	({ subjects, classes, successCallback, errorCallback, finalCallback }: RegisterParams) =>
	async (dispatch: Dispatch, getState: () => AppState) => {
		const { firstName, lastName, email, password } = getState().signup;
		try {
			const userDocument = { firstName, lastName, email, password, subjects: subjects || [], classes: classes || [] };
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
	async (dispatch: Dispatch) => {
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

export const subscribeToAuthUser = () => async (dispatch: Dispatch) =>
	onAuthStateChanged(auth, async (user) => {
		if (user) {
			const {
				claims: { firestoreID },
			} = await user.getIdTokenResult();
			const userNotesRef = collection(firestore, `users/${firestoreID}/notes`);
			const userDocRef = doc(firestore, `users/${firestoreID}`);
			onSnapshot(userDocRef, (doc) => {
				const userData = doc.data();
				dispatch({ type: SAVE_USER_DATA, payload: userData });
			});
			onSnapshot(userNotesRef, (snapshot) => {
				const notes: FirestoreDocumentDataWithId<Note>[] = [];
				snapshot.docs.forEach((doc) => {
					notes.push({ ...doc.data() as Note, id: doc.id });
				});
				dispatch({ type: SAVE_NOTES, payload: notes });
			});
		}
	});

export const addNote = async (note: Note, firestoreID: string) => {
	const noteRef = collection(firestore, "users", firestoreID, "notes");
	await addDoc(noteRef, note);
};

const clearStore = (dispatch: Dispatch) => {
	dispatch({ type: CLEAR_THEME });
	dispatch({ type: CLEAR_AUTH });
	dispatch({ type: CLEAR_SIGNUP });
	dispatch({ type: CLEAR_FETCH });
};
