import { configureStore } from "@reduxjs/toolkit";
import { catReducer } from "./catSlice";
import { sortReducer } from "./sortCat";

export const store = configureStore({
  reducer: {
    breeds: catReducer,
    sort: sortReducer,
  },
});
