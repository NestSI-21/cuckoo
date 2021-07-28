import React from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import { form } from './editprofile.module.scss';

const EditProfile = () => {
  return (
    <form className={form}>
      <Input type='text' name='company' label='Which company do you work for?' mandatory />
      <Input type='text' name='role' label='What is your occupation?' mandatory />
      <Input type='date' name='birthdate' label='Please enter your date of birth' />
      <Button text='Get Started' type='submit' />
    </form>
  );
};

export default EditProfile;
