import React from 'react';
import { ReviewItem } from '../ReviewItem';
import './Reviews.scss';
import { ReviewsList } from './ReviewsList';

export const Reviews:React.FC = React.memo(() => {
  return (
    <section className='section reviews' id="reviews">
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>ВІДГУКИ</h2>

          <ul className='reviews__list'>
            {ReviewsList.map((review) => (
              <ReviewItem key={review.id} {...review} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});
