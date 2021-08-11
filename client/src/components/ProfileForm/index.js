import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import denormalize from '@weareredlight/denormalize_json_api';
import { get, post } from '../../helpers/Networking';
import Avatar from '../../elements/Avatar';
import Select from '../../elements/Select';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import { form } from './profileform.module.scss';

const ProfileForm = () => {
  const [companies, setCompanies] = useState([]);
  const [data, setData] = useState({
    company: '',
    role: '',
    birthday: {},
  });

  let history = useHistory();
  const user = JSON.parse(localStorage.getItem('data'));

  useEffect(() => {
    getCompanies();
  }, []);

  useEffect(() => {
    if (user.profile_completed) {
      setData((prevData) => ({
        ...prevData,
        company: user.company_id,
        role: user.company_role,
        birthday: user.birthday,
      }));
    }
  }, []);

  // Get companies
  const getCompanies = () => {
    get('/companies', function (resp) {
      const companies = denormalize(
        resp.data.data.map(({ id, attributes: { name } }) => ({ id, name })),
      );
      setCompanies(companies);
    });
  };

  // Handler for input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Submit Handler for user profile
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user[company_id]', data.company);
    formData.append('user[company_role]', data.role);
    formData.append('user[birthday]', data.birthday);

    post(formData, '/users/profile', function (resp) {
      if (resp.status === 200) {
        console.log(resp);
        // localStorage.setItem('data', JSON.stringify(resp.data.user));
        // localStorage.setItem('companyName', JSON.stringify(resp.data.user_company_name));
        history.push('/dashboard');
      } else {
        history.push('/profile/edit');
      }
    });
  };

  return (
    <>
      <Avatar userImage={user.image_url} />
      <h1>Enter your details</h1>
      <form className={form} onSubmit={handleSubmit}>
        <Select
          name='company'
          value={data.company}
          onChange={handleChange}
          options={companies}
          label='Which company do you work for?'
          required
        />
        <Input
          type='text'
          name='role'
          value={data.role}
          onChange={handleChange}
          label='What is your occupation?'
          required
        />
        <Input
          type='date'
          name='birthday'
          value={data.birthday}
          onChange={handleChange}
          label='Please enter your date of birth'
        />
        <Button text='Continue' type='submit' />
      </form>
    </>
  );
};

export default ProfileForm;
