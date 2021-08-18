import React, { useState, useEffect } from 'react';
import denormalize from '@weareredlight/denormalize_json_api';
import Layout from '../../components/Layout';
import SearchBar from '../../elements/SearchBar';
import FilterBtn from '../../elements/FilterBtn';
import Input from '../../elements/Input';
import CuckooList from '../../components/CuckooList';
import { get } from '../../helpers/Networking';
import {
  contentContainer,
  filterContainer,
  search,
  filters,
  dateFilters,
  dateLabels,
  typeFilters,
  categoryFilters,
} from './cuckoos.module.scss';

const Cuckoos = () => {
  const [cuckooType, setCuckooType] = useState();
  const [announcementOptions, setAnnouncementOptions] = useState();
  const [eventOptions, setEventOptions] = useState();
  const [cuckooFilters, setCuckooFilters] = useState({ type: [], category: [] });
  // const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const width = window.innerWidth;
  const breakpoint = 1024;

  useEffect(() => {
    getCuckooTypes();
    getAnnouncementOptions();
    getEventOptions();
  }, []);

  console.log(cuckooFilters);

  // const toggleActive = () => {
  //   setActive(!active);
  // };

  const toggleOpenFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterClick = (e) => {
    const { name, value } = e.target;

    setCuckooFilters((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFilterClick = (name, value, filterProp) => {
    setAllFilters((prevData) => ({
      ...prevData,
      [filterProp]: {
        ...prevData[filterProp],
        [name]: value,
      },
    }));
  };

  const getCuckooTypes = () => {
    get('/categories', function (resp) {
      const types = denormalize(
        resp.data.included.map(({ id, attributes: { name } }) => ({ id, name })),
      );
      setCuckooType(types);
    });
  };
  const getAnnouncementOptions = () => {
    get('/categories', function (resp) {
      const options = denormalize(resp.data)
        .data.filter((option) => option.type.id === '1')
        .map(({ id, name }) => ({ id, name }));
      setAnnouncementOptions(options);
    });
  };

  const getEventOptions = () => {
    get('/categories', function (resp) {
      const options = denormalize(resp.data)
        .data.filter((option) => option.type.id === '2')
        .map(({ id, name }) => ({ id, name }));
      setEventOptions(options);
    });
  };

  return (
    <Layout pageTitle='Cuckoos'>
      <div className={contentContainer}>
        <div className={filterContainer}>
          <div className={search}>
            <SearchBar setSearchTerm={setSearchTerm} />
            <button onClick={toggleOpenFilters}>
              <i className='fas fa-sliders-h'></i>
            </button>
          </div>
          {showFilters || width > breakpoint ? (
            <div className={filters}>
              <div>
                <div className={dateFilters}>
                  <h3>Date:</h3>
                  <div className={dateLabels}>
                    <Input type='date' name='startDate' label='From:' />
                    <Input type='date' name='endDate' label='To:' />
                  </div>
                </div>
                <div className={typeFilters}>
                  <h3>Type:</h3>
                  {cuckooType &&
                    cuckooType.map((type, i) => (
                      <FilterBtn
                        key={i}
                        id={type.id}
                        name='type'
                        value={type.id}
                        text={type.name}
                        onClick={handleFilterClick}
                        // active={active}
                      />
                    ))}
                </div>
              </div>
              <div className={categoryFilters}>
                <h3>Category:</h3>
                {announcementOptions &&
                  announcementOptions.map((category, i) => (
                    <FilterBtn
                      key={i}
                      id={category.id}
                      name='category'
                      value={category.id}
                      text={category.name}
                      onClick={handleFilterClick}
                      // active={active}
                    />
                  ))}
                {eventOptions &&
                  eventOptions.map((category, i) => (
                    <FilterBtn
                      key={i}
                      id={category.id}
                      name='category'
                      value={category.id}
                      text={category.name}
                      onClick={handleFilterClick}
                      // active={active ?? false}
                    />
                  ))}
              </div>
            </div>
          ) : null}
        </div>
        <CuckooList searchTerm={searchTerm} />
      </div>
    </Layout>
  );
};

export default Cuckoos;
