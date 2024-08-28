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
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [activeDot, setActiveDot] = useState<number>(0);
  const [visibleImages, setVisibleImages] = useState(children);
  // const [translateX, setTranslateX] = useState<number>(0);
  // const [autoSlide, setAutoSlide] = useState(false);
  const wrapper: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const stripe: MutableRefObject<HTMLDivElement | null> = useRef(null);

  // setting slide width
  useEffect(() => {
    if (wrapper?.current) {
      const width = wrapper.current.getBoundingClientRect().width;
      setSlideWidth(width);
    }

    // setAutoSlide(true);
  }, []);

  const handlePrev = () => {
    const btn: HTMLButtonElement | null = document.querySelector(
      `.${css.prev}`
    );
    if (btn) btn.disabled = true;

    if (stripe.current) {
      stripe.current.style.translate = '0%';

      setTimeout(() => {
        if (stripe.current) {
          const sprEl = document.querySelector(
            `.${css.stripe}`
          ) as HTMLDivElement;

          const last = sprEl.children[2];
          const first = sprEl.children[0] as HTMLDivElement;
          console.log(last, first);

          first.before(last);
          sprEl.style.transition = 'none';
          sprEl.style.translate = '-100%';
        }
      }, 1000);

      setTimeout(() => {
        if (stripe.current) {
          stripe.current.style.transition = 'translate 1s ease-in-out';
          if (btn) btn.disabled = false;
        }
      }, 1100);
    }

    setActiveDot((prev) => {
      if (prev > 0) {
        return prev - 1;
      }

      return 2;
    });
  };

  // HANDLENEXT DONE
  const handleNext = () => {
    const btn: HTMLButtonElement | null = document.querySelector(
      `.${css.next}`
    );
    if (btn) btn.disabled = true;

    if (stripe.current) {
      stripe.current.style.translate = '-200%';

      setTimeout(() => {
        if (stripe.current) {
          const first = stripe.current.children[0] as HTMLDivElement;
          const last = stripe.current.children[2] as HTMLDivElement;

          last.after(first);
          stripe.current.style.transition = 'none';
          stripe.current.style.translate = '-100%';
        }
      }, 1000);

      setTimeout(() => {
        if (stripe.current) {
          stripe.current.style.transition = 'translate 1s ease-in-out';
          if (btn) btn.disabled = false;
        }
      }, 1100);
    }

    setActiveDot((prev) => {
      if (prev < 2) {
        return prev + 1;
      }

      return 0;
    });
  };

  console.log(activeDot);

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
            className={cn(css.dot, { [css.activeDot]: i === activeDot })}
          ></button>
        ))}
      </div>
    </div>
  );
};
