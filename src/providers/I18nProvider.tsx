import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../translations/en.json";
import pl from "../translations/pl.json";

const resources = {
	en: {
		translation: en,
	},
	pl: {
		translation: pl,
	},
};
i18next.use(initReactI18next).init({
	resources,
	lng: "en",
	interpolation: {
		escapeValue: false,
	},
});
export default i18next;
