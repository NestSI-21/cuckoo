/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import Radio from '../../elements/Radio';
import Input from '../../elements/Input';
import Select from '../../elements/Select';
import Textarea from '../../elements/Textarea';
import ImageUpload from '../ImageUpload';
import Button from '../../elements/Button';
import { form, radioWrapper, flexWrapper, gridWrapper, btnWrapper } from './cuckooform.module.scss';
import { post } from '../../helpers/Networking';

const CuckooForm = () => {
  const [data, setData] = useState({
    type: 0,
    title: '',
    location: '',
    category: '',
    description: '',
    images: [],
    startDate: {},
    endDate: {},
    startTime: {},
    endTime: {},
  });

  //Select dropdown options - announcements/events
  const typeOptions = [
    { id: 1, type: 'Announcement' },
    { id: 2, type: 'Event' },
  ];
  const announcementOptions = ['Alert', 'New Company', 'New Employee', 'Other'];
  const eventOptions = ['Education', 'Social', 'Other'];

  // Handler for inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: e.target.type === 'radio' ? parseInt(value) : value,
    }));
  };

  // Handler for image upload
  const handleImageChange = (newImages) => {
    setData((prevData) => ({ ...prevData, images: newImages }));
  };

  // Resets category when cuckoo type is selected
  const resetCategory = () => {
    setData((prevData) => ({ ...prevData, category: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('type_id', data.type);
    formData.append('title', data.title);
    formData.append('location', data.location);
    formData.append('category', data.category);
    formData.append('description', data.description);
    formData.append('images', data.images);
    formData.append('start_date', data.startDate);
    formData.append('end_date', data.endDate);
    formData.append('start_time', data.startTime);
    formData.append('end_time', data.endTime);

    post(formData, '/posts', function (response) {
      console.log(response);
      // console.log(JSON.parse(response.config.data));
    });
  };

  return (
    <form className={form} onSubmit={handleSubmit}>
      <div className={radioWrapper}>
        {typeOptions.map((type, i) => (
          <Radio
            key={i}
            id={type.id}
            name='type'
            label={type.type}
            value={type.id}
            checked={data.type === type.id}
            onClick={() => resetCategory(type)}
            onChange={handleChange}
            required
          />
        ))}
      </div>

      <Input
        type='text'
        name='title'
        value={data.title}
        onChange={handleChange}
        label='Give your Cuckoo a title'
        required
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
          required
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
          onChange={handleChange}
          label='From:'
        />
        <Input
          type='date'
          name='endDate'
          value={data.endDate}
          onChange={handleChange}
          label='To:'
        />
        <Input
          type='time'
          name='startTime'
          value={data.startTime}
          onChange={handleChange}
          label='Starting at:'
        />

        <Input
          type='time'
          name='endTime'
          value={data.endTime}
          onChange={handleChange}
          label='Ending at:'
        />
      </div>
      <div className={btnWrapper}>
        <Button text='PUBLISH' type='submit' style='green' />
      </div>
    </form>
  );
};

export default CuckooForm;
