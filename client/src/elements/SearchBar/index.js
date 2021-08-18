import React from 'react';
import PropTypes from 'prop-types';
import { search } from './searchbar.module.scss';

const SearchBar = ({ handleSearchChange }) => {
  return (
    <div className={search}>
      <input
        type='text'
        placeholder='Search..'
        name='search'
        onChange={(e) => {
          handleSearchChange(e);
        }}
      />
      <i className='fa fa-search'></i>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearchChange: PropTypes.func,
};

export default SearchBar;
