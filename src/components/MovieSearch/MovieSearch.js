import React from 'react';
import Card from './../Card/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import ReplayIcon from '@material-ui/icons/Replay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  title: {
    marginTop: '0',
  },
  textfield: {
    marginTop: '1em',
  },
  buttons: {
    marginTop: '1em',
  }
}));

const MovieSearch = (_) => {
  const classes = useStyles();

  return (
    <Card>
      <h2 className={classes.title}>ADD WATCHED MOVIE</h2>
      <p>FILL IN THE FIELD BELOW TO SEARCH THE MOVIE THAT YOU WANT TO ADD AS WATCHED.</p>
      <form action="" method="GET">
        <TextField className={classes.textfield} fullWidth variant="outlined" InputLabelProps={{ shrink: true, }} label="TITLE" />
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
