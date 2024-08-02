import React, { useEffect, useRef, useState } from 'react';
import './Services.scss';
import beginner from '../../assets/images/services/beginner.gif';
import switcher from '../../assets/images/services/switcher.gif';
import girl from '../../assets/images/services/girl.gif';

export const servicesData = [
  {
    id: 1,
    imgUrl: girl,
    title: 'Студентів курсів',
    description: 'якщо ти навчаєшся на курсах веб-розробки та:',
    problems: [
      { id: 11, problem: 'не встигаєш за програмою' },
      { id: 21, problem: 'маєш прогалини в знаннях' },
      { id: 31, problem: 'не розумієш завдання' },
      { id: 41, problem: 'бракує підтримки наставників' },
    ],
  },
  {
    id: 2,
    imgUrl: beginner,
    title: 'Початківців',
    description: 'якщо ти хочеш почати вивчати веб-розробку, але ти:',
    problems: [
      { id: 12, problem: 'не впевнений, чи це “твоє”' },
      { id: 22, problem: 'не хочеш купляти курс' },
      { id: 32, problem: 'не знаєш, з чого почати' },
      { id: 42, problem: 'не впевнений, чи подужаєш вивчити веб-розробку' },
    ],
  },
  {
    id: 3,
    imgUrl: switcher,
    title: 'Свічерів',
    description: 'якщо ти обрав формат самоосвіти, але тобі:',
    problems: [
      { id: 13, problem: 'бракує підтримки / мотивації' },
      { id: 23, problem: 'важко визначити програму' },
      { id: 33, problem: 'бракує робіт у портфоліо' },
      { id: 43, problem: 'бракує досвіду для самостійного навчання' },
    ],
  },
];

import classNames from 'classnames';
import Guarantee from '../Guarantee/Guarantee';
import { ServicesItem } from '../ServicesItem/ServicesItem';

export const Services: React.FC = React.memo(() => {
  const servicesTitle = useRef<HTMLHeadingElement | null>(null);

  const [showList, setShowList] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (servicesTitle.current) {
        servicesTitle.current.style.transform = 'translateY(0)';
        servicesTitle.current.style.opacity = '1';
      }
    }, 4400);
  }, [servicesTitle]);

  useEffect(() => {
    setTimeout(() => {
      setShowList(true);
    }, 4700);
  }, []);

  return (
    <section className='section services' id='services'>
      <h2 className='section__title services__title' ref={servicesTitle}>
        {/* ПРОГРАМИ */}
        Для кого?
      </h2>
      <div className='container'>
        <div className='section__content'>
          <ul
            className={classNames('services__list', {
              // 'services__list--activate': showList,
            })}
          >
            {servicesData.map((s) => (
              <ServicesItem key={s.id} {...s} />
            ))}
          </ul>

          <div className='services__guarantee'>
            <Guarantee />
          </div>
        </div>
      </div>
    </section>
  );
});
