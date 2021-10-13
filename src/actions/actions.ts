import { SWITCH_THEME } from "./types";
import { auth, firestore } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { collection, addDoc } from "@firebase/firestore";
import { Dispatch } from "redux";

export const register =
	({ firstName, lastName, email, password, enqueueSnackbar }: RegisterParams) =>
	async (dispatch: Dispatch) => {
		try {
			const userDocument = await addDoc(collection(firestore, "users"), { firstName, lastName, email });
			const user = await createUserWithEmailAndPassword(auth, email, password);
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
			enqueueSnackbar("Logged in!", { variant: "success" });
		} catch (e) {
			enqueueSnackbar("Something went wrong! Please try again.", { variant: "error" });
		}
	};

export const changeTheme = (newTheme: string) => {
	return { type: SWITCH_THEME, payload: newTheme };
};
