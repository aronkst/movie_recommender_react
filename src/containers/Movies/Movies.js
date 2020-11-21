import React, { useState, useEffect } from 'react'
import Aux from './../../hoc/Aux/Aux'
import Movie from './../../components/Movie/Movie'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import MovieSearch from './../../components/MovieSearch/MovieSearch'
import MovieFilter from './../../components/MovieFilter/MovieFilter'
import Pagination from './../../components/Pagination/Pagination'
import Axios from './../../helpers/Axios'
import DialogLoading from './../../components/DialogLoading/DialogLoading'
import DialogError from './../../components/DialogError/DialogError'
import { useLocation } from 'react-router-dom'
import QueryString from 'query-string'

const Movies = (props) => {
  const queryParams = QueryString.parse(useLocation().search)

  const [loading, setLoading] = useState(true)
  const [dialogLoading, setDialogLoading] = useState(false)
  const [dialogError, setDialogError] = useState({
    open: false,
    message: ''
  })
  const [movies, setMovies] = useState([])
  const [params, setParams] = useState({
    title: queryParams.title ? queryParams.title : undefined,
    summary: queryParams.summary ? queryParams.summary : undefined,
    year: queryParams.year ? queryParams.year : undefined,
    imdb: queryParams.imdb ? queryParams.imdb : undefined,
    genre: queryParams.genre ? queryParams.genre : undefined,
    score: queryParams.score ? queryParams.score : undefined,
    metascore: queryParams.metascore ? queryParams.metascore : undefined,
    page: queryParams.page ? queryParams.page : 1
  })
  const [maxPages, setMaxPages] = useState(1)

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true)
      const data = await Axios(props.url, 'GET', { params: params })
      setMovies(data.Movies)
      setMaxPages(data.Pages)
      setLoading(false)
      window.scrollTo(0, 0)
    }
    getMovies()
  }, [props.url, params])

  useEffect(() => {
    const unblockMovie = async () => {
      if (props.unblock) {
        const form = new FormData()
        form.append('imdb', props.unblock)
        const data = await Axios('/blocked-movies', 'DELETE', {
          data: form,
          headers: { 'content-type': 'multipart/form-data' }
        })
        if (data.hasOwnProperty('error')) {
          setDialogError({
            open: true,
            message: data.error
          })
        } else {
          setMovies((prevMovies) => {
            return prevMovies.filter((movie) => movie.IMDb !== props.unblock)
          })
        }
      }
    }
    unblockMovie()
  }, [props.unblock])

  useEffect(() => {
    const blockMovie = async () => {
      if (props.block) {
        const form = new FormData()
        form.append('imdb', props.block)
        const data = await Axios('/blocked-movies', 'POST', form)
        if (data.hasOwnProperty('error')) {
          setDialogError({
            open: true,
            message: data.error
          })
        } else {
          setMovies((prevMovies) => {
            return prevMovies.filter((movie) => movie.IMDb !== props.block)
          })
        }
      }
    }
    blockMovie()
  }, [props.block])

  useEffect(() => {
    const fastAddMovie = async () => {
      if (props.fastAdd) {
        setDialogLoading(true)
        const form = new FormData()
        form.append('imdb', props.fastAdd)
        form.append('date', '00000000')
        form.append('like', '1')
        const data = await Axios('/watched-movies', 'POST', form)
        setDialogLoading(false)
        if (data.hasOwnProperty('error')) {
          setDialogError({
            open: true,
            message: data.error
          })
        } else {
          setMovies((prevMovies) => {
            return prevMovies.filter((movie) => movie.IMDb !== props.fastAdd)
          })
        }
      }
    }
    fastAddMovie()
  }, [props.fastAdd])

  return (
    <Aux>
      <h1>{props.title}</h1>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          {loading ? (
            <CircularProgress />
          ) : (
            <Aux>
              {movies.map((movie) => {
                return (
                  <Movie
                    key={movie.ID}
                    cover={movie.Cover}
                    title={movie.Title}
                    year={movie.Year}
                    imdb={movie.IMDb}
                    summary={movie.Summary}
                    genres={movie.Genres}
                    score={movie.Score}
                    amountOfVotes={movie.AmountOfVotes}
                    metascore={movie.Metascore}
                  >
                    {props.options ? props.options(movie) : null}
                  </Movie>
                )
              })}
              {movies.length >= 1 ? (
                <Pagination
                  page={params.page}
                  maxPages={maxPages}
                  setParams={setParams}
                />
              ) : null}
            </Aux>
          )}
        </Grid>
        <Grid item md={4} xs={12}>
          <MovieSearch />
          <MovieFilter url={props.url} params={params} setParams={setParams} />
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

export default Movies
