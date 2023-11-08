import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY =
  "live_S1lJoq0pONP3VNf88wMyamr5ZGILYlJmgJI6uF5uWfvzCnwb2tkGrgudlKA355Wf";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";

export const getImages = createAsyncThunk(
  "cats/getAll",
  async ({ limit, order }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/breeds", {
        params: {
          order,
          limit,
          api_key: API_KEY,
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCatsImagesByBreed = createAsyncThunk(
  "cats/getName",
  async (breeds_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/images/search?api_key=${API_KEY}&breed_id=${breeds_id}&limit=10`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const infoCat = createAsyncThunk(
  "cats/getinfo",
  async (breeds_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/images/search?api_key=${API_KEY}&breed_ids=${breeds_id}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const catImgname = createAsyncThunk(
  "cats/catImgname",
  async (searchQuery, { rejectWithValue }) => {
    console.log(searchQuery);
    try {
      const { data } = await axios.get(
        `/images/search?breed_ids=${searchQuery}&limit=5&api_key=${API_KEY}`
        // `breeds/search?q=${searchQuery}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const galleriIncrement = createAsyncThunk(
  "sort/Name",
  async ({ order, limit, type }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/images/search?api_key=${API_KEY}&order=${order}&limit=${limit}&mime_types=${type}`
      );

      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getImagesBreeds = createAsyncThunk(
  "cats/getAll",
  async (breed_ids, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/breeds", {
        params: {
          breed_ids,
          api_key: API_KEY,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getImagesGallery = createAsyncThunk(
  "cats/getAllGAllery",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/breeds", {
        params: {
          api_key: API_KEY,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const ImagesByBreedGAllery = createAsyncThunk(
  "cats/getImagesGallery",
  async (breeds_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/images/search?api_key=${API_KEY}&breed_id=${breeds_id}&limit=10`
      );
      // console.log("Gallery======", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const UploadImages = createAsyncThunk(
  "upload/images",
  async (formData, { rejectWithValue }) => {
    console.log(formData);
    try {
      const { data } = await axios.post(
        `/images/upload?api_key=${API_KEY}`,
        formData
      );
      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const Votes = createAsyncThunk(
  "votes/getVotes",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/images/search?api_key=${API_KEY}&limit=25`
      );
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const VotesPost = createAsyncThunk(
  "votes/post",
  async ({ value, image_id }, { rejectWithValue }) => {
    console.log(value, image_id);
    try {
      const { data } = await axios.post(`/votes?api_key=${API_KEY}`, {
        image_id: image_id,
        value: value,
      });
      console.log("votes/post", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetVotesPost = createAsyncThunk(
  "votes/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/votes?api_key=${API_KEY}&limit=3&order=desc`
      );
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const Favorite = createAsyncThunk(
  "favorite/post",
  async (image_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/favourites?api_key=${API_KEY}`, {
        image_id,
      });
      // console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const FavoriteGet = createAsyncThunk(
  "favorite/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/favourites?api_key=${API_KEY}&limit=3&order=desc`
      );
      // console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
