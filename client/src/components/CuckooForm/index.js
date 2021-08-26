import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import denormalize from '@weareredlight/denormalize_json_api';
import Radio from '../../elements/Radio';
import Input from '../../elements/Input';
import Select from '../../elements/Select';
import Textarea from '../../elements/Textarea';
import ImageUpload from '../ImageUpload';
import Button from '../../elements/Button';
import apiConfig from '../../helpers/Networking';
import { toast } from 'react-toastify';
import {
  form,
  radioWrapper,
  flexWrapper,
  gridWrapper,
  btnWrapper,
  radioDescription,
  errorRadioDescription,
  star,
} from './cuckooform.module.scss';

const CuckooForm = () => {
  const [cuckooType, setCuckooType] = useState();
  const [allOptions, setAllOptions] = useState();
  const [announcementOptions, setAnnouncementOptions] = useState();
  const [eventOptions, setEventOptions] = useState();
  const [typeError, setTypeError] = useState(false);
  const [titleError, setTitleError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [dateError, setDateError] = useState('');
  const [authError, setAuthError] = useState('');
  const [data, setData] = useState({
    type: 0,
    title: '',
    location: '',
    category: 0,
    description: '',
    images: [],
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
  });

  let history = useHistory();

  useEffect(() => {
    getCuckooTypes();
    getAnnouncementOptions();
    getEventOptions();
    getAllOptions();
  }, []);

  // get Slack Channel and change Post button
  const getSlackChannel = () => {
    const found = allOptions && allOptions.find((option) => option.id == data.category);
    if (found) {
      return `to ${found.slack_channel}`;
    } else {
      return '';
    }
  };

  const getCuckooTypes = () => {
    apiConfig.get('/categories', function (resp) {
      const types = denormalize(
        resp.data.included.map(({ id, attributes: { name } }) => ({ id, name })),
      );
      setCuckooType(types);
    });
  };

  const getAllOptions = () => {
    apiConfig.get('/categories', function (resp) {
      const options = denormalize(resp.data).data;
      setAllOptions(options);
    });
  };

  const getAnnouncementOptions = () => {
    apiConfig.get('/categories', function (resp) {
      const options = denormalize(resp.data)
        .data.filter((option) => option.type.id === '1')
        .map(({ id, name }) => ({ id, name }));
      setAnnouncementOptions(options);
    });
  };

  const getEventOptions = () => {
    apiConfig.get('/categories', function (resp) {
      const options = denormalize(resp.data)
        .data.filter((option) => option.type.id === '2')
        .map(({ id, name }) => ({ id, name }));
      setEventOptions(options);
    });
  };

  const formValidation = () => {
    let typeError = false;
    let titleError = null;
    let categoryError = null;
    let dateError = null;

    if (!data.type) {
      typeError = true;
    }
    if (!data.title) {
      titleError = 'Give a title to your Cuckoo';
    } else if (data.title.length >= 50) {
      titleError = 'This title is too long';
    }
    if (!data.category) {
      categoryError = 'Please choose a category';
    }
    if (data.startDate > data.endDate) {
      dateError = 'Invalid date';
    }

    if (typeError || titleError || categoryError || dateError) {
      setTypeError(typeError);
      setTitleError(titleError);
      setCategoryError(categoryError);
      setDateError(dateError);
      return;
    }
  };

  // Handler for inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: e.target.type === 'radio' ? parseInt(value) : value,
    }));
  };

  // Handler for startDate: sets endDate when startDate is selected
  const handleStartDateChange = (e) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      startDate: value,
      endDate: prevData.endDate != '' ? prevData.endDate : value,
    }));
  };

  // Handler for image upload
  const handleImageChange = (newImages) => {
    setData((prevData) => ({ ...prevData, images: newImages }));
  };

  // Resets category when cuckoo type is selected
  const resetCategory = () => {
    setData((prevData) => ({ ...prevData, category: '' }));
    if (data.type == 0 && typeError) {
      setTypeError(!typeError);
    }
  };

  const handleSubmit = (e) => {
    formValidation();

    e.preventDefault();

    const startDate = data.startDate ? new Date(data.startDate) : undefined;
    const startTime = data.startTime;

    const endDate = data.endDate ? new Date(data.endDate) : undefined;
    const endTime = data.endTime;

    const formData = new FormData();
    formData.append('post[type_id]', data.type);
    formData.append('post[title]', data.title);
    formData.append('post[location]', data.location);
    formData.append('post[category_id]', data.category);
    formData.append('post[description]', data.description);
    data.images.forEach((image) => {
      formData.append('post[images][]', image);
    });

    if (startDate || startTime) {
      formData.append(
        'post[start_date]',
        new Date(
          startDate?.getFullYear() ?? 0,
          startDate?.getMonth() ?? 0,
          startDate?.getDate() ?? 0,
          startTime.split(':')?.[0] ?? 0,
          startTime.split(':')?.[1] ?? 0,
        ).toISOString(),
      );
    }
    if (endDate || endTime) {
      formData.append(
        'post[end_date]',
        new Date(
          endDate?.getFullYear() ?? 0,
          endDate?.getMonth() ?? 0,
          endDate?.getDate() ?? 0,
          endTime.split(':')?.[0] ?? 0,
          endTime.split(':')?.[1] ?? 0,
        ).toISOString(),
      );
    }
    if (
      data.type != 0 &&
      data.title != '' &&
      data.category != '' &&
      data.startDate <= data.endDate
    ) {
      apiConfig.post(formData, '/posts', function (resp) {
        if (resp.status === 200) {
          history.push('/cuckoos');
          toast('Your Cuckoo was posted! 🎉', {
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
      <form className={form} onSubmit={handleSubmit}>
        <p className={!typeError ? radioDescription : errorRadioDescription}>
          Select the type of Cuckoo you want to create
          <span className={star}>
            <i className='fas fa-asterisk'></i>
          </span>
        </p>
        <div className={radioWrapper}>
          {cuckooType &&
            cuckooType.map((type, i) => (
              <Radio
                key={i}
                id={type.id}
                name='type'
                label={type.name}
                value={type.id}
                checked={parseInt(data.type) === parseInt(type.id)}
                onClick={resetCategory}
                onChange={handleChange}
              />
            ))}
        </div>

        <Input
          type='text'
          name='title'
          value={data.title}
          onChange={handleChange}
          label='Give your Cuckoo a title'
          mandatory
          error={titleError}
          onFocus={titleError ? () => setTitleError('') : null}
        />
        <div className={flexWrapper}>
          <Input
            type='text'
            name='location'
            value={data.location}
            onChange={handleChange}
            label='Location'
          />
          <Select
            name='category'
            value={data.category}
            onChange={handleChange}
            options={data.type === 1 ? announcementOptions : data.type === 2 ? eventOptions : []}
            label='Category'
            mandatory
            error={categoryError}
            onFocus={categoryError ? () => setCategoryError('') : null}
          />
        </div>
        <Textarea
          name='description'
          value={data.description}
          onChange={handleChange}
          label='Tell us more about what you want to share'
        />
        <ImageUpload images={data.images} onChange={handleImageChange} />
        <div className={gridWrapper}>
          <Input
            type='date'
            name='startDate'
            value={data.startDate}
            onChange={handleStartDateChange}
            label='From:'
            error={dateError}
            onFocus={dateError ? () => setDateError('') : null}
            max='2025-01-01'
            min='2015-01-01'
          />
          <Input
            type='date'
            name='endDate'
            value={data.endDate}
            onChange={handleChange}
            label='To:'
            disabled={data.startDate === ''}
            error={dateError}
            onFocus={dateError ? () => setDateError('') : null}
            max='2025-01-01'
            min='2015-01-01'
          />
          <Input
            type='time'
            name='startTime'
            value={data.startTime}
            onChange={handleChange}
            label='Starting at:'
            disabled={data.startDate === ''}
          />

          <Input
            type='time'
            name='endTime'
            value={data.endTime}
            onChange={handleChange}
            label='Ending at:'
            disabled={data.startTime === ''}
          />
          {dateError ? <p>{dateError}</p> : null}
        </div>
        <div className={btnWrapper}>
          <Button text={`Post ${getSlackChannel()}`} type='submit' style='green' />
          {authError ? <p>{authError}</p> : null}
        </div>
      </form>
    </>
  );
};

export default CuckooForm;
