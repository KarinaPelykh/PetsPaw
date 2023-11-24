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

const pending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
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
      })

      .addCase(getCatsImagesByBreed.fulfilled, (state, action) => {
        state.images = action.payload;
      })

      .addCase(infoCat.fulfilled, (state, action) => {
        state.info = action.payload;
      })

      .addCase(catImgname.fulfilled, (state, action) => {
        state.name = action.payload;
      })
      .addCase(galleriIncrement.fulfilled, (state, action) => {
        state.gallery = action.payload;
      })
      .addCase(ImagesByBreedGAllery.fulfilled, (state, action) => {
        state.breedsGallery = action.payload;
      })
      .addCase(getImagesGallery.fulfilled, (state, action) => {
        state.galleryBreadAll = action.payload;
      })
      .addCase(UploadImages.fulfilled, () => {
        // console.log("sucssesful");
      })

      .addCase(Votes.fulfilled, (state, action) => {
        state.votin = action.payload;
      })
      .addCase(VotesPost.fulfilled, () => {
        // console.log("post sucsusful");
      })
      .addCase(GetVotesPost.fulfilled, (state, action) => {
        state.votins = action.payload;
      })
      .addCase(Favorite.fulfilled, () => {
        // state.favorite = action.payload;
      })
      .addCase(FavoriteGet.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })

      .addMatcher((action) => action.type.endsWith("/pending"), pending)
      .addMatcher((action) => action.type.endsWith("/rejected"), rejected);
  },
});
export const catReducer = catSlice.reducer;
