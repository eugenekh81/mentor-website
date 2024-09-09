import React from 'react';
import { ReviewItem } from '../ReviewItem';
import css from './Reviews.module.scss';
import cn from 'classnames';
import { ReviewsList } from './ReviewsList';
import { ReviewsListMobile } from './ReviewsList';
import { Carousel } from '../Carousel';

export const Reviews: React.FC = React.memo(() => {
  return (
    <section className={cn('section', css.reviews)} id='reviews'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>Відгуки студентів</h2>
          <Carousel>
            {ReviewsListMobile.map((review) => (
              <ReviewItem key={review.id} {...review} />
            ))}
          </Carousel>

          <div className={css.list}>
            {ReviewsList.map((review) => (
              <ReviewItem key={review.id} {...review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
