import React from 'react';
import { ReviewStar } from '../ReviewStar';
import css from './ReviewStars.module.scss';

export const ReviewStars: React.FC = () => {
  return (
    <div className={css.stars}>
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
    </div>
  );
};
