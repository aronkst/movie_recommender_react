import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  button: {
    marginLeft: '1em',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            movie_recommender
          </Typography>
          <Button className={classes.button} color="inherit">Watched</Button>
          <Button className={classes.button} color="inherit">Recommended</Button>
          <Button className={classes.button} color="inherit">Blocked</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
