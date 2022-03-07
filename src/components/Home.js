import React, { useEffect } from "react";
import MovieListing from "../components/MovieListing";

import { useDispatch } from "react-redux";
import { fetchMovies, fetchShows } from "../features/MovieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchShows());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
