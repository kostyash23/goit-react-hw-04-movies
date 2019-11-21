import React, { Component } from 'react';
import { searchMovies } from '../../helper/fetch';
import MoviesList from '../MoviesList/MoviesList';

export default class Movies extends Component {
  state = {
    movies: [],
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    searchMovies(this.state.query)
      .then(alldata => alldata.data)
      .then(data => data.results)
      .then(movies => this.setState({ movies }));
    this.setState({ query: '' });
  };

  render() {
    const { query, movies } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>

        <MoviesList movies={movies} />
      </>
    );
  }
}
