import React from 'react';
import Card from './../Card/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  title: {
    marginTop: '0.5em',
  },
  imdb: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
}));

const MovieSearched = (_) => {
  const classes = useStyles();

  return (
    <Card>
      <img src="https://m.media-amazon.com/images/M/MV5BOWJiMTNiNDktZGM1ZS00NmU3LWFiNmQtNjc0ZjNlMTU5ZjAzXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX32_CR0,0,32,44_AL_.jpg" alt="Movie" />
      <h3 className={classes.title}>Movie (2020) <span className={classes.imdb}>im12354353</span></h3>
      <Grid container spacing={2} className={classes.buttons}>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" color="primary" component={Link} startIcon={<AddIcon />}>Add</Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default MovieSearched;
