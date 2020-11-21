import React, { useState } from 'react'
import Movies from './Movies'
import Button from '@material-ui/core/Button'
import CancelIcon from '@material-ui/icons/Cancel'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((_) => ({
  button: {
    marginTop: '1.5em'
  }
}))

const WatchedMovies = (_) => {
  const classes = useStyles()

  const [unblock, setUnblock] = useState(null)

  const unblockMovie = async (imdb) => {
    setUnblock(imdb)
  }

  const options = (movie) => {
    return (
      <Button className={classes.button} fullWidth variant='contained' color='primary' startIcon={<CancelIcon />} onClick={() => unblockMovie(movie.IMDb)}>UNBLOCK</Button>
    )
  }

  return (
    <Movies title='BLOCKED MOVIES' url='/blocked-movies' options={options} unblock={unblock} />
  )
}

export default WatchedMovies
