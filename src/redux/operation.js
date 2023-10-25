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
      console.log(data);
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
        `/images/search? api_key${API_KEY}&breed_id=${breeds_id}&limit=10`
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
    console.log("searchQuery=======", searchQuery);
    try {
      const { data } = await axios.get(
        // `/images/search?api_key${API_KEY}&breed_ids=${name}&limit=1`
        `/images/search?breed_ids=${searchQuery}&limit=5&api_key=${API_KEY}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const sortIncrement = createAsyncThunk(
//   "sort/Name",
//   async ({ order, limit }, { rejectWithValue }) => {
//     c
//     try {
//       const { data } = await axios.get("/breeds", {
//         params: { api_key: API_KEY, order, limit },
//       });
//       console.log(data);

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
