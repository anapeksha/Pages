import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	notes: [],
};

export const noteSlice = createSlice({
	name: "note",
	initialState,
	reducers: {
		addNote: (state, action) => {
			if (typeof window !== undefined) {
				state.notes.push({
					...action.payload,
				});
			}
		},
		deleteNote: (state, action) => {
			if (typeof window !== undefined) {
				state.notes.map((note, i) => {
					if (note.id === action.payload.id) {
						return state.notes.splice(i, 1);
					}
				});
			}
		},
	},
});

export const { addNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;
