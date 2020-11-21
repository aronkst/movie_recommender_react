import React, { useState } from 'react'
import Movies from './Movies'
import Button from '@material-ui/core/Button'
import BlockIcon from '@material-ui/icons/Block'
import AddIcon from '@material-ui/icons/Add'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((_) => ({
  buttons: {
    marginTop: '1.5em'
  }
}))

const RecommendedMovies = (_) => {
  const classes = useStyles()

  const [block, setBlock] = useState(null)
  const [fastAdd, setFastAdd] = useState(null)

  const blockMovie = async (imdb) => {
    setBlock(imdb)
  }

  const fastAddMovie = async (imdb) => {
    setFastAdd(imdb)
  }

  const options = (movie) => {
    return (
      <Grid className={classes.buttons} container spacing={2}>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            startIcon={<AddIcon />}
            component={Link}
            to={`/add?imdb=${movie.IMDb}&year=${movie.Year}&title=${movie.Title}`}
          >
            ADD
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            startIcon={<AddIcon />}
            onClick={() => fastAddMovie(movie.IMDb)}
          >
            FAST ADD
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            fullWidth
            variant='contained'
            color='secondary'
            startIcon={<BlockIcon />}
            onClick={() => blockMovie(movie.IMDb)}
          >
            BLOCK
          </Button>
        </Grid>
      </Grid>
    )
  }

  return (
    <Movies
      title='RECOMMENDED MOVIES'
      url='/recommended-movies'
      options={options}
      block={block}
      fastAdd={fastAdd}
    />
  )
}

export default RecommendedMovies
