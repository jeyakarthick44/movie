import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const movieText = "spider";

  const response = await axios.get(
    `http://www.omdbapi.com/?i=tt3896198&apikey=fe392d51&s=${movieText}&type=movie`
  );
  return response.data;
});

export const fetchShows = createAsyncThunk("movies/fetchShows", async () => {
  const seriesText = "Friends";
  const response = await axios.get(
    `http://www.omdbapi.com/?i=tt3896198&apikey=fe392d51&s=${seriesText}&type=series`
  );
  return response.data;
});

export const fetchShowDetail = createAsyncThunk(
  "movies/fetchShowDetail",
  async (imdbID) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=fe392d51&i=${imdbID}&plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  showDetail: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    },
    [fetchShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, showDetail: payload };
    },
  },
});

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getDetail = (state) => state.movies.showDetail;
export default movieSlice.reducer;
