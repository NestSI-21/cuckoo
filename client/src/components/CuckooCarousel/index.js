import React, { useState, useEffect, Fragment } from 'react';
import denormalize from '@weareredlight/denormalize_json_api';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { get } from '../../helpers/Networking';
import CuckooCard from '../CuckooCard';
import nocuckoos from '../../assets/logos/nocuckoos.svg';
import {
  carousel,
  carouselContainer,
  cuckooCard,
  dotsContainer,
  cardHolder,
  noCuckoos,
} from './cuckoocarousel.module.scss';

const CuckooCarousel = () => {
  const [cuckoos, setCuckoos] = useState([]);

  useEffect(() => {
    getCuckoos();
  }, []);

  const getCuckoos = () => {
    get('/posts', function (resp) {
      const cuckoos = denormalize(resp.data).data;
      setCuckoos(cuckoos);
    });
  };

  return (
    <>
      {cuckoos != '' ? (
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
      ) : (
        <div className={noCuckoos}>
          <img src={nocuckoos} alt='nocuckoos' />
          <h3>Cuck-OOPS</h3>
          <p>There's no Cuckoos here</p>
        </div>
      )}
    </>
  );
};

export default CuckooCarousel;
