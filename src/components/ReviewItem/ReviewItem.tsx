import React from 'react';
import { ReviewStars } from '../ReviewStars';
import cn from 'classnames';
import css from'./ReviewItem.module.scss';

type Props = {
  name: string;
  reviewDate: string;
  reviewText: string;
  avatarSrc: string | null;
};

export const ReviewItem: React.FC<Props> = React.memo(({
  name,
  reviewDate,
  reviewText,
  avatarSrc,
}) => {
  return (
    <article className={cn('reviews__item', css.review)}>
      <div className={css.header}>
        <div className={css.avatarContainer}>
          <img src={avatarSrc || ''} alt='' className={css.avatar} />
        </div>

        <div className={css.info}>
          <h3 className={css.name}>{name}</h3>
          <div className={css.info}>
            <ReviewStars />
            <div className={css.date}>{reviewDate}</div>
          </div>
        </div>
      </div>
      <p
        className={css.text}
        dangerouslySetInnerHTML={{ __html: reviewText }}
      />
    </article>
  );
});
