import React from 'react';
import Navbar from '../components/Navbar';

const BadRequest = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='text-center mt-20 bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold mb-10'>
            This Page Is Under Construction
          </h1>
          <h2 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold'>
            New Content Coming Soon
          </h2>
        </div>
      </div>
    </>
  );
};

export default BadRequest;
