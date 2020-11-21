import React from 'react'
import Aux from './../../hoc/Aux/Aux'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContentText from '@material-ui/core/DialogContentText'

const DialogLoading = (props) => {
  return (
    <Aux>
      <Dialog open={props.open}>
        <DialogTitle>{props.title.toUpperCase()}</DialogTitle>
        <DialogContent>
          {typeof (props.content) === 'string'
            ? <DialogContentText>{props.content.toUpperCase()}</DialogContentText>
            : <Aux>{props.content}</Aux>}
        </DialogContent>
        {props.actions
          ? <DialogActions>{props.actions}</DialogActions>
          : null}
      </Dialog>
    </Aux>
  )
}

export default DialogLoading
