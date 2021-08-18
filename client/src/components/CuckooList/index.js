import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CuckooCard from '../CuckooCard';
import { container } from './cuckoolist.module.scss';

const CuckooList = ({ cuckoos }) => {
  return (
    <div className={container}>
      {cuckoos &&
        cuckoos.map((cuckoo, i) => (
          <Fragment key={i}>
            <CuckooCard cuckoo={cuckoo} />
          </Fragment>
        ))}
    </div>
  );
};

CuckooList.propTypes = {
  cuckoos: PropTypes.array,
};

export default CuckooList;
