import React from 'react'
import Dialog from './Dialog'
import Aux from './../hoc/Aux'
import Button from '@material-ui/core/Button'

const DialogError = (props) => {
  const handleClose = () => {
    props.setError((prevError) => ({
      ...prevError,
      open: false
    }))
  }

  const actions = (
    <Aux>
      <Button onClick={handleClose} color='primary' autoFocus>
        OK
      </Button>
    </Aux>
  )

  return (
    <Dialog
      open={props.open}
      title={props.title}
      content={props.message}
      actions={actions}
    />
  )
}

export default DialogError
