import { GlobalStyles } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { store } from "./redux/store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<GlobalStyles
						styles={{
							body: {
								backgroundColor: "#212122",
								WebkitFontSmoothing: "antialiased",
								MozOsxFontSmoothing: "grayscale",
							},
						}}
					/>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
