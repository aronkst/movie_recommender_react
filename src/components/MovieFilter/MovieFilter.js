import React from 'react';
import Card from './../Card/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import ReplayIcon from '@material-ui/icons/Replay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textfield: {
    marginTop: '1em',
  },
  buttons: {
    marginTop: '1em',
    marginBottom: '1em',
  }
}));

const MovieFilter = (_) => {
  const classes = useStyles();

  return (
    <Card>
      <h2>movies filter</h2>
      <p>fill in the fields below to filter the movies on the side</p>
      <form action="" method="GET">
        <TextField className={classes.textfield} fullWidth variant="outlined" InputLabelProps={{shrink: true,}} label="Title" />
        <TextField className={classes.textfield} fullWidth variant="outlined" InputLabelProps={{shrink: true,}} label="Summary" />
        <TextField className={classes.textfield} fullWidth variant="outlined" InputLabelProps={{shrink: true,}} type="number" label="Year" />
        <TextField className={classes.textfield} fullWidth variant="outlined" InputLabelProps={{shrink: true,}} label="IMDb" />
        <TextField className={classes.textfield} fullWidth variant="outlined" InputLabelProps={{shrink: true,}} label="Genre" />
        <TextField className={classes.textfield} fullWidth variant="outlined" InputLabelProps={{shrink: true,}} type="number" label="Score" />
        <TextField className={classes.textfield} fullWidth variant="outlined" InputLabelProps={{shrink: true,}} type="number" label="Metascore" />
        <Grid container spacing={2} className={classes.buttons}>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="secondary" startIcon={<ReplayIcon />} type="reset">Reset</Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="primary" startIcon={<SearchIcon />}>Filter</Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}

export default MovieFilter;
