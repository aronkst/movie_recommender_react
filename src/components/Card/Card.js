import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  card: {
    padding: '1em',
  },
  root: {
    marginBottom: '1em',
  }
}));

const Card = (props) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.card}>
        {props.children}
      </div>
    </Paper>
  );
}

export default Card;
