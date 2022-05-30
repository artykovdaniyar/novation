import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
	name: "projects",
	initialState: {
		projectsList: [
			{ id: 1, number: "156", square: "103", price: "3 790 000 ₽" },
			{ id: 2, number: "164-2", square: "147", price: "3 790 000 ₽" },
			{ id: 3, number: "89", square: "224", price: "4 750 000 ₽" },
			{ id: 4, number: "305", square: "110", price: "2 920 000 ₽" },
			{ id: 5, number: "104", square: "120", price: "3 130 000 ₽" },
			{ id: 6, number: "299", square: "168", price: "4 380 000 ₽" },
			{ id: 7, number: "231", square: "119", price: "3 130 000 ₽" },
			{ id: 8, number: "160", square: "126", price: "3 260 000 ₽" },
			{ id: 9, number: "212", square: "213", price: "5 350 000 ₽" },

			{ id: 10, number: "156", square: "103", price: "3 790 000 ₽" },
			{ id: 20, number: "164-2", square: "147", price: "3 790 000 ₽" },
			{ id: 30, number: "89", square: "224", price: "4 750 000 ₽" },
			{ id: 40, number: "305", square: "110", price: "2 920 000 ₽" },
			{ id: 50, number: "104", square: "120", price: "3 130 000 ₽" },
			{ id: 60, number: "299", square: "168", price: "4 380 000 ₽" },
			{ id: 70, number: "231", square: "119", price: "3 130 000 ₽" },
			{ id: 80, number: "160", square: "126", price: "3 260 000 ₽" },
			{ id: 90, number: "212", square: "213", price: "5 350 000 ₽" },
		],
	},
	reducers: {},
});

// export const { toggleSideNav } = projectsSlice.actions;

export default projectsSlice.reducer;
