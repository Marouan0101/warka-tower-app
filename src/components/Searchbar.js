import React from 'react';

const SearchBar = ({ value, onChange, placeholder }) => {
  return <input value={value} onChange={onChange} placeholder={placeholder} />;
};

export default SearchBar;
