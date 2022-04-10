import React from 'react';
import styles from './styles/Header.module.css';
import Button from './Button';

export default function Header({ title, subtitle, bgImage, buttonText }) {
  return (
    <div
      className={styles.header}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div></div>
      <div className={styles.header_container}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>

        {buttonText && (
          <Button
            text={buttonText}
            className={styles.button}
            scrollIntoViewById='donate_modal'
          />
        )}
      </div>
    </div>
  );
}
