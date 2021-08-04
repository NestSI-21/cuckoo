import React, { useState, useEffect, Fragment } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
  carousel,
  carouselContainer,
  cuckooCard,
  dotsContainer,
  cardHolder,
} from './cuckoocarousel.module.scss';
import CuckooCard from '../CuckooCard';
import jsondata from '../../mockdata.json';

const CuckooCarousel = () => {
  const [cuckoos, setCuckoos] = useState([]);
  useEffect(() => {
    const data = jsondata.map((value) => value);
    setCuckoos(data);
  }, []);

  return (
    <div
      style={{
        paddingBottom: '30px',
        position: 'relative',
      }}
      className={carousel}
    >
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass={carouselContainer}
        dotListClass={dotsContainer}
        draggable
        focusOnSelect={false}
        infinite
        itemClass={cuckooCard}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        showDots
        slidesToSlide={1}
        swipeable
      >
        {cuckoos.map((cuckoo, i) => (
          <Fragment key={i}>
            <div className={cardHolder}>
              <CuckooCard cuckoo={cuckoo} />
            </div>
          </Fragment>
        ))}
      </Carousel>
    </div>
  );
};

export default CuckooCarousel;
