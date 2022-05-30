import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./reducers/navSlice";
import projectsReducer from "./reducers/projectsSlice";
import portfolioReducer from "./reducers/portfolioSlide";
import stylesReduser from "./reducers/stylesSlide";
import sideInfoReduser from "./reducers/sideInfoSlice";

const store = configureStore({
	reducer: {
		nav: navReducer,
		projects: projectsReducer,
		portfolio: portfolioReducer,
		styles: stylesReduser,
		sideInfo: sideInfoReduser,
	},
});
export default store;
