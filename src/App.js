import React from 'react';
import Menu from './components/Menu/Menu';
import WatchedMovies from './containers/WatchedMovies/WatchedMovies';
import BlockedMovies from './containers/BlockedMovies/BlockedMovies';
import RecommendedMovies from './containers/RecommendedMovies/RecommendedMovies';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Container>
          <Switch>
            <Route path="/watched">
              <WatchedMovies />
            </Route>
            <Route path="/blocked">
              <BlockedMovies />
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
              <RecommendedMovies />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
