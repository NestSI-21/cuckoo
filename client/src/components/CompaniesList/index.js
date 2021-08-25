import React, { useState, useEffect, Fragment } from 'react';
import denormalize from '@weareredlight/denormalize_json_api';
import apiConfig from '../../helpers/Networking';
import CompanyCard from '../CompanyCard';

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  // Get companies
  const getCompanies = () => {
    apiConfig.get('/companies', function (resp) {
      const data = denormalize(resp.data).data;
      setCompanies(data);
    });
  };

  return (
    <div>
      {companies &&
        companies.map((company, i) => (
          <Fragment key={i}>
            <CompanyCard company={company} />
          </Fragment>
        ))}
    </div>
  );
};

export default CompaniesList;
