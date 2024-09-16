import React from 'react';
import { useEffect, useRef } from 'react';
import css from './Banner.module.scss';
import cn from 'classnames';
import { Button } from '../Button';
import { titleText } from './titleText.ts';

export const Banner: React.FC = React.memo(() => {
  const title = useRef<HTMLHeadingElement | null>(null);
  const button = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (title.current) {
      for (let i = 0; i < titleText.length; i++) {
        const currentDelay = 60 * i + 60 * Math.random();
        setTimeout(() => {
          if (title.current) {
            title.current.innerHTML += titleText[i];
          }
        }, currentDelay);
        title.current.style.animationDelay = `${currentDelay}ms`;
      }

      setTimeout(() => {
        if (title.current) {
          title.current.classList.add(css.noCursor);
        }
      }, 4200);
    }
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      if (button.current) {
        button.current.style.transform = 'translateY(0)';
        button.current.style.opacity = '1';
      }
    }, 4000);
  }, [button]);

  return (
    <section className={cn('section', css.banner)} id='banner'>
      <div className='container'>
        <div className={css.content}>
          <div className={css.titleContainer}>
            <h1 className={css.title} ref={title}></h1>
          </div>
          <div className={css.button} ref={button}>
            <Button>Безкоштовний урок</Button>
          </div>
        </div>
      </div>
    </section>
  );
});
