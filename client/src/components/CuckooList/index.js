import React, { useState, useEffect, Fragment } from 'react';
import { get } from '../../helpers/Networking';
import PropTypes from 'prop-types';
import CuckooCard from '../CuckooCard';
// import jsondata from '../../mockdata.json';
import { container } from './cuckoolist.module.scss';

const CuckooList = ({ searchTerm }) => {
  const [cuckoos, setCuckoos] = useState([]);

  // useEffect(() => {
  //   const data = jsondata.map((value) => value);
  //   setCuckoos(data);
  // }, []);

  useEffect(() => {
    getCuckoos();
  }, []);

  const getCuckoos = () => {
    get('/posts', function (resp) {
      setCuckoos(resp.data.posts);
    });
  };

  console.log(cuckoos);

  return (
    <div className={container}>
      {cuckoos &&
        cuckoos
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
