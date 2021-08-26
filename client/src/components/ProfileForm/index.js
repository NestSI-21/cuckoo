import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import denormalize from '@weareredlight/denormalize_json_api';
import apiConfig from '../../helpers/Networking';
import Avatar from '../../elements/Avatar';
import Select from '../../elements/Select';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import { form, errorMessage } from './profileform.module.scss';
import { toast } from 'react-toastify';
import { useUserContext } from '../../hooks/useUser';

const ProfileForm = () => {
  const { profileComplete, setProfileComplete } = useUserContext();
  const [companies, setCompanies] = useState([]);
  const [user, setUser] = useState();
  const [data, setData] = useState({
    company: '',
    role: '',
    birthday: '',
  });

  const [companyError, setCompanyError] = useState('');
  const [roleError, setRoleError] = useState('');
  const [authError, setAuthError] = useState('');

  const formValidation = () => {
    let companyError = null;
    let roleError = null;

    if (!data.company) {
      companyError = 'Please insert your company';
    }
    if (!data.role) {
      roleError = 'Please tell us what you do';
    }
    if (companyError || roleError) {
      setCompanyError(companyError);
      setRoleError(roleError);
      return;
    }
  };

  let history = useHistory();

  useEffect(() => {
    getCompanies();
    getUser();
  }, []);

  useEffect(() => {
    if (user?.profile_completed) {
      setData((prevData) => ({
        ...prevData,
        company: user.company_id,
        role: user.company_role,
        birthday: user.birthday,
      }));
    }
  }, [user]);

  // Get companies
  const getCompanies = () => {
    apiConfig.get('/companies', function (resp) {
      const companies = denormalize(
        resp.data.data.map(({ id, attributes: { name } }) => ({ id, name })),
      );
      setCompanies(companies);
    });
  };

  // Get user
  const getUser = () => {
    apiConfig.get('/users/profiles', function (resp) {
      const user = denormalize(resp.data).data;
      setUser(user);
    });
  };

  // Handler for input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Submit Handler for user profile
  const handleSubmit = (e) => {
    formValidation();
    e.preventDefault();

    const formData = new FormData();
    formData.append('user[company_id]', data.company);
    formData.append('user[company_role]', data.role);
    formData.append('user[birthday]', data.birthday);

    if (data.company != '' && data.role != '') {
      apiConfig.put(formData, '/users/profiles', function (resp) {
        if (resp.status === 200) {
          if (!profileComplete) {
            setProfileComplete(true);
          }
          history.push('/dashboard');
          toast('Your profile was updated! 🎉', {
            className: 'toast success',
          });
        }
      });
    } else {
      setAuthError('Something went wrong');
      toast('Something went wrong 😔', {
        className: 'toast failure',
      });
    }
  };

  return (
    <>
      {user && (
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
              mandatory
              error={companyError}
              onFocus={companyError ? () => setCompanyError('') : null}
            />
            <Input
              type='text'
              name='role'
              value={data.role}
              onChange={handleChange}
              label='What is your occupation?'
              mandatory
              error={roleError}
              onFocus={roleError ? () => setRoleError('') : null}
            />
            <Input
              type='date'
              name='birthday'
              value={data.birthday}
              onChange={handleChange}
              label='Please enter your date of birth'
            />
            <Button text='Continue' type='submit' />
            {authError ? <p className={errorMessage}>{authError}</p> : null}
          </form>
        </>
      )}
    </>
  );
};

export default ProfileForm;
