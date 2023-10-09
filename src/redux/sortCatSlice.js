import { createSlice } from "@reduxjs/toolkit";
// import { sortIncrement } from "./operation";

export const sortCatName = createSlice({
  name: "sort",
  initialState: {
    value: [],
    isLoading: false,
    error: null,
  },

  extraReducer: (builder) => {
    builder;
    // .addCase(sortIncrement.fulfilled, (state, action) => {
    //   state.value = action.payload;
    // })
    // .addCase(sortIncrement.pending, (state) => {
    //   state.isLoading = true;
    // })
    // .addCase(sortIncrement.rejected, (state) => {
    //   state.error = null;
    // });
  },
});
export const sortReducer = sortCatName.reducer;
