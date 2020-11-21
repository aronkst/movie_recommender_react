import React, { useState } from 'react'
import Card from './../Card/Card'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add'
import CloseIcon from '@material-ui/icons/Close'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'

const useStyles = makeStyles((_) => ({
  buttons: {
    marginTop: '0.5em'
  }
}))

const MovieForm = (props) => {
  const classes = useStyles()

  const [date, setDate] = useState(new Date())
  const [like, setLike] = useState(true)

  const handleDate = (date) => {
    setDate(date)
  }

  const handleLike = (event) => {
    setLike(event.target.checked)
  }

  const dateToString = (date) => {
    if (date) {
      const mm = date.getMonth() + 1
      const dd = date.getDate()
      return [
        date.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
      ].join('')
    } else {
      return '00000000'
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    props.setForm({
      date: dateToString(date),
      like: like ? '1' : '0'
    })
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <FormGroup row>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              margin='normal'
              label='WHEN YOU WATCHED THIS MOVIE?'
              format='yyyy/MM/dd'
              value={date}
              onChange={handleDate}
              KeyboardButtonProps={{ 'aria-label': 'change date' }}
              name='date'
            />
          </MuiPickersUtilsProvider>
        </FormGroup>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                checked={like}
                onChange={handleLike}
                name='like'
                color='primary'
              />
            }
            label='DID YOU LIKE THIS MOVIE?'
          />
        </FormGroup>
        <Grid container spacing={2} className={classes.buttons}>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              startIcon={<CloseIcon />}
              component={Link}
              to='/'
            >
              CANCEL
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              startIcon={<AddIcon />}
              type='submit'
            >
              ADD
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}

export default MovieForm
