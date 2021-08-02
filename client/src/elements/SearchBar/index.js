import React from 'react';
import PropTypes from 'prop-types';
import { search } from './searchbar.module.scss';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className={search}>
      <input
        type='text'
        placeholder='Search..'
        name='search'
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <i className='fa fa-search'></i>
    </div>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default SearchBar;
