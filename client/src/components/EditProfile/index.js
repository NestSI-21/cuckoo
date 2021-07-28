import React, { useState } from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import { form } from './editprofile.module.scss';
// import axios from 'axios';

const EditProfile = () => {
  const [data, setData] = useState({
    company: '',
    role: '',
    birthdate: {},
  });

  // const [company, setCompany] = useState("")
  // const [role, setRole] = useState("")
  // const [birthdate, setBirthdate] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    console.log(data);
  };

  console.log(data);

  // const handleSubmit=(event)=>{
  //   event.preventDefault()
  //   // console.log(company,role,birthdate)  // const [company, setCompany] = useState("")
  // // const [role, setRole] = useState("")
  // // const [birthdate, setBirthdate] = useState("")
  //   axios
  //     .post(`${process.env.REACT_APP_API_BASE_URL}/users/complete_profile`, { company: company, role: role, birthdate: birthdate })
  //     .then((resp) => console.log(resp));
  // }

  return (
    <form className={form}>
      <Input
        type='text'
        name='company'
        value={data.company}
        onChange={(e) => handleChange(e)}
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
