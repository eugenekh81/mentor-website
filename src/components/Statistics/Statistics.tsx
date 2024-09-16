import React, { useEffect, useRef } from 'react';
import css from './Statistics.module.scss';
import cn from 'classnames';
import sprite from '../../assets/images/icons/sprite.svg';
import CountUp from 'react-countup';

export const Statistics: React.FC = () => {
  const stat = useRef(null);

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const blockPosition = listRef.current?.getBoundingClientRect().top;

      if (blockPosition && blockPosition < window.innerHeight - 50) {
        const items = document.querySelectorAll('.' + css.item);

        if (items.length) {
          items.forEach((item) => {
            item.classList.add(css.appear);
          });
        }
      }
    });
  }, []);

  return (
    <div className={css.statistics} ref={stat}>
      <ul className={css.list} ref={listRef}>
        <li className={css.item}>
          <svg className={cn(css.wreathIcon, css.wreathIconLeft)}>
            <use href={`${sprite}#wreath--left`}></use>
          </svg>
          <div className={css.info}>
            <p className={css.number}>
              <CountUp
                enableScrollSpy
                scrollSpyOnce
                start={0}
                end={200}
                duration={4}
                formattingFn={(value) =>
                  `${value.toLocaleString().replace(',', '')}`
                }
              />
            </p>
            <p className={css.text}>Учнів</p>
          </div>
          <svg className={cn(css.wreathIcon, css.wreathIconRight)}>
            <use href={`${sprite}#wreath--right`}></use>
          </svg>
        </li>
        <li className={css.item}>
          <svg className={cn(css.wreathIcon, css.wreathIconLeft)}>
            <use href={`${sprite}#wreath--left`}></use>
          </svg>
          <div className={css.info}>
            <p className={css.number}>
              <CountUp
                enableScrollSpy
                scrollSpyOnce
                start={0}
                end={2400}
                duration={4}
                formattingFn={(value) =>
                  `${value.toLocaleString().replace(',', '')}`
                }
              />
            </p>
            <p className={css.text}>Уроків</p>
          </div>
          <svg className={cn(css.wreathIcon, css.wreathIconRight)}>
            <use href={`${sprite}#wreath--right`}></use>
          </svg>
        </li>
        <li className={css.item}>
          <svg className={cn(css.wreathIcon, css.wreathIconLeft)}>
            <use href={`${sprite}#wreath--left`}></use>
          </svg>
          <div className={css.info}>
            <p className={css.number}>
              <CountUp
                enableScrollSpy
                scrollSpyOnce
                start={0}
                end={2800}
                duration={4}
                formattingFn={(value) =>
                  `${value.toLocaleString().replace(',', '')}`
                }
              />
            </p>
            <p className={css.text}>Годин</p>
          </div>
          <svg className={cn(css.wreathIcon, css.wreathIconRight)}>
            <use href={`${sprite}#wreath--right`}></use>
          </svg>
        </li>
      </ul>
    </div>
  );
};
