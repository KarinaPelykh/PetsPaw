import { createSlice } from "@reduxjs/toolkit";
import { getCatsImagesByBreed, getImages } from "./operation";
export const catSlice = createSlice({
  name: "cats",
  initialState: {
    breeds: [],

    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder

      .addCase(getImages.fulfilled, (state, action) => {
        state.breeds = action.payload;
        state.isLoading = false;
      })
      .addCase(getImages.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(getImages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Set the error message
      })
      .addCase(getCatsImagesByBreed.fulfilled, (state, action) => {
        state.breeds = action.payload;
        state.isLoading = false;
      })
      .addCase(getCatsImagesByBreed.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(getCatsImagesByBreed.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Set the error message
      });
  },
});
export const catReducer = catSlice.reducer;
