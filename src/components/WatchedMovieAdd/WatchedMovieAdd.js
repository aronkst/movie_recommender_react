import React, { useState } from 'react'
import Card from './../Card/Card'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add'
import CancelIcon from '@material-ui/icons/Cancel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import SimpleDialog from './../../components/SimpleDialog/SimpleDialog'
import FormGroup from '@material-ui/core/FormGroup'
import Axios from './../../helpers/Axios'

const useStyles = makeStyles((_) => ({
  buttons: {
    marginTop: '0.5em'
  }
}))

const WatchedMovieAdd = (props) => {
  const classes = useStyles()

  const history = useHistory()

  const [loading, setLoading] = useState(false)
  const [date, setDate] = React.useState(new Date())
  const [like, setLike] = React.useState(true)

  const handleDate = (date) => {
    setDate(date)
  }

  const handleLike = (event) => {
    setLike(event.target.checked)
  }

  const dateToString = (date) => {
    const mm = date.getMonth() + 1
    const dd = date.getDate()
    return [date.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const form = new FormData()
    form.append('imdb', props.imdb)
    form.append('date', dateToString(date))
    form.append('like', like ? '1' : '0')
    const data = await Axios('/watched-movies', 'POST', form)
    setLoading(false)
    if (!data.hasOwnProperty('error')) {
      history.push('/')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <FormGroup row>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker fullWidth margin='normal' label='WHEN YOU WATCHED THIS MOVIE?' format='yyyy/MM/dd' value={date} onChange={handleDate} KeyboardButtonProps={{ 'aria-label': 'change date' }} name='date' />
          </MuiPickersUtilsProvider>
        </FormGroup>
        <FormGroup row>
          <FormControlLabel control={<Switch checked={like} onChange={handleLike} name='like' />} label='DID YOU LIKE THIS MOVIE?' />
        </FormGroup>
        <Grid container spacing={2} className={classes.buttons}>
          <Grid item xs={6}>
            <Button fullWidth variant='contained' color='secondary' startIcon={<CancelIcon />} component={Link} to='/'>CANCEL</Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant='contained' color='primary' startIcon={<AddIcon />} type='submit'>ADD</Button>
          </Grid>
        </Grid>
      </form>
      <SimpleDialog open={loading} title='ADDING MOVIE' />
    </Card>
  )
}

export default WatchedMovieAdd
