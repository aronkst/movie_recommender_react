import React from 'react'
import Menu from './components/Menu/Menu'
import WatchedMovies from './containers/Movies/WatchedMovies'
import BlockedMovies from './containers/Movies/BlockedMovies'
import RecommendedMovies from './containers/Movies/RecommendedMovies'
import Search from './containers/Search/Search'
import Add from './containers/Add/Add'
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
