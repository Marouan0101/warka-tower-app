import React from 'react';
import styles from './styles/Home.module.css';
import DonateModal from '../components/DonateModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Leaderboard from '../components/Leaderboard';
import Header from '../components/Header';
import backgroundImage from '../images/warka-tower-1.jpg';
import WarkaIndexCalculator from '../components/WarkaIndexCalculator';

export default function App() {
  document.title = 'Home | TeamWarka';

  return (
    <>
      <Navbar />

      <Header
        title='Every Drop Counts'
        subtitle='#TeamWarka is a nonprofit focused on innovative, and truly sustainable solutions, to some of humanity’s most enduring issues'
        bgImage={backgroundImage}
        buttonText='Make a Difference!'
        scrollTo='donate_modal'
      />

      <div className='container'>
        <div className={styles.donate_modal} id='donate_modal'>
          <DonateModal />
        </div>

        <div className={styles.leaderboard}>
          <Leaderboard />
        </div>

        <div className={styles.warkaIndexCalculator}>
          <WarkaIndexCalculator title='Find Out How Suitable Your Country Is For a Warka Tower' />
        </div>
      </div>

      <Footer />
    </>
  );
}
