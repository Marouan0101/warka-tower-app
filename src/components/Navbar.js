import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>
        <Link className={styles.title_link} to='/'>
          TeamWarka
        </Link>
      </h1>

      <ul className={styles.items}>
        <li className={styles.item}>
          <Link className={styles.link} to='/'>
            Link 1
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/'>
            Donate
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to='/'>
            About us
          </Link>
        </li>
      </ul>
    </div>
  );
}
