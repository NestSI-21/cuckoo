import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { container } from './cuckoolist.module.scss';
import CuckooCard from '../CuckooCard';
import jsondata from '../../mockdata.json';

const CuckooList = ({ searchTerm }) => {
  const [cuckoos, setCuckoos] = useState([]);
  useEffect(() => {
    const data = jsondata.map((value) => value);
    setCuckoos(data);
  }, []);

  return (
    <div className={container}>
      {cuckoos
        .filter((cuckoo) => {
          if (!searchTerm) {
            return cuckoo;
          } else if (searchTerm === '') {
            return cuckoo;
          } else if (
            cuckoo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cuckoo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cuckoo.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cuckoo.username.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return cuckoo;
          } else {
            return false;
          }
        })
        .map((cuckoo, i) => (
          <Fragment key={i}>
            <CuckooCard cuckoo={cuckoo} />
          </Fragment>
        ))}
    </div>
  );
};

CuckooList.propTypes = {
  searchTerm: PropTypes.string,
};

export default CuckooList;
