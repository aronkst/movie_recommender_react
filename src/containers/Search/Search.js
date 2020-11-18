import React, { useState, useEffect } from 'react';
import Aux from './../../hoc/Aux/Aux';
import { useLocation } from "react-router-dom";
import QueryString from 'query-string';
import Axios from './../../helpers/Axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import MovieSearched from './../../components/MovieSearched/MovieSearched';

const Search = (_) => {
  const queryParams = QueryString.parse(useLocation().search);
  const title = queryParams['title'];

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (title) {
        const data = await Axios('/search', 'GET', { params: { title: title } });
        setMovies(data);
      }
      setLoading(false);
    };

    getData();
  }, [title]);

  return (
    <Aux>
      <h1>SEARCHED BY: {queryParams['title']}</h1>
      {loading
        ? <CircularProgress />
        : <Aux>
          {movies.slice(0, 10).map(movie => {
            return <MovieSearched key={movie.IMDb} image={movie.Image} title={movie.Title} year={movie.Year} imdb={movie.IMDb} />
          })}
        </Aux>
      }
    </Aux>
  );
}

export default Search;
