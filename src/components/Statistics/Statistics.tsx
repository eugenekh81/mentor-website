import React, { useEffect, useRef } from 'react';
import './Statistics.scss';
import CountUp from 'react-countup';

export const Statistics: React.FC = () => {
  const stat = useRef(null);

  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const blockPosition = listRef.current?.getBoundingClientRect().top;

      if (blockPosition && blockPosition < window.innerHeight - 50) {
        const items = document.querySelectorAll('.statistics__item');
        if (items.length) {
          items.forEach((item) => {
            item.classList.add('statistics__item--appear');
          });
        }
      }
    });
  }, [listRef.current]);

  return (
    <div className='statistics' ref={stat}>
      <ul className='statistics__list' ref={listRef}>
        <>
          <li className='statistics__item'>
            <p className='statistics__number'>
              <CountUp
                enableScrollSpy
                scrollSpyOnce
                start={0}
                end={100}
                duration={10}
                formattingFn={(value) =>
                  `${value.toLocaleString().replace(',', ' ')}`
                }
              />
            </p>
            <p className='statistics__text'>Учнів</p>
          </li>
          <li className='statistics__item'>
            <p className='statistics__number'>
              <CountUp
                enableScrollSpy
                scrollSpyOnce
                start={0}
                end={1200}
                duration={10}
                formattingFn={(value) =>
                  `${value.toLocaleString().replace(',', ' ')}`
                }
              />
            </p>
            <p className='statistics__text'>Уроків</p>
          </li>
          <li className='statistics__item'>
            <p className='statistics__number'>
              <CountUp
                enableScrollSpy
                scrollSpyOnce
                start={0}
                end={1500}
                duration={10}
                formattingFn={(value) =>
                  `${value.toLocaleString().replace(',', ' ')}`
                }
              />
            </p>
            <p className='statistics__text'>Годин</p>
          </li>
        </>
      </ul>
    </div>
  );
};
