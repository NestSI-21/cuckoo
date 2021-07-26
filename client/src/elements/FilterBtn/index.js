import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { selected, unselected } from './filterbtn.module.scss';

const FilterBtn = ({ text }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <button className={active ? selected : unselected} onClick={toggleActive}>
      <span>{text}</span>
    </button>
  );
};

FilterBtn.propTypes = {
  text: PropTypes.string,
};

export default FilterBtn;
