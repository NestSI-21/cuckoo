import React from 'react';
import Input from '../../elements/Input';
import Textarea from '../../elements/Textarea';
import Select from '../../elements/Select';
import Button from '../../elements/Button';
import { form, flexWrapper, gridWrapper } from './cuckooform.module.scss';

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
      <div className={gridWrapper}>
        <Input type='date' name='startDate' placeholder='From:' />
        <Input type='time' name='startHour' placeholder='Starting at:' />
        <Input type='date' name='endDate' placeholder='To:' />
        <Input type='time' name='endHour' placeholder='Ending at:' />
      </div>
      <Button text='PUBLISH' type='submit' />
    </form>
  );
};

export default CuckooForm;
