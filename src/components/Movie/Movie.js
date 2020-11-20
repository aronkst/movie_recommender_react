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
  amount_of_votes: {
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
      <img src={`data:image/jpeg;charset=utf-8;base64,${props.cover}`} alt={props.title} />
      <h2>{props.title} ({props.year}) <span className={classes.imdb}>{props.imdb}</span></h2>
      <p>{props.summary}</p>
      <p>{props.genres.split(',').join(', ')}</p>
      <Chip className={classes.imdbScore} label={props.score.toLocaleString()} />
      <Chip className={classes.amount_of_votes} label={props.amountOfVotes.toLocaleString()} />
      <Chip className={classes.metascore} label={props.metascore} />
      {props.children}
    </Card>
  );
}

export default Movie;
