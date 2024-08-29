import React from 'react';
import { ReviewItem } from '../ReviewItem';
import './Reviews.scss';
import { ReviewsList } from './ReviewsList';
import { useDesktop } from '../../hooks/useDesktop.ts';
import { Carousel } from '../Carousel';

export const Reviews: React.FC = React.memo(() => {
  const isOnDesktop = useDesktop();
  return (
    <section className='section reviews' id='reviews'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>
            {/* ВІДГУКИ */}
            Відгуки студентів
          </h2>

          {!isOnDesktop ? (
            <Carousel>
              {ReviewsList.map((review) => (
              <ReviewItem key={review.id} {...review} />
            ))}
            </Carousel>
          ) : (
            <ul className='reviews__list'>
            {ReviewsList.map((review) => (
              <ReviewItem key={review.id} {...review} />
            ))}
          </ul>
          )}

        </div>
      </div>
    </section>
  );
});
