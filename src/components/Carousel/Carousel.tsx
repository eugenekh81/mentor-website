import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import css from './Carousel.module.scss';

type Props = {
  images: string[];
};

export const Carousel: React.FC<Props> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [wrapperWidth, setWrapperWidth] = useState<number>(0);
  const wrapper: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (wrapper?.current) {
      const width = wrapper.current.getBoundingClientRect().width;
      setWrapperWidth(width);
    }
  }, []);

  const shift = wrapperWidth * currentImage * -1;

  return (
    <div className={css.carousel}>
      <div className={css.wrapper} ref={wrapper}>
        <div
          className={css.stripe}
          style={{ transform: `translateX(${shift}px)` }}
        >
          <div className={css.slideOuter}>
            <div className={css.slideInner}>
              <img src={images[0]} className={css.image} alt='1' />
            </div>
          </div>
          <div className={css.slideOuter}>
            <div className={css.slideInner}>
              <img src={images[1]} className={css.image} alt='1' />
            </div>
          </div>
          <div className={css.slideOuter}>
            <div className={css.slideInner}>
              <img src={images[2]} className={css.image} alt='1' />
            </div>
          </div>
        </div>

        <div className={css.buttons}>
          <button
            type='button'
            className={cn(css.button, css.prev)}
            onClick={() => setCurrentImage(currentImage - 1)}
          ></button>
          <button
            type='button'
            className={cn(css.button, css.next)}
            onClick={() => setCurrentImage(currentImage + 1)}
          ></button>
        </div>
      </div>
      <div className={css.dots}>
        {images.map((image, i) => (
          <button
            key={image}
            type='button'
            className={cn(css.dot, { [css.activeDot]: i === currentImage })}
          ></button>
        ))}
      </div>
    </div>
  );
};
