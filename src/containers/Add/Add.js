import 'date-fns'
import React from 'react'
import { useLocation } from 'react-router-dom'
import QueryString from 'query-string'
import Grid from '@material-ui/core/Grid'
import Aux from './../../hoc/Aux/Aux'
import MovieSearch from './../../components/MovieSearch/MovieSearch'
import WatchedMovieAdd from './../../components/WatchedMovieAdd/WatchedMovieAdd'

const Search = (_) => {
  const queryParams = QueryString.parse(useLocation().search)
  const imdb = queryParams.imdb
  const year = queryParams.year
  const title = queryParams.title

  return (
    <Aux>
      <h1>ADD: {title} ({year})</h1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <WatchedMovieAdd imdb={imdb} />
        </Grid>
        <Grid item xs={4}>
          <MovieSearch />
        </Grid>
      </Grid>
    </Aux>
  )
}

export default Search
