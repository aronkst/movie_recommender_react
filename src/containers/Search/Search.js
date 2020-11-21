import React, { useState, useEffect } from 'react'
import Aux from './../../hoc/Aux/Aux'
import { useLocation } from 'react-router-dom'
import QueryString from 'query-string'
import Axios from './../../helpers/Axios'
import CircularProgress from '@material-ui/core/CircularProgress'
import MovieSearched from './../../components/MovieSearched/MovieSearched'
import MovieSearch from './../../components/MovieSearch/MovieSearch'
import Grid from '@material-ui/core/Grid'
import DialogError from './../../components/DialogError/DialogError'

const Search = (_) => {
  const queryParams = QueryString.parse(useLocation().search)
  const title = queryParams.title

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [dialogError, setDialogError] = useState({
    open: false,
    message: ''
  })

  useEffect(() => {
    const getData = async () => {
      if (title) {
        setLoading(true)
        const data = await Axios('/search', 'GET', {
          params: { title: title }
        })
        setLoading(false)
        if (data.hasOwnProperty('error')) {
          setDialogError({
            open: true,
            message: data.error
          })
        } else {
          setMovies(data.slice(0, 20))
        }
      }
    }
    getData()
  }, [title])

  return (
    <Aux>
      <h1>SEARCHED BY: {title}</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Aux>
              {movies.map((movie) => {
                return (
                  <MovieSearched
                    key={movie.IMDb}
                    image={movie.Image}
                    title={movie.Title}
                    year={movie.Year}
                    imdb={movie.IMDb}
                  />
                )
              })}
            </Aux>
          )}
        </Grid>
        <Grid item xs={4}>
          <MovieSearch title={title} />
        </Grid>
      </Grid>
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
