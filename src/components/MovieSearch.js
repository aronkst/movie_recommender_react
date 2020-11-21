import React, { useState } from 'react'
import Card from './Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((_) => ({
  title: {
    marginTop: '0'
  },
  marginTop: {
    marginTop: '1em'
  }
}))

const MovieSearch = (props) => {
  const classes = useStyles()

  const history = useHistory()

  const [title, setTitle] = useState(props.title ? props.title : '')

  const handleSubmit = (event) => {
    event.preventDefault()
    const title = event.target.title.value
    if (title !== '') {
      history.push(`/search?title=${title}`)
    }
  }

  const handleOnChange = (event) => {
    setTitle(event.target.value)
  }

  return (
    <Card>
      <h2 className={classes.title}>ADD WATCHED MOVIE</h2>
      <p>
        FILL IN THE FIELD BELOW TO SEARCH THE MOVIE THAT YOU WANT TO ADD AS
        WATCHED.
      </p>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.marginTop}
          fullWidth
          variant='outlined'
          InputLabelProps={{ shrink: true }}
          name='title'
          label='TITLE'
          onChange={handleOnChange}
          value={title}
        />
        <Button
          fullWidth
          variant='contained'
          color='primary'
          startIcon={<SearchIcon />}
          className={classes.marginTop}
          type='submit'
        >
          SEARCH
        </Button>
      </form>
    </Card>
  )
}

export default MovieSearch
