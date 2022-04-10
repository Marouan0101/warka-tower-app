import React from 'react';
import styles from './styles/Button.module.css';

export default function Button({ text, className, scrollIntoViewById }) {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={() => {
        document.getElementById(scrollIntoViewById).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }}
    >
      {text}
    </button>
  );
}
