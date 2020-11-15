import React, { useState, useEffect } from 'react';
import Aux from './../../hoc/Aux/Aux';
import Movie from './../../components/Movie/Movie';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import MovieSearch from './../../components/MovieSearch/MovieSearch';
import MovieFilter from './../../components/MovieFilter/MovieFilter';
import MoreMovies from './../../components/MoreMovies/MoreMovies';
import Axios from './../../helpers/Axios';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  button: {
    marginTop: '1.5em',
  }
}));

const BlockedMovies = (props) => {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);
  const [blockedMovies, setBlockedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({});
  const [showMoreMovies, setShowMoreMovies] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await Axios('/not-watch', 'GET');
      setBlockedMovies(data);
      setLoading(false);
    };
    getData();
  }, []);

  const handleClick = async (imdb) => {
    let formData = new FormData();
    formData.append('imdb', imdb);
    let data = await Axios('/not-watch', 'DELETE', { data: formData, headers: { 'content-type': 'multipart/form-data' } });
    console.log(data);
    if (!data.hasOwnProperty('error')) {
      let localParams = params;
      localParams.page = page;
      data = await Axios('/not-watch', 'GET', { params: params });
      setBlockedMovies(data);
      setShowMoreMovies(data.lenght > 0);
    }
  };

  return (
    <Aux>
      <h1>BLOCKED MOVIES</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {loading
            ? <CircularProgress />
            : <Aux>
              {blockedMovies.map(movie => {
                return (
                  <Movie key={movie.ID} cover={movie.Cover} title={movie.Title} year={movie.Year} imdb={movie.IMDb} summary={movie.Summary} genres={movie.Genres} score={movie.Score} amountOfVotes={movie.AmountOfVotes} metascore={movie.Metascore}>
                    <Button className={classes.button} fullWidth variant="contained" color="primary" startIcon={<CancelIcon />} onClick={() => handleClick(movie.IMDb)}>UNBLOCK</Button>
                  </Movie>
                );
              })}
              {showMoreMovies && blockedMovies.length >= 10
                ? <MoreMovies url="/not-watch" data={blockedMovies} setData={setBlockedMovies} page={page} setPage={setPage} params={params} setShowMoreMovies={setShowMoreMovies} />
                : null
              }
            </Aux>
          }
        </Grid>
        <Grid item xs={4}>
          <MovieSearch />
          <MovieFilter url="/not-watch" setData={setBlockedMovies} setParams={setParams} setPage={setPage} setShowMoreMovies={setShowMoreMovies} />
        </Grid>
      </Grid>
    </Aux>
  );
}

export default BlockedMovies;
