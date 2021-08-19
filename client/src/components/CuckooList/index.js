import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CuckooCard from '../CuckooCard';
import nocuckoos from '../../assets/logos/nocuckoos.svg';
import { container, noCuckoos } from './cuckoolist.module.scss';

const CuckooList = ({ cuckoos }) => {
  return (
    <>
      {cuckoos != '' ? (
        <div className={container}>
          {cuckoos &&
            cuckoos.map((cuckoo, i) => (
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
  cuckoos: PropTypes.array,
};

export default CuckooList;
