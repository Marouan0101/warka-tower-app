import React, { useState, useEffect } from 'react';
import axios from 'axios';
import weatherApiKey from '../Data/weatherApiKey';
import styles from './styles/WarkaTowerCalculator.module.css';
import SearchBar from './Searchbar';

const WarkaTowerCalculator = () => {
  const [weather, setWeather] = useState();
  const [query, setQuery] = useState();

  const search = async (searchQuery) => {
    const api = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${searchQuery}&aqi=yes`;
    const response = await axios.get(api);
    const data = response.data;
    setWeather(data);
  };

  const onChangeHandler = async (searchQuery) => {
    search(searchQuery);
    setQuery(searchQuery);
  };

  const renderData = () => {
    if (!weather) {
      return <div>Loading...</div>;
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

          {weather.current.condition && (
            <h2>
              <span className='font-bold'>Weather: </span>
              {weather.current.condition.text}
            </h2>
          )}

          {weather.current.humidity && (
            <h2>
              <span className='font-bold'>Humidity: </span>
              {weather.current.humidity}%
            </h2>
          )}

          {weather.current.temp_c && (
            <h2>
              <span className='font-bold'>Temperature: </span>
              {weather.current.temp_c}&#176;C
            </h2>
          )}

          {weather.current.wind_kph && (
            <h2>
              <span className='font-bold'>Wind: </span>
              {weather.current.wind_kph} km/h
            </h2>
          )}
        </>
      );
    }
  };

  return (
    <div>
      <SearchBar
        value={query}
        onChange={(e) => onChangeHandler(e.target.value)}
        placeholder='Search'
      />

      {renderData()}
    </div>
  );
};

export default WarkaTowerCalculator;
