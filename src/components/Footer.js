import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.items}>
        <div className={styles.item}>
          <Link className={styles.link} to=''>
            FAQ
          </Link>
        </div>
        <div className={styles.item}>
          <Link className={styles.link} to=''>
            Contact Us
          </Link>
        </div>
        <div className={styles.item}>
          <Link className={styles.link} to=''>
            About Us
          </Link>
        </div>
        <div className={styles.item}>
          <Link className={styles.link} to=''>
            #TeamWarka
          </Link>
        </div>
      </div>
    </div>
  );
}
