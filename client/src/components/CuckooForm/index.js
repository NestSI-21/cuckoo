import React, { useState } from 'react';
import Radio from '../../elements/Radio';
import Input from '../../elements/Input';
import Select from '../../elements/Select';
import Textarea from '../../elements/Textarea';
import ImageUpload from '../ImageUpload';
import Button from '../../elements/Button';
import { form, radioWrapper, flexWrapper, gridWrapper, btnWrapper } from './cuckooform.module.scss';

const CuckooForm = () => {
  const [data, setData] = useState({
    type: '',
    title: '',
    location: '',
    category: '',
    description: '',
    images: [],
    startDate: {},
    startTime: {},
    endDate: {},
    endTime: {},
  });

  // Select dropdown options - announcements/events
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
  const resetCategory = () => {
    setData((prevData) => ({ ...prevData, category: '' }));
  };

  // Handler for form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <form className={form} onSubmit={handleSubmit}>
      <div className={radioWrapper}>
        <Radio
          id='Announcement'
          name='type'
          label='Announcement'
          value='Announcement'
          checked={data.type === 'Announcement'}
          onClick={resetCategory}
          onChange={handleChange}
          required
        />
        <Radio
          id='Event'
          name='type'
          label='Event'
          value='Event'
          checked={data.type === 'Event'}
          onClick={resetCategory}
          onChange={handleChange}
          required
        />
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
          options={
            data.type === 'Announcement'
              ? announcementOptions
              : data.type === 'Event'
              ? eventOptions
              : []
          }
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
