import React from 'react';
import { GrSearch } from 'react-icons/gr';
import styles from './styles/Searchbar.module.css';

const SearchBar = ({ value, onChange, placeholder, className, iconSize }) => {
  return (
    <div className={`${styles.searchbar} ${className}`}>
      <GrSearch className={`${styles.icon} text-${iconSize}`} />
      <input
        className={`${styles.input} `}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  iconSize: '2xl',
};

export default SearchBar;
