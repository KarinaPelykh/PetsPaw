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
  VotesPost,
  Favorite,
  FavoriteGet,
  GetVotesPost,
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
    votins: [],
    favorite: [],
    favorites: [],
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
        console.log("recves rejected");
      })
      .addCase(Votes.fulfilled, (state, action) => {
        state.votin = action.payload;
      })
      .addCase(VotesPost.fulfilled, (state, action) => {
        console.log("post sucsusful");
        // state.votin = action.payload;
      })
      .addCase(GetVotesPost.fulfilled, (state, action) => {
        state.votins = action.payload;
        console.log(state.votin);
      })
      .addCase(Favorite.fulfilled, () => {
        // state.favorite = action.payload;
      })
      .addCase(FavoriteGet.fulfilled, (state, action) => {
        state.favorites = action.payload;
        console.log(state.favorites);
      });
  },
});
export const catReducer = catSlice.reducer;
