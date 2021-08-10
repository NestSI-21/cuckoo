import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const CuckooAuthor = ({ type, user, company, createdAt }) => {
  return (
    <>
      <span>{type}</span> • @{user}, {company} • {format(new Date(createdAt), 'dd-MM-yyyy')}
    </>
  );
};

CuckooAuthor.propTypes = {
  type: PropTypes.string,
  user: PropTypes.string,
  company: PropTypes.string,
  createdAt: PropTypes.string,
};

export default CuckooAuthor;
