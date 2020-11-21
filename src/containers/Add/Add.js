import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import QueryString from 'query-string'
import Grid from '@material-ui/core/Grid'
import Aux from './../../hoc/Aux/Aux'
import MovieSearch from './../../components/MovieSearch/MovieSearch'
import MovieForm from './../../components/MovieForm/MovieForm'
import Axios from './../../helpers/Axios'
import DialogLoading from './../../components/DialogLoading/DialogLoading'

const Search = (_) => {
  const queryParams = QueryString.parse(useLocation().search)
  const imdb = queryParams.imdb
  const year = queryParams.year
  const title = queryParams.title

  const history = useHistory()

  const [dialog, setDialog] = useState(false)
  const [form, setForm] = useState(null)

  useEffect(() => {
    const addWatchedMovie = async () => {
      if (form && form.date && form.like) {
        setDialog(true)
        const formData = new FormData()
        formData.append('imdb', imdb)
        formData.append('date', form.date)
        formData.append('like', form.like)
        const data = await Axios('/watched-movies', 'POST', formData)
        setDialog(false)
        if (data.hasOwnProperty('error')) {
          alert(data.error) // TODO ERROR
        } else {
          history.push('/')
        }
      }
    }
    addWatchedMovie()
  }, [form, history, imdb])

  return (
    <Aux>
      <h1>ADD: {title} ({year})</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <MovieForm imdb={imdb} setForm={setForm} />
        </Grid>
        <Grid item xs={4}>
          <MovieSearch />
        </Grid>
      </Grid>
      <DialogLoading open={dialog} title='ADDING MOVIE ...' />
    </Aux>
  )
}

export default Search
