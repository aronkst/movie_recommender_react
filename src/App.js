import React from 'react';
import Menu from './components/Menu/Menu';
import Movie from './components/Movie/Movie';
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
              <Movie />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
