import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (movieName, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://omdbapi.com/?apikey=61e576a4&t=${movieName}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const MovieAPISlice = createSlice({
  name: "movie",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default MovieAPISlice.reducer;
