import React from 'react';
import Button from './Button';
import styles from './styles/DonateModal.module.css';

export default function DonateModal() {
  return (
    <div className={styles.modal}>
      <h1 className={styles.title}>Join #TeamWarka</h1>
      <form className={styles.form}>
        <div className={styles.form_group}>
          <label className={`${styles.label} ${styles.label_name}`}>
            Display Name*
          </label>
          <input
            className={`${styles.input} ${styles.input_name}`}
            type='text'
            placeholder='Display Name'
            required
          />
        </div>

        <div className={styles.form_group}>
          <label className={`${styles.label} styles.label_email`}>
            Email Address*
          </label>
          <input
            className={`${styles.input} ${styles.input_email}`}
            type='email'
            placeholder='Email'
            required
          />
        </div>

        <div className={styles.form_group}>
          <label className={`${styles.label} styles.label_donate`}>
            Donate*
          </label>
          <input
            className={`${styles.input} ${styles.input_donate}`}
            type='number'
            placeholder='Amount'
            required
          />
        </div>

        <div className={styles.form_group}>
          <label className={`${styles.label} ${styles.label_message}`}>
            Message
          </label>
          <textarea
            className={`${styles.input} ${styles.input_message}`}
            type='text'
            placeholder='Message (Max 140 Characters)'
            maxLength='140'
          />
        </div>

        <Button text='kurt' className={styles.submit_button} />
      </form>
    </div>
  );
}
