import React, { useState, useEffect, Fragment } from 'react';
import { container } from './cuckoolist.module.scss';
import CuckooCard from '../CuckooCard';
import jsondata from '../../mockdata.json';

const CuckooList = () => {
  const [cuckoos, setCuckoos] = useState([]);

  useEffect(() => {
    const data = jsondata.map((value) => value);
    setCuckoos(data);
  }, []);

  return (
    <div className={container}>
      {cuckoos.map((cuckoo, i) => (
        <Fragment key={i}>
          <CuckooCard cuckoo={cuckoo} />
        </Fragment>
      ))}
    </div>
  );
};

export default CuckooList;
