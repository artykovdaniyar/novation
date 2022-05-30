import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
	name: "nav",
	initialState: {
		isSideNavOpened: false,
		navLinks: [
			{ id: 1, name: "Главная", path: "/", tablet: false },
			{ id: 2, name: "Проекты", path: "/projects", tablet: true },
			{ id: 3, name: "Портфолио", path: "/portfolio", tablet: true },
			{ id: 4, name: "Проектирование", path: "/design", tablet: false },
			{ id: 5, name: "Цены", path: "/price", tablet: true },
			{ id: 6, name: "Ипотека", path: "/mortgage", tablet: true },
			{ id: 8, name: "Контакты", path: "/contact", tablet: true },
		],
	},
	reducers: {
		toggleSideNav(state) {
			state.isSideNavOpened = !state.isSideNavOpened;
		},
	},
});

export const { toggleSideNav } = navSlice.actions;

export default navSlice.reducer;
