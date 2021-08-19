import React from 'react';
import PropTypes from 'prop-types';
import { companyMain, company, logoBox, companyInfo } from './companycard.module.scss';
import CL1 from '../../assets/logos/CL1.png';

const CompanyCard = ({ company: { name, description } }) => {
  console.log(name, description);
  return (
    <div className={companyMain}>
      <div className={company}>
        <div className={logoBox}>
          <img src={CL1} alt='Cuckoo horizontal logo' />
        </div>
        <div className={companyInfo}>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.object,
};

export default CompanyCard;
