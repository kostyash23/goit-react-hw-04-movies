import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Movies from '../Movies/Movies';
import MoviesInfo from '../MoviesInfo/MoviesInfo';
import NotFound from '../NotFound/NotFound';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/movies/:id" component={MoviesInfo} />
      <Route path="/movies" exact component={Movies} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default App;
