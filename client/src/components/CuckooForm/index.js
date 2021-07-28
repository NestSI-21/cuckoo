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
      <Input type='text' name='title' label='Give a title to your Cuckoo' mandatory />
      <div className={flexWrapper}>
        <Input type='text' name='location' label='Where is will the event take place?' />
        <Select name='Category' value='test' content='test' label='Category' mandatory />
      </div>
      <Textarea name='description' label='Tell us more about what you want to share' />
      <ImageUpload />
      <div className={gridWrapper}>
        <Input type='date' name='startDate' label='From:' />
        <Input type='time' name='startHour' label='Starting at:' />
        <Input type='date' name='endDate' label='To:' />
        <Input type='time' name='endHour' label='Ending at:' />
      </div>
      <div className={btnWrapper}>
        <Button text='PUBLISH' type='submit' style='green' />
      </div>
    </form>
  );
};

export default CuckooForm;
