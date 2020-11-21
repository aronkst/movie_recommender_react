import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((_) => ({
  paper: {
    marginBottom: '1em'
  },
  div: {
    padding: '1em'
  }
}))

const Card = (props) => {
  const classes = useStyles()

  return (
    <Paper elevation={3} className={classes.paper}>
      <div className={classes.div}>{props.children}</div>
    </Paper>
  )
}

export default Card
