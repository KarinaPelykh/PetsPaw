import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY =
  "live_S1lJoq0pONP3VNf88wMyamr5ZGILYlJmgJI6uF5uWfvzCnwb2tkGrgudlKA355Wf";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";

export const getImages = createAsyncThunk(
  "images/getAll",
  async (limit, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/breeds", {
        params: {
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
  "images/getName",
  async (breeds_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/images/search? api_key${API_KEY}&breed_ids=${breeds_id}&limit=5`
      );
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
