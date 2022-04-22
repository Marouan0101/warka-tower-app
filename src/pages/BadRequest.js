import React from 'react';
import Navbar from '../components/Navbar';

const BadRequest = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-5xl text-center font-bold'>
        Oops! Couldn't Find That Page
      </h1>
    </div>
  );
};

export default BadRequest;
