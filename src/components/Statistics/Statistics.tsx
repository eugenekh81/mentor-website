import React, { useEffect, useRef, useState } from 'react';
import './Statistics.scss';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export const Statistics: React.FC = () => {
  const { ref: listRef, inView } = useInView();
  const stat = useRef(null);
  const [mountItems, setMountItems] = useState(false);

  useEffect(() => {
    if (listRef !== null) {
      console.log(inView, '>>>><<<<<<');
      console.log(stat.current);

      if (inView) {
        setMountItems(true);
        setTimeout(() => {
          const items = document.querySelectorAll('.statistics__item');
          if (items.length) {
            console.log(items);
            items.forEach((item) => {
              item.classList.add('statistics__item--appear');
            });
          }
        }, 50);
      } else {
        const items = document.querySelectorAll('.statistics__item');

        console.log(items);
        items.forEach((item) => {
          item.classList.remove('statistics__item--appear');
          console.dir(item.classList);
        });

        setMountItems(false);
      }
    }
  }, [inView]);

  return (
    <div className='statistics' ref={stat}>
      <ul className='statistics__list' ref={listRef}>
        {mountItems && (
          <>
            <li className='statistics__item'>
              <p className='statistics__number'>
                <CountUp
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
        )}
      </ul>
    </div>
  );
};
