import React from 'react';
import PropTypes from 'prop-types';
import { selected, unselected } from './filterbtn.module.scss';

const FilterBtn = ({
  id,
  name,
  value,
  text,
  handleTypeFilterClick,
  handleCategoryFilterClick,
  active,
}) => {
  const toggleActive = () => {
    if (name === 'type') {
      handleTypeFilterClick(value);
    } else if (name === 'category') {
      handleCategoryFilterClick(value);
    } else return;
  };
  return (
    <button
      id={id}
      name={name}
      value={value}
      className={active ? selected : unselected}
      onClick={toggleActive}
    >
      {text}
    </button>
  );
};

FilterBtn.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.string,
  active: PropTypes.bool,
  handleTypeFilterClick: PropTypes.func,
  handleCategoryFilterClick: PropTypes.func,
};

export default FilterBtn;
