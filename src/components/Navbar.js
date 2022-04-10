import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import navigationLinks from '../Data/NavigationLinks';

window.onload = function () {
  const navbar = document.querySelector(`.${styles.navbar}`);
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = '0';
    } else {
      navbar.style.top = `-${navbar.clientHeight}px`;
    }
    prevScrollpos = currentScrollPos;
  };
};

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>
        <Link className={styles.title_link} to='/'>
          #TeamWarka
        </Link>
      </h1>

      <ul className={styles.items}>
        {navigationLinks.map((link) => (
          <li key={link.id} className={styles.item}>
            <Link className={styles.link} to={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
