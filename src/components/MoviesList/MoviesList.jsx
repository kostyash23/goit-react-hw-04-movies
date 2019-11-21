import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ movies = [], location }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link
          to={{
            pathname: `/movies/${movie.id}`,
            state: { from: location },
          }}
        >
          {movie.name ? movie.name : movie.title}
        </Link>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
export default withRouter(MoviesList);
