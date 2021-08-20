import React, { useState, useEffect, Fragment } from 'react';
import denormalize from '@weareredlight/denormalize_json_api';
import { get } from '../../helpers/Networking';
import CompanyCard from '../CompanyCard';

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies();
  }, []);

  // Get companies
  const getCompanies = () => {
    get('/companies', function (resp) {
      const companies = denormalize(
        resp.data.data.map(({ attributes: { name, description } }) => ({
          name,
          description,
        })),
      );
      setCompanies(companies);
    });
  };

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
