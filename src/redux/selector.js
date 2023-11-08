import { createSelector } from "@reduxjs/toolkit";

export const selectorBreeds = (state) => state.breeds.breeds;
export const selectorImages = (state) => state.breeds.images;
export const selectorInfo = (state) => state.breeds.info;
export const selectorName = (state) => state.breeds.name;
export const selectorSort = (state) => state.sort.value;
export const selectorGallery = (state) => state.breeds.gallery;
export const selectorgalleryALL = (state) => state.breeds.galleryBreadAll;
export const selectorVotin = (state) => state.breeds.votin;
export const selectorVotinImages = (state) => state.breeds.votins;
export const selectorFavorite = (state) => state.breeds.favorites;
export const votinSelector = createSelector(
  [selectorVotinImages, selectorFavorite],
  (votin, favorite) => {
    return [...votin, ...favorite];
  }
);
