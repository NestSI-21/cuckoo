import React from 'react';
import { notFound, notFoundContent, button } from './pagenotfound.module.scss';

const PageNotFound = () => {
  return (
    <div className={notFound}>
      <div className={notFoundContent}>
        <h1>{"Cuck-OOPS sorry we couldn't find that page."}</h1>
        <button>
          <span>Back to Dashboard</span>
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
