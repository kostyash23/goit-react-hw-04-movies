import React, { Component } from 'react';
import { fetchTrandingMovies } from '../../helper/fetch';
import MoviesList from '../MoviesList/MoviesList';

export default class Home extends Component {
  state = { movies: [] };

  componentDidMount() {
    fetchTrandingMovies()
      .then(alldata => alldata.data)
      .then(data => data.results)
      .then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h1>Treanding today</h1>
        <MoviesList movies={movies} />
      </div>
    );
  }
}
