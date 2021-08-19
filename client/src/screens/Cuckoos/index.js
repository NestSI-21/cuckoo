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
  const [cuckoos, setCuckoos] = useState();
  const [cuckooType, setCuckooType] = useState();
  const [announcementOptions, setAnnouncementOptions] = useState();
  const [eventOptions, setEventOptions] = useState();
  const [cuckooFilters, setCuckooFilters] = useState({ query: '', types: '', categories: [] });
  const [showFilters, setShowFilters] = useState(false);

  const width = window.innerWidth;
  const breakpoint = 1024;

  useEffect(() => {
    getCuckooTypes();
    getAnnouncementOptions();
    getEventOptions();
  }, []);

  useEffect(() => {
    getCuckoos();
  }, [cuckooFilters]);

  // Handler to show/hide filters
  const toggleOpenFilters = () => {
    setShowFilters(!showFilters);
  };

  // Handler for type filter click
  const handleTypeFilterClick = (value) => {
    setCuckooFilters((prevData) => ({
      ...prevData,
      types: value,
      categories: [],
    }));
  };

  // Handler for category filter click
  const handleCategoryFilterClick = (value) => {
    if (cuckooFilters.categories.includes(value)) {
      setCuckooFilters((prevData) => ({
        ...prevData,
        categories: prevData.categories.filter((category) => category != value),
      }));
    } else {
      setCuckooFilters((prevData) => ({
        ...prevData,
        categories: [...prevData.categories, value],
      }));
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setCuckooFilters((prevData) => ({ ...prevData, query: e.target.value }));
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

  const getCuckoos = () => {
    get(
      `/posts?query=${cuckooFilters.query}&types=${
        cuckooFilters.types
      }${cuckooFilters.categories.map((category) => {
        return `&categories[]=${category}`;
      })}`,
      function (resp) {
        const cuckoos = denormalize(resp.data).data;
        setCuckoos(cuckoos);
      },
    );
  };

  return (
    <Layout pageTitle='Cuckoos'>
      <div className={contentContainer}>
        <div className={filterContainer}>
          <div className={search}>
            <SearchBar handleSearchChange={handleSearchChange} />
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
                    active={cuckooFilters.types === ''}
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
                        active={cuckooFilters.types === type.id}
                      />
                    ))}
                </div>
              </div>
              <div className={categoryFilters}>
                <h3>Category:</h3>
                <p className={cuckooFilters.types === '' ? show : hide}>Please select a type</p>
                <div className={cuckooFilters.types === '1' ? show : hide}>
                  {announcementOptions &&
                    announcementOptions.map((category, i) => (
                      <FilterBtn
                        key={i}
                        id={category.id}
                        name='category'
                        value={category.id}
                        text={category.name}
                        handleCategoryFilterClick={handleCategoryFilterClick}
                        active={cuckooFilters.categories.includes(category.id)}
                      />
                    ))}
                </div>
                <div className={cuckooFilters.types === '2' ? show : hide}>
                  {eventOptions &&
                    eventOptions.map((category, i) => (
                      <FilterBtn
                        key={i}
                        id={category.id}
                        name='category'
                        value={category.id}
                        text={category.name}
                        handleCategoryFilterClick={handleCategoryFilterClick}
                        active={cuckooFilters.categories.includes(category.id)}
                      />
                    ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <CuckooList cuckoos={cuckoos} />
      </div>
    </Layout>
  );
};

export default Cuckoos;
