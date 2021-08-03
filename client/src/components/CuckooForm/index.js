/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import axios from 'axios';
import Radio from '../../elements/Radio';
import Input from '../../elements/Input';
import Select from '../../elements/Select';
import Textarea from '../../elements/Textarea';
import ImageUpload from '../ImageUpload';
import Button from '../../elements/Button';
import { form, radioWrapper, flexWrapper, gridWrapper, btnWrapper } from './cuckooform.module.scss';

const CuckooForm = () => {
  const [data, setData] = useState({
    type: undefined,
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

  console.log(typeof data.type);

  // let user = localStorage.getItem('data');
  // user = user.id;

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
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handler for image upload
  const handleImageChange = (newImages) => {
    setData((prevData) => ({ ...prevData, images: newImages }));
  };

  // Resets category when cuckoo type is selected
  const resetCategory = (type) => {
    console.log(typeof type.id);
    setData((prevData) => ({ ...prevData, category: '' }));
  };

  // POST Cuckoo
  const postCuckoo = async ({
    type,
    title,
    location,
    category,
    description,
    // images,
    startDate,
    endDate,
    startTime,
    endTime,
  }) => {
    //   const formData = new FormData();
    //   formData.append('type', type);
    //   formData.append('title', title);
    //   formData.append('location', location);
    //   formData.append('category', category);
    //   formData.append('description', description);
    //   formData.append('images', images);
    //   formData.append('startDate', startDate);
    //   formData.append('endDate', endDate);
    //   formData.append('startTime', startTime);
    //   formData.append('endTime', endTime);

    const headers = {
      authorization: localStorage.getItem('token'),
    };

    // FOR TESTING REMOVE
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

    try {
      await axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/posts`,
          {
            post: {
              type_id: parseInt(type),
              title: title,
              location: location,
              category: category,
              description: description,
              img_url: '',
              start_date: startDate,
              end_date: endDate,
              start_time: startTime,
              end_time: endTime,
            },
          },
          {
            headers: headers,
          },
        )
        .then((resp) => console.log(resp));
    } catch (error) {
      console.log(error);
    }
  };

  // Handler for form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postCuckoo(data);
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
            checked={data.type == type.id}
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
          options={data.type === '1' ? announcementOptions : data.type === '2' ? eventOptions : []}
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
