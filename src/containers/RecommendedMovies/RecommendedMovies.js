import React, { useState } from 'react'
import ListMovies from './../../components/ListMovies/ListMovies'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import CancelIcon from '@material-ui/icons/Cancel'
import AddIcon from '@material-ui/icons/Add'
import Axios from './../../helpers/Axios'
import SimpleDialog from './../../components/SimpleDialog/SimpleDialog'
import Aux from './../../hoc/Aux/Aux'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((_) => ({
  buttons: {
    marginTop: '1.5em'
  }
}))

const RecommendedMovies = (_) => {
  const classes = useStyles()

  const [imdb, setIMDb] = useState('')
  const [openDialog, setOpenDialog] = useState(false)

  const fastAddMovie = async (imdb) => {
    setOpenDialog(true)
    const form = new FormData()
    form.append('imdb', imdb)
    form.append('like', 1)
    const data = await Axios('/watched-movies', 'POST', form)
    if (!data.hasOwnProperty('error')) {
      setIMDb(imdb)
    }
    setOpenDialog(false)
  }

  const blockMovie = async (imdb) => {
    const form = new FormData()
    form.append('imdb', imdb)
    const data = await Axios('/not-watch', 'POST', form)
    if (!data.hasOwnProperty('error')) {
      setIMDb(imdb)
    }
  }

  const options = (movie) => {
    return (
      <Grid className={classes.buttons} container spacing={2}>
        <Grid item xs={4}>
          <Button fullWidth variant='contained' color='primary' startIcon={<AddIcon />} component={Link} to={`/add?imdb=${movie.IMDb}&year=${movie.Year}&title=${movie.Title}`}>ADD</Button>
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth variant='contained' color='primary' startIcon={<AddIcon />} onClick={() => fastAddMovie(movie.IMDb)}>FAST ADD</Button>
        </Grid>
        <Grid item xs={4}>
          <Button fullWidth variant='contained' color='secondary' startIcon={<CancelIcon />} onClick={() => blockMovie(movie.IMDb)}>BLOCK</Button>
        </Grid>
      </Grid>
    )
  }

  return (
    <Aux>
      <ListMovies title='RECOMMENDED MOVIES' url='/recommended-movies' options={options} removeIMDb={imdb} />
      <SimpleDialog open={openDialog} title='ADDING MOVIE' />
    </Aux>
  )
}

export default RecommendedMovies
