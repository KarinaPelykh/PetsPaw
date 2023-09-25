import { createSlice } from "@reduxjs/toolkit";

export const sortCatName = createSlice({
  name: "sort",
  initialState: {
    value: [],
  },
  reducers: {
    addSort(state, action) {
      state.value = action.payload;
    },
  },
});
export const { addSort } = sortCatName.actions;
export const sortReducer = sortCatName.reducer;
