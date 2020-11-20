import 'date-fns';
import React, { useState } from 'react';
import Card from './../../components/Card/Card';
import { useLocation } from "react-router-dom";
import QueryString from 'query-string';
import Axios from './../../helpers/Axios';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from "react-router-dom";
import SimpleDialog from './../../components/SimpleDialog/SimpleDialog';
import Aux from './../../hoc/Aux/Aux';
import MovieSearch from './../../components/MovieSearch/MovieSearch';

const useStyles = makeStyles((_) => ({
  buttons: {
    marginTop: '0.5em',
  }
}));

const Search = (_) => {
  const classes = useStyles();

  const history = useHistory();

  const queryParams = QueryString.parse(useLocation().search);
  const imdb = queryParams['imdb'];
  const year = queryParams['year'];
  const title = queryParams['title'];

  const [loading, setLoading] = useState(false);
  const [date, setDate] = React.useState(new Date());
  const [like, setLike] = React.useState(true);

  const handleDate = (date) => {
    setDate(date);
  };

  const handleLike = (event) => {
    setLike(event.target.checked);
  };

  const dateToString = (date) => {
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    return [date.getFullYear(), (mm>9 ? '' : '0') + mm, (dd>9 ? '' : '0') + dd].join('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let form = new FormData();
    form.append('imdb', imdb);
    form.append('date', dateToString(date));
    form.append('like', like ? '1' : '0');
    const data = await Axios('/watched-movies', 'POST', form);
    setLoading(false);
    if (!data.hasOwnProperty('error')) {
      history.push('/');
    }
  }

  return (
    <Aux>
      <h1>ADD: {title} ({year})</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Card>
            <form onSubmit={handleSubmit}>
              <FormGroup row>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker fullWidth margin="normal" label="WHEN YOU WATCHED THIS MOVIE?" format="yyyy/MM/dd" value={date} onChange={handleDate} KeyboardButtonProps={{ 'aria-label': 'change date' }} name="date" />
                </MuiPickersUtilsProvider>
              </FormGroup>
              <FormGroup row>
                <FormControlLabel control={<Switch checked={like} onChange={handleLike} name="like" />} label="DID YOU LIKE THIS MOVIE?" />
              </FormGroup>
              <Grid container spacing={2} className={classes.buttons}>
                <Grid item xs={6}>
                  <Button fullWidth variant="contained" color="secondary" startIcon={<CancelIcon />} component={Link} to="/">CANCEL</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button fullWidth variant="contained" color="primary" startIcon={<AddIcon />} type="submit">ADD</Button>
                </Grid>
              </Grid>
            </form>
            <SimpleDialog open={loading} title="ADDING MOVIE" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <MovieSearch />
        </Grid>
      </Grid>
    </Aux>
  );
}

export default Search;
