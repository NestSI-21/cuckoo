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
      console.log(resp);
      const companies = denormalize(
        resp.data.data.map(({ attributes: { name, description, company_url, images_url } }) => ({
          name,
          description,
          company_url,
          images_url,
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
