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
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, setPersistence, browserSessionPersistence } from "@firebase/auth";
import { collection, onSnapshot, doc, addDoc, updateDoc } from "firebase/firestore";
import { Dispatch } from "redux";
import axios from "axios";
import { AppState } from "../typings/redux";
import { NoteType } from "../typings/wysiwyg";

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
			setPersistence(auth, browserSessionPersistence);
			const {
				claims: { firestoreID },
			} = await user.getIdTokenResult();
			dispatch({ type: SAVE_USER_UUID, payload: firestoreID });
			const userNotesRef = collection(firestore, `users/${firestoreID}/notes`);
			const userDocRef = doc(firestore, `users/${firestoreID}`);
			onSnapshot(userDocRef, (doc) => {
				const userData = doc.data();
				dispatch({ type: SAVE_USER_DATA, payload: userData });
			});
			onSnapshot(userNotesRef, (snapshot) => {
				const notes: FirestoreDocumentDataWithId<NoteType>[] = [];
				snapshot.docs.forEach((doc) => {
					notes.push({ ...(doc.data() as NoteType), id: doc.id });
				});
				dispatch({ type: SAVE_NOTES, payload: notes });
			});
		}
	});

export const addNote =
	(note: NoteType, { successCallback, errorCallback, finalCallback }: PromiseCallback) =>
	async (_: Dispatch, getState: () => AppState) => {
		const { firestoreID } = getState().auth;
		const noteRef = collection(firestore, "users", firestoreID, "notes");
		try {
			await addDoc(noteRef, note);
			successCallback();
		} catch (e) {
			errorCallback();
		} finally {
			finalCallback();
		}
	};

export const updateNote =
	(note: FirestoreDocumentDataWithId<NoteType>, { successCallback, errorCallback, finalCallback }: PromiseCallback) =>
	async (_: Dispatch, getState: () => AppState) => {
		const { firestoreID } = getState().auth;
		const noteRef = doc(firestore, "users", firestoreID, "notes", note.id);
		const { title, classes, subject, content } = note;
		const newNoteData = {
			title,
			classes,
			subject,
			dateModified: Date.now(),
			content,
		};
		try {
			await updateDoc(noteRef, newNoteData);
			successCallback();
		} catch (e) {
			errorCallback();
		} finally {
			finalCallback();
		}
	};

const clearStore = (dispatch: Dispatch) => {
	dispatch({ type: CLEAR_THEME });
	dispatch({ type: CLEAR_AUTH });
	dispatch({ type: CLEAR_SIGNUP });
	dispatch({ type: CLEAR_FETCH });
};
