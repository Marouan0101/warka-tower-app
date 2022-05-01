import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import WarkaIndexCalculator from '../components/WarkaIndexCalculator';
import backgroundImage from '../images/world-map.jpg';

const WarkaIndex = () => {
  document.title = 'Warka Index | TeamWarka';

  return (
    <>
      <Navbar />

      <Header
        title='Find Out How Suitable Your Country Is For a Warka Tower'
        bgImage={backgroundImage}
        buttonText='Try It!'
        scrollTo='warkaIndexCalculator'
      />

      <div className='container'>
        <WarkaIndexCalculator title="Search For a Country Or City To Find Out It's Warka Index" />
      </div>

      <Footer />
    </>
  );
};

export default WarkaIndex;
