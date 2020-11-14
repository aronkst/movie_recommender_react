import React from 'react';
import Movie from './../Movie/Movie';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import BlockIcon from '@material-ui/icons/Block';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  buttons: {
    marginTop: '1em',
  },
}));

const MovieRecommended = (_) => {
  const classes = useStyles();

  return (
    <Movie>
      <Grid container spacing={2} className={classes.buttons}>
        <Grid item xs={4}>
          <Button fullWidth variant="contained" color="primary" startIcon={<AddIcon />}>add</Button>
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth variant="contained" color="primary" startIcon={<AddCircleOutlineIcon />}>fast add</Button>
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth variant="contained" color="secondary" startIcon={<BlockIcon />}>block</Button>
        </Grid>
      </Grid>
    </Movie>
  );
}

export default MovieRecommended;
