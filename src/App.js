import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>movie_recommender</Typography>
            <Button className={classes.button} color="inherit" component={Link} to="/watched">Watched</Button>
            <Button className={classes.button} color="inherit" component={Link} to="/">Recommended</Button>
            <Button className={classes.button} color="inherit" component={Link} to="/blocked">Blocked</Button>
          </Toolbar>
        </AppBar>
        <Container>
        <Switch>
            <Route path="/watched">
              <h1>watched</h1>
            </Route>
            <Route path="/blocked">
              <h1>blocked</h1>
            </Route>
            <Route path="/search">
              <h1>search</h1>
            </Route>
            <Route path="/add">
              <h1>add</h1>
            </Route>
            <Route path="/loading">
              <h1>loading</h1>
            </Route>
            <Route path="/">
              <h1>recommended</h1>
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
