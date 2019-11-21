import React from 'react';
import styles from './MoviesPage.module.css';

const MoviesPage = ({
  overview,
  genres,
  name,
  title,
  poster_path,
  release_date,
  vote_average,
}) => (
  <article className={styles.cart}>
    <img
      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      alt={name || title}
      align="left"
    />
    <h1>{title}</h1>
    <p>{`User score: ${vote_average * 10}%`}</p>
    <p>
      <b>Overview:</b>
      {overview}
    </p>
    <p>
      <b>Genres:</b>
      {genres ? genres.map(el => el.name).join(', ') : 'No information'}
    </p>
  </article>
);

export default MoviesPage;
