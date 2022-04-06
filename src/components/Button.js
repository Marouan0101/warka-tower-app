import React from 'react';
import styles from './styles/Button.module.css';

export default function Button({ text, className }) {
  return (
    <button type='submit' className={`${styles.button} ${className}`}>
      {text}
    </button>
  );
}
