import React, { useEffect } from "react";
import MovieListing from "../components/MovieListing";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMovies } from "../features/MovieSlice";
const Home = () => {
  const movieText = "harry";
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    const response = await axios
      .get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=fe392d51&s=${movieText}&type=movie`
      )
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
    dispatch(addMovies(response.data));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
