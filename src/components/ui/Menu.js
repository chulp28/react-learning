import React from 'react';
import { NavLink } from 'react-router';

import styles from './Menu.module.css';

function Menu() {
  return (
    <div className={styles.Menu}>
      <br />{' '}
      <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to="/">
        Go home
      </NavLink>
      <br />{' '}
      <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to="/about">
        Go about
      </NavLink>
      <br />{' '}
      <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to="/contacts">
        Go contacts
      </NavLink>
      <br />{' '}
      <NavLink className={({ isActive }) => (isActive ? styles.activeLink : styles.link)} to="/courses">
        Go courses
      </NavLink>
    </div>
  );
}

export default Menu;
