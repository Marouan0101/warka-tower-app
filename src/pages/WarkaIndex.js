import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import WarkaIndexCalculator from '../components/WarkaIndexCalculator';

const WarkaIndex = () => {
  document.title = 'Warka Index | TeamWarka';

  return (
    <>
      <Navbar />

      <Header
        title='Find Out How Suitable Your Country Is For a Warka Tower'
        bgImage='https://images.theconversation.com/files/332916/original/file-20200505-83751-17bb4ob.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop'
        buttonText='Try It!'
        scrollTo='warkaIndexCalculator'
      />

      <div className='container'>
        <WarkaIndexCalculator />
      </div>

      <Footer />
    </>
  );
};

export default WarkaIndex;
