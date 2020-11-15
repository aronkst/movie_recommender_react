import React, { useState } from 'react';
import Card from './../Card/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import ReplayIcon from '@material-ui/icons/Replay';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((_) => ({
  buttons: {
    marginTop: '1em',
    marginBottom: '1em',
  },
  form: {
    marginTop: '2em',
  }
}));

const WatchedMovieAdd = (_) => {
  const classes = useStyles();

  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <Card>
      <h2>add watched movie</h2>
      <p>fill in the fields below to add a new watched movie</p>
      <form action="" method="GET" className={classes.form}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker label="DateTimePicker" inputVariant="outlined" value={date} fullWidth InputLabelProps={{ shrink: true, }} onChange={handleDateChange} />
        </MuiPickersUtilsProvider>
        <FormControlLabel control={ <Switch color="primary" /> } label="You like this movie?" />
        <Grid container spacing={2} className={classes.buttons}>
          <Grid item xs={6}>
            <Button fullWidth className={classes.button} variant="contained" color="secondary" startIcon={<ReplayIcon />} component={Link} to="/">Cancel</Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="primary" startIcon={<SearchIcon />}>Filter</Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}

export default WatchedMovieAdd;
