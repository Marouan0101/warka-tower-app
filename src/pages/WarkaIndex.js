import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

export default function WarkaIndex() {
  document.title = 'Donate | TeamWarka';

  return (
    <>
      <Navbar />

      <Header
        title='Donate Page'
        subtitle='Donate Page Donate Page Donate Page Donate Page'
        bgImage={backgroundImage}
      />

      <Footer />
    </>
  );
}
