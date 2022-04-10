import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import styles from './styles/Donate.module.css';
import backgroundImage from '../images/warka-tower-5.jpg';

export default function Donate() {
  return (
    <>
      <Navbar />

      <Header
        title='Donate Page'
        subtitle='Donate Page Donate Page Donate Page Donate Page'
        bgImage={backgroundImage}
      />

      <h1>Donate</h1>

      <Footer />
    </>
  );
}
