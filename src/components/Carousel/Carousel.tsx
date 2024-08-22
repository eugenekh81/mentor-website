import React from 'react';
import cn from 'classnames';
import css from './Carousel.module.scss';
type Props = {
  images: string[];
};

export const Carousel: React.FC<Props> = ({ images }) => {
  return (
    <div className={css.carousel}>
      <div className={css.wrapper}>
        <div className={css.slide}>
          <img src={images[0]} alt='1' />
        </div>
      </div>
      <div className={css.buttons}>
        <button type='button' className={cn(css.button, css.prev)}></button>
        <button type='button' className={cn(css.button, css.next)}></button>
      </div>

      <div className={css.dots}>
        <button type='button' className={cn(css.dot)}></button>
      </div>
    </div>
  );
};
