import { createSlice } from "@reduxjs/toolkit";
import { getImages } from "./operation";
export const catSlice = createSlice({
  name: "cats",
  initialState: {
    breeds: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.breeds = action.payload;
      state.isLoading = false;
    });
  },
});
export const catReducer = catSlice.reducer;
