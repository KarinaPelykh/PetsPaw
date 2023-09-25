import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY =
  "live_S1lJoq0pONP3VNf88wMyamr5ZGILYlJmgJI6uF5uWfvzCnwb2tkGrgudlKA355Wf";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";

export const getImages = createAsyncThunk(
  "cats/getAll",
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
  "cats/getName",
  async (breeds_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/images/search? api_key${API_KEY}&breed_id=${breeds_id}&limit=10`
      );
      console.log(data);
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
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const catImgname = createAsyncThunk(
  "cats/catImgname",
  // async (name, { rejectWithValue }) => {
  //   try {
  //     const { data } = await axios.get(
  //       `/images/search?api_key=${API_KEY}&sub_id=${name}`
  //     );
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     return rejectWithValue(error.message);
  //   }
  // }

  async (name, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `/images/search? api_key${API_KEY}&breed_id=${name}&limit=10`
      );
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const sortIncrement = createAsyncThunk(
//   "sort/Name",
//   async (_, { rejectWithValue }) => {
//     try {
//       const = data
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
