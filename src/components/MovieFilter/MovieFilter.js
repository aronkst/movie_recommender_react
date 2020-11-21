import React from 'react'
import Card from './../Card/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import SearchIcon from '@material-ui/icons/Search'
import ReplayIcon from '@material-ui/icons/Replay'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((_) => ({
  title: {
    marginTop: '0'
  },
  marginTop: {
    marginTop: '1em'
  }
}))

const MovieFilter = (props) => {
  const classes = useStyles()

  const handleSubmit = async (event) => {
    event.preventDefault()
    props.setParams({
      title: event.target.title.value,
      summary: event.target.summary.value,
      year: event.target.year.value,
      imdb: event.target.imdb.value,
      genre: event.target.genre.value,
      score: event.target.score.value,
      metascore: event.target.metascore.value,
      page: 1
    })
  }

  return (
    <Card>
      <h2 className={classes.title}>MOVIES FILTER</h2>
      <p>FILL IN THE FIELDS BELOW TO FILTER THE MOVIES ON THE SIDE.</p>
      <form onSubmit={handleSubmit}>
        <TextField className={classes.marginTop} fullWidth variant='outlined' InputLabelProps={{ shrink: true }} label='TITLE' name='title' />
        <TextField className={classes.marginTop} fullWidth variant='outlined' InputLabelProps={{ shrink: true }} label='SUMMARY' name='summary' />
        <TextField className={classes.marginTop} fullWidth variant='outlined' InputLabelProps={{ shrink: true }} type='number' label='YEAR' name='year' />
        <TextField className={classes.marginTop} fullWidth variant='outlined' InputLabelProps={{ shrink: true }} label='IMDB' name='imdb' />
        <TextField className={classes.marginTop} fullWidth variant='outlined' InputLabelProps={{ shrink: true }} label='GENRE' name='genre' />
        <TextField className={classes.marginTop} fullWidth variant='outlined' InputLabelProps={{ shrink: true }} type='number' label='SCORE' name='score' />
        <TextField className={classes.marginTop} fullWidth variant='outlined' InputLabelProps={{ shrink: true }} type='number' label='METASCORE' name='metascore' />
        <Grid container spacing={2} className={classes.marginTop}>
          <Grid item xs={6}>
            <Button fullWidth variant='contained' color='secondary' startIcon={<ReplayIcon />} type='reset'>RESET</Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant='contained' color='primary' startIcon={<SearchIcon />} type='submit'>FILTER</Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  )
}

export default MovieFilter
