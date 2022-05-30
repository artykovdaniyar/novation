import { createSlice } from "@reduxjs/toolkit";

const stylesSlide = createSlice({
	name: "style",
	initialState: {
		classicList: [
			{ id: 1, number: "156" },
			{ id: 2, number: "164-2" },
			{ id: 3, number: "185" },
			{ id: 4, number: "230" },
			{ id: 5, number: "И-30" },
			{ id: 6, number: "146" },
			{ id: 7, number: "144" },
		],
		modernList: [
			{ id: 1, number: "И-72" },
			{ id: 2, number: "И-73" },
			{ id: 3, number: "И-75" },
			{ id: 4, number: "И-60" },
			{ id: 5, number: "И-62" },
			{ id: 6, number: "268" },
			{ id: 7, number: "233" },
			{ id: 8, number: "N-51" },
			{ id: 9, number: "N-52" },
			{ id: 10, number: "N-54" },
			{ id: 11, number: "77" },
			{ id: 12, number: "95" },
		],
		chaletList: [
			{ id: 1, number: "234" },
			{ id: 2, number: "18" },
			{ id: 3, number: "247" },
			{ id: 4, number: "94" },
			{ id: 5, number: "145" },
			{ id: 6, number: "268" },
			{ id: 7, number: "19" },
			{ id: 8, number: "84" },
			{ id: 9, number: "110" },
		],
		wrightList: [
			{ id: 1, number: "265" },
			{ id: 2, number: "306-1" },
			{ id: 3, number: "306-2" },
			{ id: 4, number: "212" },
			{ id: 5, number: "73" },
			{ id: 6, number: "251" },
			{ id: 7, number: "76" },
			{ id: 8, number: "102" },
			{ id: 9, number: "272" },
			{ id: 10, number: "121" },
			{ id: 11, number: "164-1" },
			{ id: 12, number: "196" },
		],
		americanList: [
			{ id: 1, number: "242" },
			{ id: 2, number: "213" },
			{ id: 3, number: "119" },
			{ id: 4, number: "235" },
			{ id: 5, number: "222" },
			{ id: 6, number: "271" },
			{ id: 7, number: "58" },
		],
		englishList: [
			{ id: 1, number: "244" },
			{ id: 2, number: "56" },
			{ id: 3, number: "124" },
			{ id: 4, number: "250" },
			{ id: 5, number: "189" },
			{ id: 6, number: "70" },
			{ id: 7, number: "N-34" },
		],
		mediterraneanList: [
			{ id: 1, number: "221" },
			{ id: 2, number: "N-8" },
			{ id: 3, number: "N-43" },
			{ id: 4, number: "108" },
		],
	},
	reducers: {},
});

// export const { toggleSideNav } = stylesSlide.actions;

export default stylesSlide.reducer;
