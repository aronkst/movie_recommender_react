import React, { useState } from 'react';
import ListMovies from './../../components/ListMovies/ListMovies';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import Axios from './../../helpers/Axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  buttons: {
    marginTop: '1.5em',
  }
}));

const RecommendedMovies = (_) => {
  const classes = useStyles();

  const [imdb, setIMDb] = useState('');

  const blockMovie = async (imdb) => {
    let form = new FormData();
    form.append('imdb', imdb);
    const data = await Axios('/not-watch', 'POST', form);
    if (!data.hasOwnProperty('error')) {
      setIMDb(imdb);
    }
  };

  const options = (movie) => {
    return (
      <Grid className={classes.buttons} container spacing={2}>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" color="primary" startIcon={<AddIcon />}>ADD</Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" color="secondary" startIcon={<CancelIcon />} onClick={() => blockMovie(movie.IMDb)}>BLOCK</Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <ListMovies title="RECOMMENDED MOVIES" url="/recommended-movies" options={options} removeIMDb={imdb} />
  );
}

export default RecommendedMovies;
