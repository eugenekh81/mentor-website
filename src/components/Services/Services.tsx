import React, { useEffect, useRef, useState } from 'react';
import './Services.scss';
import beginner from '../../assets/images/services/beginner.gif';
import switcher from '../../assets/images/services/switcher.gif';
import girl from '../../assets/images/services/girl.gif';

import classNames from 'classnames';
import { Button } from '../Button';
import Guarantee from '../Guarantee/Guarantee';

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
        Чим я можу тобі допомогти?
      </h2>
      <div className='container'>
        <div className='section__content'>
          <ul
            className={classNames('services__list', {
              'services__list--activate': showList,
            })}
          >
            <li className='services__item'>
              <div className='services__image-container'>
                <img src={girl} alt='' className='services__image' />
              </div>
              <div className='services__content'>
                <div className='services__text-container'>
                  <h3 className='services__item-title'>
                    <span>програма</span>
                    Менторінґ
                  </h3>
                  <p className='services__description'>
                    Моя "фішка" - допомагати тим, хто вже навчається на курсах
                    програмування. За свою багаторічну практику я познайомився з
                    основними курсами з веб-програмування та з їх сильними та
                    слабкими сторонами. Я поясню тобі будь-яку складну тему
                    простою мовою, допоможу з вирішенням домашніх завдань та
                    заповню прогалини в твоїх знаннях - і все це в рамках твого
                    курсу.
                  </p>
                </div>
                <Button variant='services'>Пробний урок</Button>
              </div>
            </li>
            <li className='services__item'>
              <div className='services__image-container'>
                <img src={beginner} alt='' className='services__image' />
              </div>
              <div className='services__content'>
                <div className='services__text-container'>
                  <h3 className='services__item-title'>
                    <span>програма</span>
                    Початківець
                  </h3>
                  <p className='services__description'>
                    Якщо ти хочеш почати вивчати веб-розробку з 0 та ще не
                    впевнений, чи це "твоє" та чи сподобається тобі ця
                    діяльність - позаймайся зі мною без того, щоб вкладати
                    великі гроші у повноцінний курс. Ти швидко зрозумієш, чи
                    подобається тобі веб-розробка та чи хочеш ти входити в неї
                    всерйоз та надовго.
                  </p>
                </div>
                <Button variant='services'>Пробний урок</Button>
              </div>
            </li>
            <li className='services__item'>
              <div className='services__image-container'>
                <img src={switcher} alt='' className='services__image' />
              </div>
              <div className='services__content'>
                <div className='services__text-container'>
                  <h3 className='services__item-title'>
                    <span>програма</span>
                    Свічер
                  </h3>
                  <p className='services__description'>
                    Якщо ти - новачок та вже знаєш, що хочеш вивчати
                    веб-розробку, тобі цікаві комп'ютери та програмування - ми
                    пройдемо цей шлях у комфортному для тебе темпі, без стресу,
                    дедлайнів та інших обмежень. По закінченню курсу в твоєму
                    портфоліо буде 5 робіт, які тобі не соромно буде показати
                    своєму майбутньому роботодавцю.
                  </p>
                </div>
                <Button variant='services'>Пробний урок</Button>
              </div>
            </li>
          </ul>

          <div className='services__guarantee'>
            <Guarantee />
          </div>
        </div>
      </div>
    </section>
  );
});
