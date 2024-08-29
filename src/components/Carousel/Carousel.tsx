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
  className?: string;
};

export const Carousel: React.FC<Props> = ({ children, className }) => {
  const [activeDot, setActiveDot] = useState<number>(0);
  const stripe: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const prev: MutableRefObject<HTMLButtonElement | null> = useRef(null);
  const next: MutableRefObject<HTMLButtonElement | null> = useRef(null);

  useEffect(() => {
    // setTimeout(() => {
    //   const nextBtn = document.querySelector(
    //     `.${css.next}`
    //   ) as HTMLButtonElement;
    //   console.log(nextBtn, 'nextBtn');
    //   if (nextBtn) {
    //     setInterval(() => nextBtn.click(), 3000);
    //   }
    // }, 500);
  }, []);

  const disableButtons = () => {
    if (prev.current) prev.current.disabled = true;
    if (next.current) next.current.disabled = true;
  };

  const enableButtons = () => {
    if (prev.current) prev.current.disabled = false;
    if (next.current) next.current.disabled = false;

    console.log(prev.current, next.current);
  };

  const disableTransition = () => {
    if (stripe.current) stripe.current.style.transition = 'none';
  };

  const enableTransition = () => {
    if (stripe.current)
      stripe.current.style.transition = 'translate 1s ease-in-out';
  };

  const handlePrev = () => {
    disableButtons();

    if (stripe.current) {
      stripe.current.style.translate = '0%';

      setTimeout(() => {
        if (stripe.current) {
          // const sprEl = document.querySelector(
          //   `.${css.className}`
          // ) as HTMLDivElement;

          const last = stripe.current.children[children.length - 1];
          const first = stripe.current.children[0] as HTMLDivElement;
          console.log(last, first);

          first.before(last);
          disableTransition();
          stripe.current.style.translate = '-100%';
        }
      }, 1000);

      setTimeout(() => {
        enableTransition();
        enableButtons();
      }, 1100);
    }

    setActiveDot((prev) => {
      if (prev > 0) {
        return prev - 1;
      }

      return children.length - 1;
    });
  };

  // HANDLENEXT DONE
  const handleNext = () => {
    disableButtons();

    if (stripe.current) {
      stripe.current.style.translate = '-200%';

      setTimeout(() => {
        if (stripe.current) {
          const first = stripe.current.children[0] as HTMLDivElement;
          const last = stripe.current.children[
            children.length - 1
          ] as HTMLDivElement;

          last.after(first);
          disableTransition();
          stripe.current.style.translate = '-100%';
        }
      }, 1000);

      setTimeout(() => {
        enableTransition();
        enableButtons();
      }, 1100);
    }

    setActiveDot((prev) => {
      if (prev < children.length - 1) {
        return prev + 1;
      }

      return 0;
    });
  };

  return (
    <div className={css.carousel}>
      <div className={css.wrapper}>
        <div className={cn(css.stripe, className)} ref={stripe}>
          {children.map((child, i) => (
            <div className={css.slideOuter} key={`Item-${i}`}>
              <div className={css.slideInner}>{child}</div>
            </div>
          ))}
        </div>

        <div className={css.buttons}>
          <Button
            variant='noArrow'
            className={cn(css.button, css.prev)}
            onClick={() => handlePrev()}
            ref={prev}
          >
            <SVGIcon className={css.icon} iconId='arrowLeft' />
          </Button>
          <Button
            variant='noArrow'
            className={cn(css.button, css.next)}
            onClick={() => handleNext()}
            ref={next}
          >
            <SVGIcon className={css.icon} iconId='arrowRight' />
          </Button>
        </div>
      </div>
      <div className={css.dots}>
        {children.map((_, i) => (
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
