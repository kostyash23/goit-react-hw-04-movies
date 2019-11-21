import React from 'react';
import styles from './Cast.module.css';

const Cast = ({ credits }) => {
  return (
    <ul className={styles.cast}>
      {credits.map(el => (
        <li key={el.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
            alt={el.name}
          />
          <p>{el.name}</p>
          <p>Character: {el.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
