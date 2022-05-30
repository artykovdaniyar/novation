import { createSlice } from "@reduxjs/toolkit";

const portfolioSlide = createSlice({
	name: "portfolio",
	initialState: {
		portfolioList: [
			{ id: 1, address: "1st-arkhangelsk", name: "пер. 1й-Архангельский" },
			{ id: 2, address: "molodezhnaya", name: "ул. Молодежная" },
			{ id: 3, address: "novodmitriyevskaya", name: "ст. Новодмитриевская" },
			{ id: 4, address: "rossiyskiy-4", name: "п. Российский 4" },
			{ id: 5, address: "smolenskaya", name: "ст. Смоленская" },
			{ id: 6, address: "yaroslavskogo", name: "пер. Ярославского" },
			{ id: 7, address: "bratyev-ignatovykh", name: "ул. Братьев Игнатовых" },
			{ id: 8, address: "dzerzhinnskogo", name: "ул. Дзержиннского" },
			{ id: 9, address: "rozovaya", name: "ул. Розовая" },
			{ id: 10, address: "lenina-6", name: "х. Ленина 6" },
			{ id: 11, address: "3y-masterovoy", name: "ул. 3-й Мастеровой" },
			{ id: 12, address: "klenovaya", name: "ул. Кленовая" },
		],
	},
	reducers: {},
});

// export const { toggleSideNav } = portfolioSlide.actions;

export default portfolioSlide.reducer;
