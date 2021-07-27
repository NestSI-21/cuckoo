import React from 'react';
import ImageUpload from '../ImageUpload';
import Input from '../../elements/Input';
import Textarea from '../../elements/Textarea';
import Select from '../../elements/Select';
import Button from '../../elements/Button';
import { form, flexWrapper, gridWrapper, btnWrapper } from './cuckooform.module.scss';

const CuckooForm = () => {
  return (
    <form className={form}>
      <Input type='text' name='title' placeholder='Give a title to your Cuckoo' mandatory={true} />
      <div className={flexWrapper}>
        <Input type='text' name='location' placeholder='Where is will the event take place?' />
        <Select
          name='Category'
          value='test'
          content='test'
          placeholder='Category'
          mandatory={true}
        />
      </div>
      <Textarea name='description' placeholder='Tell us more about what you want to share' />
      <ImageUpload />
      <div className={gridWrapper}>
        <Input type='date' name='startDate' placeholder='From:' />
        <Input type='time' name='startHour' placeholder='Starting at:' />
        <Input type='date' name='endDate' placeholder='To:' />
        <Input type='time' name='endHour' placeholder='Ending at:' />
      </div>
      <div className={btnWrapper}>
        <Button text='PUBLISH' type='submit' style='green' />
      </div>
    </form>
  );
};

export default CuckooForm;
