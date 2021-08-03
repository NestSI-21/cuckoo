import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../elements/Button';
import { content } from './pagenotfound.module.scss';
import cuckoo404 from '../../assets/logos/cuckoo404.svg';

const PageNotFound = () => {
  return (
    <div className={content}>
      <div>
        <img src={cuckoo404} alt='Cuckoo404' />
        <h1>{'Cuck-OOPS'}</h1>
        <p>{'Something went wrong'}</p>
        <Link to='/Dashboard'>
          <Button text='Back to Dashboard' style='grey' />
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
