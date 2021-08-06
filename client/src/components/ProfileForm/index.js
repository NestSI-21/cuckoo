import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Avatar from '../../elements/Avatar';
import Select from '../../elements/Select';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import { form } from './profileform.module.scss';
import { get } from '../../helpers/Networking';

const ProfileForm = () => {
  const [companies, setCompanies] = useState([]);
  const [data, setData] = useState({
    company: '',
    role: '',
    birthdate: {},
  });

  let history = useHistory();
  let user = localStorage.getItem('data');
  user = JSON.parse(user);

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = () => {
    get('/companies', function (resp) {
      const companies = resp.data.companies.map(({ id, name }) => ({ id, name }));
      setCompanies(companies);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append('user[company_id]', data.comapany);
    // formData.append('user[company_role]', data.role);
    // formData.append('user[company_id]', data.birthdate);

    // post(formData, '/users/complete_profile', function (response) {
    //   console.log(response);
    // });

    const headers = {
      authorization: localStorage.getItem('token'),
    };
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/users/complete_profile`,
        {
          user: { company_id: data.company, company_role: data.role, birthday: data.birthdate },
        },
        {
          headers: headers,
        },
      )
      .then((resp) => {
        console.log(resp);
        resp.status === 200 ? history.push('/dashboard') : history.push('/profile/edit');
      });
  };

  return (
    <>
      <Avatar userImage={user.image_url} />
      <h1>Almost there</h1>
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
          name='birthdate'
          value={data.birthdate}
          onChange={handleChange}
          label='Please enter your date of birth'
        />
        <Button text='Get Started' type='submit' />
      </form>
    </>
  );
};

export default ProfileForm;
