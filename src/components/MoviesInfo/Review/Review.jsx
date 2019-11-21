import React from 'react';

const Review = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(el => (
        <li key={el.id}>
          <p>
            <b>Author: {el.author}</b>
          </p>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Review;
