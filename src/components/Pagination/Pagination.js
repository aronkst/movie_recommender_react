import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((_) => ({
  box: {
    marginTop: '1em'
  },
  button: {
    minWidth: '0'
  }
}))

const Pagination = (props) => {
  const classes = useStyles()

  const [buttons, setButtons] = useState([])

  useEffect(() => {
    const pagination = []
    if (props.maxPages >= 7) {
      for (let i = 1; i <= 7; i++) {
        pagination.push(i)
      }
      pagination[0] = 1
      pagination[1] = props.page <= 3 ? 2 : '...'
      pagination[2] = props.page <= 3 ? 3 : props.page - 1
      pagination[3] = props.page <= 4 ? 4 : props.page
      pagination[4] = props.page <= 4 ? 5 : props.page + 1
      pagination[5] = props.page >= props.maxPages - 3 ? props.maxPages - 1 : '...'
      pagination[6] = props.maxPages
      if (props.page >= props.maxPages - 3) {
        pagination[2] = props.maxPages - 4
        pagination[3] = props.maxPages - 3
        pagination[4] = props.maxPages - 2
      }
    } else {
      for (let i = 1; i <= props.maxPages; i++) {
        pagination.push(i)
      }
    }
    setButtons(pagination)
  }, [props.page, props.maxPages])

  const button = (page, index) => {
    const variant = page === props.page ? 'contained' : null
    const disabled = page === '...'
    return <Button key={index} className={classes.button} variant={variant} color='primary' disabled={disabled} onClick={() => setPage(page)}>{page}</Button>
  }

  const buttonLeft = (
    <Button className={classes.button} disabled={props.page <= 1} onClick={() => setPage(props.page - 1)}>
      <ChevronLeftIcon />
    </Button>
  )

  const buttonRight = (
    <Button className={classes.button} disabled={props.page >= props.maxPages} onClick={() => setPage(props.page + 1)}>
      <ChevronRightIcon />
    </Button>
  )

  const setPage = (page) => {
    props.setParams(prevParams => ({
      ...prevParams,
      page: page
    }))
  }

  return (
    <Box display='flex' justifyContent='center' className={classes.box}>
      {buttonLeft}
      {buttons.map((page, index) => button(page, index))}
      {buttonRight}
    </Box>
  )
}

export default Pagination
