import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const CuckooAuthor = ({ type, username, companyName, createdAt }) => {
  return (
    <>
      <span>
        @{username}, {companyName} • {format(new Date(createdAt), 'dd MMM')} • {type}
      </span>
    </>
  );
};

CuckooAuthor.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string,
  companyName: PropTypes.string,
  createdAt: PropTypes.string,
};

export default CuckooAuthor;
