import React from 'react';
import Card from './../Card/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import ReplayIcon from '@material-ui/icons/Replay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  textfield: {
    marginTop: '1em',
  },
  buttons: {
    marginTop: '1em',
    marginBottom: '1em',
  }
}));

const MovieSearch = (_) => {
  const classes = useStyles();

  return (
    <Card>
      <h2>add watched movie</h2>
      <p>fill in the field below to search the movie that you want to add as watched</p>
      <form action="" method="GET">
        <TextField className={classes.textfield} fullWidth variant="outlined" InputLabelProps={{ shrink: true, }} label="title" />
        <Grid container spacing={2} className={classes.buttons}>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="secondary" startIcon={<ReplayIcon />} type="reset">Reset</Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="primary" startIcon={<SearchIcon />}>Search</Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}

export default MovieSearch;
