import { createSlice } from "@reduxjs/toolkit";
import {
  catImgname,
  getCatsImagesByBreed,
  getImages,
  infoCat,
  galleriIncrement,
  ImagesByBreedGAllery,
  getImagesGallery,
  UploadImages,
  Votes,
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
    breedsGallery: [],
    galleryBreadAll: [],
    votin: [],
  },

  extraReducers: (builder) => {
    builder

      .addCase(getImages.fulfilled, (state, action) => {
        state.breeds = action.payload;
        state.isLoading = false;
      })

      .addCase(getCatsImagesByBreed.fulfilled, (state, action) => {
        state.images = action.payload;
        state.isLoading = false;
      })

      .addCase(infoCat.fulfilled, (state, action) => {
        state.info = action.payload;

        state.isLoading = false;
      })

      .addCase(catImgname.fulfilled, (state, action) => {
        state.name = action.payload;

        state.isLoading = false;
      })
      .addCase(galleriIncrement.fulfilled, (state, action) => {
        state.gallery = action.payload;

        state.isLoading = false;
      })
      .addCase(ImagesByBreedGAllery.fulfilled, (state, action) => {
        state.breedsGallery = action.payload;
        state.isLoading = false;
      })
      .addCase(getImagesGallery.fulfilled, (state, action) => {
        state.galleryBreadAll = action.payload;
        state.isLoading = false;
      })
      .addCase(UploadImages.fulfilled, () => {
        console.log("sucssesful");
      })
      .addCase(UploadImages.rejected, () => {
        // alert("Sorry! There was a server error,please try to download later ");
        console.log("recves rejected");
      })
      .addCase(Votes.fulfilled, (state, action) => {
        state.votin = action.payload;
      });
  },
});
export const catReducer = catSlice.reducer;
