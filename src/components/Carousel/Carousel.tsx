import React, {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import cn from 'classnames';
import css from './Carousel.module.scss';
import { SVGIcon } from '../SVGIcon';
import { Button } from '../Button';

type Props = {
  children: ReactNode[];
};

export const Carousel: React.FC<Props> = ({ children }) => {
  const [visibleImages, setVisibleImages] = useState(children);
  const [activeDot, setActiveDot] = useState<number>(1);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);

  const wrapper: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const stripe: MutableRefObject<HTMLDivElement | null> = useRef(null);

  // setting slide width
  useEffect(() => {
    if (wrapper?.current) {
      const width = wrapper.current.getBoundingClientRect().width;
      setSlideWidth(width);
    }
  }, []);

  const handlePrev = () => {
    setTranslateX((prev) => prev + slideWidth);
    setActiveDot((prev) => {
      return prev === 1 ? visibleImages.length : prev - 1;
    });
  };

  const handleNext = () => {
    setTranslateX((prev) => prev - slideWidth);

    setActiveDot((prev) => {
      return prev === visibleImages.length ? 1 : prev + 1;
    });
  };

  // setting shift of the sprite on current render
  useEffect(() => {
    if (stripe.current) {
      stripe.current.style.transform = `translateX(${translateX}px)`;
    }
  }, [translateX]);

  if (translateX > 0 && stripe.current) {
    stripe.current.style.transition = 'none';

    setVisibleImages((prev) => {
      const [first, ...last] = prev;

      return [...last, first];
    });

    setTranslateX(slideWidth * (visibleImages.length - 1) * -1);

    setTimeout(() => {
      if (stripe.current) {
        stripe.current.style.transition = 'transform 0.3s ease-in-out';
        setTranslateX(slideWidth * (visibleImages.length - 2) * -1);
      }
    }, 0);
  }

  if (
    translateX < slideWidth * (visibleImages.length - 1) * -1 &&
    stripe.current
  ) {
    stripe.current.style.transition = 'none';

    setVisibleImages((prev) => {
      const copy: ReactNode[] = [...prev];

      const last: ReactNode = copy.pop() || '';

      return [last, ...copy];
    });

    setTranslateX(0);

    setTimeout(() => {
      if (stripe.current) {
        stripe.current.style.transition = 'transform 0.3s ease-in-out';
        setTranslateX(slideWidth * -1);
      }
    }, 0);
  }

  console.log(visibleImages);

  return (
    <div className={css.carousel}>
      <div className={css.wrapper} ref={wrapper}>
        <div className={css.stripe} ref={stripe}>
          {visibleImages.map((child) => (
            <div className={css.slideOuter}>
              <div className={css.slideInner}>{child}</div>
            </div>
          ))}
        </div>

        <div className={css.buttons}>
          <Button
            variant='noArrow'
            className={cn(css.button, css.prev)}
            onClick={() => handlePrev()}
          >
            <SVGIcon className={css.icon} iconId='arrowLeft' />
          </Button>
          <Button
            variant='noArrow'
            className={cn(css.button, css.next)}
            onClick={() => handleNext()}
          >
            <SVGIcon className={css.icon} iconId='arrowRight' />
          </Button>
        </div>
      </div>
      <div className={css.dots}>
        {visibleImages.map((_, i) => (
          <button
            type='button'
            key={i}
            className={cn(css.dot, { [css.activeDot]: i + 1 === activeDot })}
          ></button>
        ))}
      </div>
    </div>
  );
};
