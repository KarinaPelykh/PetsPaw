import { configureStore } from "@reduxjs/toolkit";
import { catReducer } from "./catSlice";

export const store = configureStore({
  reducer: {
    breeds: catReducer,
  },
});
