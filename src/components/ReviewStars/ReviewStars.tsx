import React from 'react';
import { ReviewStar } from '../ReviewStar';

export const ReviewStars: React.FC = () => {
  return (
    <div className='review__stars'>
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
      <ReviewStar />
    </div>
  );
};
