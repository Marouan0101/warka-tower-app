import React from 'react';
import styles from './styles/Home.module.css';
import DonateModal from '../components/DonateModal';
import Navbar from '../components/Navbar';

export default function App() {
  return (
    <div className='App'>
      <Navbar />

      <div className={styles.container}>
        <DonateModal />
      </div>
    </div>
  );
}
