import React from 'react';
import Card from './../Card/Card';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  imdb: {
    color: 'rgba(0, 0, 0, 0.54)',
  },
  imdbScore: {
    backgroundColor: '#f8c634',
    color: '#000000',
    marginRight: '1em',
  },
  marginRight: {
    marginRight: '1em',
  },
  metascore: {
    backgroundColor: '#333333',
    color: '#fefefe',
    marginRight: '1em',
  },
}));

const Movie = (props) => {
  const classes = useStyles();

  return (
    <Card>
      <img src="" alt="Movie" />
      <h2>Movie (2020) <span className={classes.imdb}>im12354353</span></h2>
      <p>Summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary summary</p>
      <p>Action, Comedy, Suspense</p>
      <Chip className={classes.imdbScore} label={7.5} />
      <Chip className={classes.marginRight} label={75000} />
      <Chip className={classes.metascore} label={75} />
      {props.children}
    </Card>
  );
}

export default Movie;
