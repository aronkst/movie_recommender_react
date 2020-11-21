import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import QueryString from 'query-string'
import Grid from '@material-ui/core/Grid'
import Aux from './../hoc/Aux'
import MovieSearch from './../components/MovieSearch'
import MovieForm from './../components/MovieForm'
import Axios from './../helpers/Axios'
import DialogLoading from './../components/DialogLoading'
import DialogError from './../components/DialogError'

const Search = (_) => {
  const queryParams = QueryString.parse(useLocation().search)
  const imdb = queryParams.imdb
  const year = queryParams.year
  const title = queryParams.title

  const history = useHistory()

  const [dialogLoading, setDialogLoading] = useState(false)
  const [dialogError, setDialogError] = useState({
    open: false,
    message: ''
  })
  const [form, setForm] = useState(null)

  useEffect(() => {
    const addWatchedMovie = async () => {
      if (form && form.date && form.like) {
        setDialogLoading(true)
        const formData = new FormData()
        formData.append('imdb', imdb)
        formData.append('date', form.date)
        formData.append('like', form.like)
        const data = await Axios('/watched-movies', 'POST', formData)
        setDialogLoading(false)
        if (data.hasOwnProperty('error')) {
          setDialogError({
            open: true,
            message: data.error
          })
        } else {
          history.push('/')
        }
      }
    }
    addWatchedMovie()
  }, [form, history, imdb])

  return (
    <Aux>
      <h1>
        ADD: {title} ({year})
      </h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <MovieForm imdb={imdb} setForm={setForm} />
        </Grid>
        <Grid item xs={4}>
          <MovieSearch />
        </Grid>
      </Grid>
      <DialogLoading open={dialogLoading} title='ADDING MOVIE ...' />
      <DialogError
        open={dialogError.open}
        title='ERROR'
        message={dialogError.message}
        setError={setDialogError}
      />
    </Aux>
  )
}

export default Search
