import { createSlice } from "@reduxjs/toolkit";

const sideInfoSlice = createSlice({
	name: "sideInfo",
	initialState: {
		isSideInfoOpened: false,
	},
	reducers: {
		toggleSideInfoState(state, action) {
			state.isSideInfoOpened = action.payload;
		},
	},
});

export const { toggleSideInfoState } = sideInfoSlice.actions;

export default sideInfoSlice.reducer;
