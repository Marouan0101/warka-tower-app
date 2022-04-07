import React from 'react';
import styles from './styles/Home.module.css';
import DonateModal from '../components/DonateModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Leaderboard from '../components/Leaderboard';

export default function App() {
  return (
    <div className='App'>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.donate_modal}>
          <DonateModal />
        </div>

        <div className={styles.leaderboard}>
          <Leaderboard />
        </div>
      </div>

      <Footer />
    </div>
  );
}
