import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const CuckooAuthor = ({ type, user, company, createdAt }) => {
  return (
    <>
      <span>
        @{user}, {company} • {format(new Date(createdAt), 'dd-MM-yyyy')} • {type}
      </span>
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
