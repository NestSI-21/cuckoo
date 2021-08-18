import React from 'react';
import PropTypes from 'prop-types';
import { selected, unselected } from './filterbtn.module.scss';

const FilterBtn = ({ id, name, value, text, onClick, active }) => {
  return (
    <button
      id={id}
      name={name}
      value={value}
      className={active ? selected : unselected}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

FilterBtn.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.number,
  text: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

export default FilterBtn;
