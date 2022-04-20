import React from 'react';
import styles from './styles/Header.module.css';
import Button from './Button';

export default function Header({ title, subtitle, bgImage, buttonText }) {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
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
      <img src={bgImage} />
    </div>
  );
}
