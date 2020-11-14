import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '1em',
  }
}));

const Card = (props) => {
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <div className={classes.card}>
        {props.children}
      </div>
    </Paper>
  );
}

export default Card;
