import PropTypes from 'prop-types';
import { avatar } from './avatar.module.scss';
import React from 'react';

const Avatar = ({ userImage }) => {
  return <img src={userImage} className={avatar} alt='user avatar' />;
};

Avatar.propTypes = {
  userImage: PropTypes.string,
};

export default Avatar;
