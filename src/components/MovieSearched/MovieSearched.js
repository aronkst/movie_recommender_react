import React from 'react'
import Card from './../Card/Card'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((_) => ({
  title: {
    marginTop: '0.5em'
  },
  imdb: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
}))

const MovieSearched = (props) => {
  const classes = useStyles()

  return (
    <Card>
      <img src={props.image} alt='Movie' />
      <h3 className={classes.title}>
        {props.title} ({props.year}){' '}
        <span className={classes.imdb}>{props.imdb}</span>
      </h3>
      <Grid container spacing={2} className={classes.buttons}>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant='contained'
            color='primary'
            component={Link}
            to={`/add?imdb=${props.imdb}&year=${props.year}&title=${props.title}`}
            startIcon={<AddIcon />}
          >
            ADD
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default MovieSearched
