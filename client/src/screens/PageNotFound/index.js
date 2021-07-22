import React from 'react';
import Button from '../../elements/Button';
import { Link } from 'react-router-dom';
import { content } from './pagenotfound.module.scss';

const PageNotFound = () => {
  return (
    <div className={content}>
      <div>
        <h1>{"Cuck-OOPS sorry we couldn't find that page."}</h1>
        <Link to='/Dashboard'>
          <Button text='Back to Dashboard' />
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
