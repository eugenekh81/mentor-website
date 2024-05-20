import React from 'react';
import { ReviewStars } from '../ReviewStars';
import './ReviewItem.scss';

type Props = {
  name: string;
  reviewDate: string;
  reviewText: string;
  avatarSrc: string | null;
};

export const ReviewItem: React.FC<Props> = ({
  name,
  reviewDate,
  reviewText,
  avatarSrc,
}) => {
  return (
    <li className='reviews__item review'>
      <div className='review__header'>
        <div className='review__avatar-container'>
          <img src={avatarSrc || ''} alt='' className='review__avatar' />
        </div>

        <div className='review__info'>
          <h3 className='review__name'>{name}</h3>
          <div className='review__rating'>
            <ReviewStars />
            <div className='review__date'>{reviewDate}</div>
          </div>
        </div>
      </div>
      <p
        className='review__text'
        dangerouslySetInnerHTML={{ __html: reviewText }}
      />
    </li>
  );
};
