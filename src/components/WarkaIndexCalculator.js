import React, { useState } from 'react';
import axios from 'axios';
import weatherApiKey from '../Data/weatherApiKey';
import styles from './styles/WarkaIndexCalculator.module.css';
import SearchBar from './Searchbar';

const WarkaTowerCalculator = () => {
  const [weather, setWeather] = useState();
  const [query, setQuery] = useState();
  const [warkaIndex, setWarkaIndex] = useState();

  const search = async (searchQuery) => {
    const api = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${searchQuery}&days=1&aqi=no&alerts=no`;
    const response = await axios.get(api);
    const data = response.data;

    setWeather(data);

    setWarkaIndex(
      Math.round(
        ((data.forecast.forecastday[0].day.maxtemp_c / 35) * 0.3 +
          (data.forecast.forecastday[0].hour[16].dewpoint_f / 100) * 0.2 +
          (data.forecast.forecastday[0].day.avghumidity / 100) * 0.5) *
          100
      )
    );
  };

  const onChangeHandler = async (searchQuery) => {
    search(searchQuery);
    setQuery(searchQuery);
  };

  const test = () => {
    const el = document.getElementById('kurt');

    if (el) {
      el.style.height = `${100 - warkaIndex}%`;
    }
  };

  const renderData = () => {
    if (!weather) {
      return;
    } else {
      return (
        <>
          {weather.location.country && (
            <h2>
              <span className='font-bold'>Country: </span>
              {weather.location.country}
            </h2>
          )}

          {weather.location.region && (
            <h2>
              <span className='font-bold'>Region: </span>
              {weather.location.region}
            </h2>
          )}

          {weather.location.name && (
            <h2>
              <span className='font-bold'>Location: </span>
              {weather.location.name}
            </h2>
          )}

          {weather.forecast.forecastday[0].day.condition && (
            <h2 className='flex items-center'>
              <span className='font-bold'>Weather: </span>
              {weather.forecast.forecastday[0].day.condition.text}
              <img
                className='w-10'
                src={weather.forecast.forecastday[0].day.condition.icon}
              />
            </h2>
          )}

          {weather.forecast.forecastday[0].day.avghumidity && (
            <h2>
              <span className='font-bold'>Humidity: </span>
              {weather.forecast.forecastday[0].day.avghumidity}%
            </h2>
          )}

          {weather.forecast.forecastday[0].day.maxtemp_c && (
            <h2>
              <span className='font-bold'>Temperature: </span>
              {weather.forecast.forecastday[0].day.maxtemp_c}&#176;C
            </h2>
          )}

          {weather.current.wind_kph && (
            <h2>
              <span className='font-bold'>Wind: </span>
              {weather.current.wind_kph} km/h
            </h2>
          )}

          {warkaIndex && (
            <div>
              <h2>
                <span className='font-bold'>Warka Index: </span>
                {warkaIndex}%
              </h2>

              <div className='h-40 border-2 border-black rounded-md w-10 overflow-hidden  bg-gradient-to-t from-red-600 via-yellow-300 to-green-500'>
                <div id='kurt' className='w-full bg-white'></div>
              </div>
              {test()}
            </div>
          )}
        </>
      );
    }
  };

  return (
    <div>
      <h1 className={styles.title}>
        Find Out How Suitable Your Country Is For a Warka Tower
      </h1>

      <div className={styles.module}>
        <SearchBar
          className='w-80 m-auto'
          value={query}
          onChange={(e) => onChangeHandler(e.target.value)}
          placeholder='Search For a Country or City'
        />

        {renderData()}
      </div>
    </div>
  );
};

export default WarkaTowerCalculator;
