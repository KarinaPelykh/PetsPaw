import { configureStore } from "@reduxjs/toolkit";
import { catReducer } from "./catSlice";
import { filterReducer } from "./filterCat";
export const store = configureStore({
  reducer: {
    breeds: catReducer,
    filter: filterReducer,
  },
});
