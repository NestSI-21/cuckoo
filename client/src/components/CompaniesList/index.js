import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import CompanyCard from '../CompanyCard';
import jsondata from '../../mockcompanies.json';

const CompaniesList = ({ searchTerm }) => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const data = jsondata.map((value) => value);
    setCompanies(data);
  }, []);

  return (
    <div>
      {companies
        .filter((company) => {
          if (searchTerm === '') {
            return company;
          } else if (company.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return company;
          } else {
            return false;
          }
        })
        .map((company, i) => (
          <Fragment key={i}>
            <CompanyCard company={company} />
          </Fragment>
        ))}
    </div>
  );
};

CompaniesList.propTypes = {
  searchTerm: PropTypes.string,
};

export default CompaniesList;
