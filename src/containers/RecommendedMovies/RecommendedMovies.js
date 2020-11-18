import React from 'react';
import ListMovies from './../../components/ListMovies/ListMovies';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  buttons: {
    marginTop: '1.5em',
  }
}));

const RecommendedMovies = (_) => {
  const classes = useStyles();

  const options = (_) => {
    return (
      <Grid className={classes.buttons} container spacing={2}>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" color="primary" startIcon={<AddIcon />}>ADD</Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="contained" color="secondary" startIcon={<CancelIcon />}>BLOCK</Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <ListMovies title="RECOMMENDED MOVIES" url="/recommended-movies" options={options} />
  );
}

export default RecommendedMovies;
