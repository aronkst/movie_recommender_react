import React from 'react';
import Card from './../Card/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((_) => ({
  title: {
    marginTop: '0',
  },
  marginTop: {
    marginTop: '1em',
  },
}));

const MovieSearch = (_) => {
  const classes = useStyles();

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    if (title !== '') {
      history.push(`/search?title=${title}`);
    }
  }

  return (
    <Card>
      <h2 className={classes.title}>ADD WATCHED MOVIE</h2>
      <p>FILL IN THE FIELD BELOW TO SEARCH THE MOVIE THAT YOU WANT TO ADD AS WATCHED.</p>
      <form onSubmit={handleSubmit}>
        <TextField className={classes.marginTop} fullWidth variant="outlined" InputLabelProps={{ shrink: true, }} name="title" label="TITLE" />
        <Button fullWidth variant="contained" color="primary" startIcon={<SearchIcon />} className={classes.marginTop}>Search</Button>
      </form>
    </Card>
  );
}

export default MovieSearch;
