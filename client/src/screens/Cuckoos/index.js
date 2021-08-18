import React, { useState, useEffect } from 'react';
import denormalize from '@weareredlight/denormalize_json_api';
import Layout from '../../components/Layout';
import SearchBar from '../../elements/SearchBar';
import FilterBtn from '../../elements/FilterBtn';
import CuckooList from '../../components/CuckooList';
import { get } from '../../helpers/Networking';
import {
  contentContainer,
  filterContainer,
  search,
  filters,
  typeFilters,
  categoryFilters,
  show,
  hide,
} from './cuckoos.module.scss';

const Cuckoos = () => {
  const [cuckooType, setCuckooType] = useState();
  const [announcementOptions, setAnnouncementOptions] = useState();
  const [eventOptions, setEventOptions] = useState();
  const [cuckooFilters, setCuckooFilters] = useState({ searchTerm: '', type: '', category: [] });
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const width = window.innerWidth;
  const breakpoint = 1024;

  useEffect(() => {
    getCuckooTypes();
    getAnnouncementOptions();
    getEventOptions();
  }, []);

  // Handler to show/hide filters
  const toggleOpenFilters = () => {
    setShowFilters(!showFilters);
  };

  // Handler for type filter click
  const handleTypeFilterClick = (value) => {
    setCuckooFilters((prevData) => ({
      ...prevData,
      type: value,
    }));
  };

  // Handler for category filter click
  const handleCategoryFilterClick = (value) => {
    if (cuckooFilters.category.includes(value)) {
      setCuckooFilters((prevData) => ({
        ...prevData,
        category: prevData.category.filter((cat) => cat != value),
      }));
    } else {
      setCuckooFilters((prevData) => ({
        ...prevData,
        category: [...prevData.category, value],
      }));
    }
  };

  const handleSearchInput = () => {
    setCuckooFilters();
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
                {/* TODO: implement date filters
                <div className={dateFilters}>
                  <h3>Date:</h3>
                  <div className={dateLabels}>
                    <Input type='date' name='startDate' label='From:' />
                    <Input type='date' name='endDate' label='To:' />
                  </div>
                </div> */}
                <div className={typeFilters}>
                  <h3>Type:</h3>
                  <FilterBtn
                    name='type'
                    value=''
                    text='All'
                    handleTypeFilterClick={handleTypeFilterClick}
                    active={cuckooFilters.type === ''}
                  />
                  {cuckooType &&
                    cuckooType.map((type, i) => (
                      <FilterBtn
                        key={i}
                        id={type.id}
                        name='type'
                        value={type.id}
                        text={type.name}
                        handleTypeFilterClick={handleTypeFilterClick}
                        active={cuckooFilters.type === type.id}
                      />
                    ))}
                </div>
              </div>
              <div className={categoryFilters}>
                <h3>Category:</h3>
                <p className={cuckooFilters.type === '' ? show : hide}>Please select a type</p>
                <div className={cuckooFilters.type === '1' ? show : hide}>
                  {announcementOptions &&
                    announcementOptions.map((category, i) => (
                      <FilterBtn
                        key={i}
                        id={category.id}
                        name='category'
                        value={category.id}
                        text={category.name}
                        handleCategoryFilterClick={handleCategoryFilterClick}
                        active={cuckooFilters.category.includes(category.id)}
                      />
                    ))}
                </div>
                <div className={cuckooFilters.type === '2' ? show : hide}>
                  {eventOptions &&
                    eventOptions.map((category, i) => (
                      <FilterBtn
                        key={i}
                        id={category.id}
                        name='category'
                        value={category.id}
                        text={category.name}
                        handleCategoryFilterClick={handleCategoryFilterClick}
                        active={cuckooFilters.category.includes(category.id)}
                      />
                    ))}
                </div>
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
