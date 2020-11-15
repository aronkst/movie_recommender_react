import React, { useState, useEffect } from 'react';
import Aux from './../../hoc/Aux/Aux';
import Movie from './../../components/Movie/Movie';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import MovieSearch from './../../components/MovieSearch/MovieSearch';
import MovieFilter from './../../components/MovieFilter/MovieFilter';
import MoreMovies from './../../components/MoreMovies/MoreMovies';
import Axios from './../../helpers/Axios';

const WatchedMovies = (_) => {
  const [loading, setLoading] = useState(true);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({});
  const [showMoreMovies, setShowMoreMovies] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await Axios('/watched-movies', 'GET');
      setWatchedMovies(data);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <Aux>
      <h1>WATCHED MOVIES</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {loading
            ? <CircularProgress />
            : <Aux>
              {watchedMovies.map(movie => {
                return <Movie key={movie.ID} cover={movie.Cover} title={movie.Title} year={movie.Year} imdb={movie.IMDb} summary={movie.Summary} genres={movie.Genres} score={movie.Score} amountOfVotes={movie.AmountOfVotes} metascore={movie.Metascore} />
              })}
              {showMoreMovies && watchedMovies.length >= 10
                ? <MoreMovies url="/watched-movies" data={watchedMovies} setData={setWatchedMovies} page={page} setPage={setPage} params={params} setShowMoreMovies={setShowMoreMovies} />
                : null
              }
            </Aux>
          }
        </Grid>
        <Grid item xs={4}>
          <MovieSearch />
          <MovieFilter url="/watched-movies" setData={setWatchedMovies} setParams={setParams} setPage={setPage} setShowMoreMovies={setShowMoreMovies} />
        </Grid>
      </Grid>
    </Aux>
  );
}

export default WatchedMovies;
