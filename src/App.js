import React from 'react'
import Menu from './components/Menu'
import WatchedMovies from './containers/WatchedMovies'
import BlockedMovies from './containers/BlockedMovies'
import RecommendedMovies from './containers/RecommendedMovies'
import Search from './containers/Search'
import Add from './containers/Add'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Router>
        <Menu />
        <Container>
          <Switch>
            <Route path='/watched-movies'>
              <WatchedMovies />
            </Route>
            <Route path='/blocked-movies'>
              <BlockedMovies />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/add'>
              <Add />
            </Route>
            <Route path='/'>
              <RecommendedMovies />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  )
}

export default App
