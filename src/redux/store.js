import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import noteReducer from "./reducers/noteReducer";

const persistConfig = {
	key: "root",
	storage,
	version: 1,
};

const persistedReducer = persistReducer(persistConfig, noteReducer);
export const store = configureStore({
	reducer: {
		note: persistedReducer,
	},
});
