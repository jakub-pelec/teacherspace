import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers/rootReducer";

import Router from "./components/Router/Router";
import ThemeProvider from "./providers/ThemePovider";
import StripeProvider from "./providers/StripeProvider";
import { SnackbarProvider } from "notistack";
import "./providers/I18nProvider";
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
	return (
		<>
			<ReduxProvider store={store}>
				<StripeProvider>
					<ThemeProvider>
						<SnackbarProvider autoHideDuration={3000}>
							<Router />
						</SnackbarProvider>
					</ThemeProvider>
				</StripeProvider>
			</ReduxProvider>
		</>
	);
}

export default App;
