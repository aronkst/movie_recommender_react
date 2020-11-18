import React, { useState } from 'react';
import ListMovies from './../../components/ListMovies/ListMovies';
import Axios from './../../helpers/Axios';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  button: {
    marginTop: '1.5em',
  }
}));

const BlockedMovies = (_) => {
  const classes = useStyles();

  const [imdb, setIMDb] = useState('');

  const unblockMovie = async (imdb) => {
    let form = new FormData();
    form.append('imdb', imdb);
    const data = await Axios('/not-watch', 'DELETE', { data: form, headers: { 'content-type': 'multipart/form-data' } });
    if (!data.hasOwnProperty('error')) {
      setIMDb(imdb);
    }
  };

  const options = (movie) => {
    return (
      <Button className={classes.button} fullWidth variant="contained" color="primary" startIcon={<CancelIcon />} onClick={() => unblockMovie(movie.IMDb)}>UNBLOCK</Button>
    );
  }

  return (
    <ListMovies title="BLOCKED MOVIES" url="/not-watch" options={options} removeIMDb={imdb} />
  );
}

export default BlockedMovies;
