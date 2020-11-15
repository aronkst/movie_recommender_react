import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Axios from './../../helpers/Axios';

const useStyles = makeStyles((_) => ({
  box: {
    marginBottom: '0.5em',
  },
}));

const MoreMovies = (props) => {
  const classes = useStyles();

  const handleClick = async () => {
    const page = props.page + 1;
    props.setPage(page);
    let params = props.params;
    params.page = page;
    const loadData = await Axios(props.url, 'GET', { params: params });
    const data = props.data;
    data.push(...loadData);
    props.setData(data);
    props.setShowMoreMovies(loadData.lenght > 0)
  };

  return (
    <Box display="flex" justifyContent="center" className={classes.box}>
      <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleClick}>LOAD MORE</Button>
    </Box>
  );
}

export default MoreMovies;
