import React, { useState, useEffect, Fragment } from 'react';
import CompanyCard from '../CompanyCard';
import jsondata from '../../mockcompanies.json';

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const data = jsondata.map((value) => value);
    setCompanies(data);
  }, []);

  return (
    <div>
      {companies.map((company, i) => (
        <Fragment key={i}>
          <CompanyCard company={company} />
        </Fragment>
      ))}
    </div>
  );
};

export default CompaniesList;
