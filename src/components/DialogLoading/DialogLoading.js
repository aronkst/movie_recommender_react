import React from 'react'
import Aux from './../../hoc/Aux/Aux'
import CircularProgress from '@material-ui/core/CircularProgress'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((_) => ({
  box: {
    paddingBottom: '1em'
  }
}))

const DialogLoading = (props) => {
  const classes = useStyles()

  return (
    <Aux>
      <Dialog aria-labelledby='dialog-title' open={props.open}>
        <DialogTitle id='dialog-title'>{props.title}</DialogTitle>
        <DialogContent>
          <Box display='flex' justifyContent='center' alignItems='center' className={classes.box}>
            <CircularProgress />
          </Box>
        </DialogContent>
      </Dialog>
    </Aux>
  )
}

export default DialogLoading
