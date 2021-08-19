import React, { useState, useEffect, Fragment } from 'react';
import denormalize from '@weareredlight/denormalize_json_api';
import PropTypes from 'prop-types';
import { get } from '../../helpers/Networking';
import CuckooCard from '../CuckooCard';
import nocuckoos from '../../assets/logos/nocuckoos.svg';
import { container, noCuckoos } from './cuckoolist.module.scss';

const CuckooList = ({ searchTerm }) => {
  const [cuckoos, setCuckoos] = useState([]);

  useEffect(() => {
    getCuckoos();
  }, []);

  const getCuckoos = () => {
    get('/posts', function (resp) {
      const cuckoos = denormalize(resp.data).data;
      setCuckoos(cuckoos);
    });
  };

  console.log(cuckoos);

  return (
    <>
      {cuckoos != '' ? (
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
      ) : (
        <div className={noCuckoos}>
          <img src={nocuckoos} alt='nocuckoos' />
          <h3>Cuck-OOPS</h3>
          <p>There's no Cuckoos here</p>
        </div>
      )}
    </>
  );
};

CuckooList.propTypes = {
  searchTerm: PropTypes.string,
};

export default CuckooList;
