import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://api.thecatapi.com/v1/breeds?api_key";
axios.defaults.params = {
  limit: 20,
  api_key:
    "live_S1lJoq0pONP3VNf88wMyamr5ZGILYlJmgJI6uF5uWfvzCnwb2tkGrgudlKA355Wf",
};

export const getImages = createAsyncThunk(
  "images",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/search");

      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
