import React, { useState, useEffect } from 'react';
import Aux from './../../hoc/Aux/Aux';
import Movie from './../Movie/Movie';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import MovieSearch from './../MovieSearch/MovieSearch';
import MovieFilter from './../MovieFilter/MovieFilter';
import MoreMovies from './../MoreMovies/MoreMovies';
import Axios from './../../helpers/Axios';

const ListMovies = (props) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({});
  const [moreMovies, setMoreMovies] = useState(true);

  useEffect(() => { // TODO UPDATE WITH PARAMS
    const getData = async () => {
      const data = await Axios(props.url, 'GET');
      setMovies(data);
      setLoading(false);
    };

    getData();
  }, [props]);

  return (
    <Aux>
      <h1>{props.title}</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {loading
            ? <CircularProgress />
            : <Aux>
              {movies.map(movie => {
                return (
                  <Movie key={movie.ID} cover={movie.Cover} title={movie.Title} year={movie.Year} imdb={movie.IMDb} summary={movie.Summary} genres={movie.Genres} score={movie.Score} amountOfVotes={movie.AmountOfVotes} metascore={movie.Metascore}>
                    {props.options ? props.options(movie) : null}
                  </Movie>
                );
              })}
              {moreMovies && movies.length >= 10
                ? <MoreMovies url={props.url} setMovies={setMovies} page={page} setPage={setPage} params={params} setMoreMovies={setMoreMovies} />
                : null
              }
            </Aux>
          }
        </Grid>
        <Grid item xs={4}>
          <MovieSearch />
          <MovieFilter url={props.url} setMovies={setMovies} setParams={setParams} setPage={setPage} setMoreMovies={setMoreMovies} />
        </Grid>
      </Grid>
    </Aux>
  );
}

export default ListMovies;
