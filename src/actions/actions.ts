import { SWITCH_THEME } from "./types";

export const changeTheme = (newTheme: string) => {
	return { type: SWITCH_THEME, payload: newTheme };
};
