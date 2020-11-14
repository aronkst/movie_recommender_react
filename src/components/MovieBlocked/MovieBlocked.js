import React from 'react';
import Movie from './../Movie/Movie';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  buttons: {
    marginTop: '1em',
  },
}));

const MovieBlocked = (_) => {
  const classes = useStyles();

  return (
    <Movie>
      <Grid container spacing={2} className={classes.buttons}>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary" startIcon={<KeyboardBackspaceIcon />}>unblock</Button>
        </Grid>
      </Grid>
    </Movie>
  );
}

export default MovieBlocked;
