import React from 'react';
import PropTypes from 'prop-types';
import { companyMain, company, logoBox, companyInfo, website } from './companycard.module.scss';

const CompanyCard = ({ company: { name, description, images_url: logo, company_url: url } }) => {
  return (
    <div className={companyMain}>
      <div className={company}>
        <div className={logoBox}>
          <img src={logo} alt={`${name} company logo`} />
        </div>
        <div className={companyInfo}>
          <h3>{name}</h3>
          <p>{description}</p>
          <a className={website} href={url}>
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.object,
};

export default CompanyCard;
