import React, { useState } from 'react'
import MovieList from './../components/MovieList'
import Button from '@material-ui/core/Button'
import BlockIcon from '@material-ui/icons/Block'
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
      <Button
        className={classes.button}
        fullWidth
        variant='contained'
        color='secondary'
        startIcon={<BlockIcon />}
        onClick={() => unblockMovie(movie.IMDb)}
      >
        UNBLOCK
      </Button>
    )
  }

  return (
    <MovieList
      title='BLOCKED MOVIES'
      url='/blocked-movies'
      options={options}
      unblock={unblock}
    />
  )
}

export default WatchedMovies
