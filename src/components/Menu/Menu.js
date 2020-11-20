import React from 'react';
import Aux from './../../hoc/Aux/Aux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  typography: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  button: {
    marginLeft: '1em',
  },
}));

const Menu = (_) => {
  const classes = useStyles();

  return (
    <Aux>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.typography} variant="h6" noWrap>movie_recommender</Typography>
          <Button className={classes.button} color="inherit" component={Link} to="/watched">WATCHED</Button>
          <Button className={classes.button} color="inherit" component={Link} to="/">RECOMMENDED</Button>
          <Button className={classes.button} color="inherit" component={Link} to="/blocked">BLOCKED</Button>
        </Toolbar>
      </AppBar>
    </Aux>
  );
}

export default Menu;
