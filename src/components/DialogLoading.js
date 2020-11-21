import React from 'react'
import Dialog from './Dialog'
import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((_) => ({
  box: {
    paddingBottom: '1em'
  }
}))

const DialogLoading = (props) => {
  const classes = useStyles()

  const content = (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      className={classes.box}
    >
      <CircularProgress />
    </Box>
  )

  return <Dialog open={props.open} title={props.title} content={content} />
}

export default DialogLoading
