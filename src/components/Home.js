import React from "react";
import MovieListing from "../components/MovieListing";
// import { useDispatch } from "react-redux";
// import { addMovies } from "../features/MovieSlice";
const Home = () => {
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
