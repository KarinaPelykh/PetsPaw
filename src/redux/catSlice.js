import { createSlice } from "@reduxjs/toolkit";
import {
  catImgname,
  getCatsImagesByBreed,
  getImages,
  infoCat,
  galleriIncrement,
} from "./operation";
export const catSlice = createSlice({
  name: "cats",
  initialState: {
    breeds: [],
    images: [],
    info: [],
    name: [],
    gallery: [],
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
        state.images = action.payload;
        state.isLoading = false;
      })
      .addCase(getCatsImagesByBreed.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(getCatsImagesByBreed.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Set the error message
      })
      .addCase(infoCat.fulfilled, (state, action) => {
        state.info = action.payload;

        state.isLoading = false;
      })
      .addCase(infoCat.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(infoCat.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(catImgname.fulfilled, (state, action) => {
        state.name = action.payload;

        state.isLoading = false;
      })
      .addCase(galleriIncrement.fulfilled, (state, action) => {
        state.gallery = action.payload;

        state.isLoading = false;
      });
  },
});
export const catReducer = catSlice.reducer;
