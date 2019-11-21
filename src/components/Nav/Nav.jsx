import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const css = {
  color: 'red',
};

const Nav = () => {
  return (
    <ul className={style.nav}>
      <li>
        <NavLink to="/" exact activeStyle={css}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" activeStyle={css}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
