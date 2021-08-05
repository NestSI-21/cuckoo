import React, { useState, useEffect } from 'react';
// import Select from '../../elements/Select';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import { form } from './editprofile.module.scss';
import axios from 'axios';

const EditProfile = () => {
  // const [companies, setCompanies] = useState([]);
  const [data, setData] = useState({
    company: '',
    role: '',
    birthdate: '',
  });

  useEffect(() => {
    getCompanies();
  });

  const getCompanies = () => {
    const companyData = localStorage.getItem('companies');
    console.log(companyData);
    console.log(companyData[name]);
    console.log(companyData[0].name);
    // const companyNames = companyData.map((company) => company.name);
    // setCompanies(companyNames);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const headers = {
      authorization: localStorage.getItem('token'),
    };
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/users/complete_profile`,
        {
          // im passing the same company id because we dont have the select yet
          user: { company_id: 2, company_role: data.role, birthday: data.birthdate },
        },
        {
          headers: headers,
        },
      )
      .then((resp) => console.log(resp));
  };

  return (
    <form className={form} onSubmit={handleSubmit}>
      {/* <Select
        name='category'
        value={data.company}
        onChange={handleChange}
        // options={companies}
        label='Category'
        required
      /> */}
      <Input
        type='text'
        name='company'
        value={data.company}
        onChange={handleChange}
        label='Which company do you work for?'
        mandatory
      />
      <Input
        type='text'
        name='role'
        value={data.role}
        onChange={handleChange}
        label='What is your occupation?'
        mandatory
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
  );
};

export default EditProfile;
