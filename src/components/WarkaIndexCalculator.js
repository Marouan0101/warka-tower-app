import React, { useState } from 'react';
import axios from 'axios';
import weatherApiKey from '../Data/weatherApiKey';
import styles from './styles/WarkaIndexCalculator.module.css';
import SearchBar from './Searchbar';

const WarkaTowerCalculator = ({ title }) => {
  const [weather, setWeather] = useState();
  const [query, setQuery] = useState();
  const [warkaIndex, setWarkaIndex] = useState();

  const search = async (searchQuery) => {
    const api = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${searchQuery}&days=1&aqi=no&alerts=no`;
    const response = await axios.get(api);
    const data = response.data;
    const index =
      data.forecast.forecastday[0].day.avgtemp_c <= 0
        ? 0
        : Math.floor(
            ((data.forecast.forecastday[0].hour[16].dewpoint_c /
              data.forecast.forecastday[0].day.avgtemp_c) *
              0.6 +
              (data.forecast.forecastday[0].day.avghumidity / 100) * 0.4) *
              100
          );
    setWeather(data);

    setWarkaIndex(index <= 0 ? '0' : index >= 100 ? 100 : index);
  };

  const onChangeHandler = async (searchQuery) => {
    search(searchQuery);
    setQuery(searchQuery);
  };

  const el = document.getElementById('kurt');

  if (el) {
    el.style.height = `${100 - warkaIndex}%`;
  }

  const renderData = () => {
    if (weather) {
      return (
        <div className='bg-white rounded-2xl p-10 mt-10'>
          <h2 className='text-4xl font-bold text-center  bg-gradient-to-r  from-secondary to-secondary-light bg-clip-text text-transparent'>
            Warka Index
          </h2>

          <div className='flex justify-between mt-4'>
            <div>
              {weather.location.country && (
                <div className='mb-4'>
                  <h2 className='text-3xl font-bold bg-gradient-to-r from-tertiary to-tertiary-light bg-clip-text text-transparent '>
                    Country
                  </h2>
                  <h3 className='text-xl font-semibold'>
                    {weather.location.country}
                  </h3>
                </div>
              )}

              {weather.location.region && (
                <div className='mb-4'>
                  <h2 className='text-3xl font-bold bg-gradient-to-r from-tertiary to-tertiary-light bg-clip-text text-transparent'>
                    State / Region
                  </h2>
                  <h3 className='text-xl font-semibold'>
                    {weather.location.region}
                  </h3>
                </div>
              )}

              {weather.location.name && (
                <div>
                  <h2 className='text-3xl font-bold bg-gradient-to-r from-tertiary to-tertiary-light bg-clip-text text-transparent'>
                    Location
                  </h2>
                  <h3 className='text-xl font-semibold'>
                    {weather.location.name}
                  </h3>
                </div>
              )}
            </div>

            <div className='flex mt-10'>
              {warkaIndex && (
                <h3
                  className={`absolute ml-2 -translate-y-10 text-2xl text-center mb-1 font-semibold bg-gradient-to-tl ${
                    warkaIndex >= 70
                      ? 'from-primary-dark to-primary'
                      : 'from-secondary to-secondary-light'
                  }  bg-clip-text text-transparent`}
                >
                  {`${warkaIndex}%`}
                </h3>
              )}
              <div
                className={`h-full border-2 border-black rounded-md w-16 overflow-hidden bg-gradient-to-t from-red-600 via-yellow-300 to-green-500`}
              >
                <div
                  id='kurt'
                  className='w-full bg-white border-b border-black'
                ></div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div id='warkaIndexCalculator'>
      {title && <h1 className={styles.title}>{title}</h1>}

      <div className={styles.module}>
        <SearchBar
          className='w-80 m-auto'
          value={query}
          onChange={(e) => onChangeHandler(e.target.value)}
          placeholder='Search For Any Country or City'
        />

        {renderData()}
      </div>
    </div>
  );
};

export default WarkaTowerCalculator;
