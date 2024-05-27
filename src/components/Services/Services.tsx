import { useEffect, useRef, useState } from 'react';
import './Services.scss';
import beginner from '../../assets/images/services/beginner.gif';
import switcher from '../../assets/images/services/switcher.gif';
import girl from '../../assets/images/services/girl.gif';

import check from '../../assets/images/icons/check--white.svg';
import shield from '../../assets/images/icons/shield--white.svg';
import thumb from '../../assets/images/icons/thumb--white.svg';

import classNames from 'classnames';

// const titleText = 'Чим я можу тобі допомогти';

export const Services = () => {
  const servicesTitle = useRef<HTMLHeadingElement | null>(null);
  const guarantee = useRef<HTMLHeadingElement | null>(null);
  // const [showTitle, setShowTitle] = useState(false);
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
/*     setTimeout(() => {
      setShowTitle(true);
    }, 4000); */

    setTimeout(() => {
      setShowList(true);
    }, 4700);
  }, []);

  /* const textAnimation = () => {
    if (sectionTitle.current) {
      for (let i = 0; i < titleText.length; i++) {
        const delay = 60 * i + 60 * Math.random();
        setTimeout(() => {
          if (sectionTitle.current) {
            sectionTitle.current.innerHTML += titleText[i];
          }
        }, delay);
        sectionTitle.current.style.animationDelay = `${delay}ms`;
      }
    }
  }; */

  /*   useEffect(() => {
    textAnimation();

    setTimeout(() => {
      if (sectionTitle.current) {
        sectionTitle.current.classList.add('section__title--no-cursor');
      }
    }, 10600);
  }, [showTitle]); */



  const handleScroll = () => {
    if (guarantee.current !== null) {
      const blockPosition = guarantee.current.getBoundingClientRect().top;
      if (blockPosition < window.innerHeight - 50) {
        guarantee.current.style.opacity = '1';
        guarantee.current.style.transform = 'translateY(0)';
      }
    }
  };

  useEffect(() => {
    if (guarantee.current !== null) {
      window.addEventListener('scroll', handleScroll);
    }
  }, [guarantee.current]);

  return (
    <section className='section services'>
      {/*       {showTitle && (
        <h2
          className='section__title section__title--animated'
          ref={sectionTitle}
        ></h2>
      )} */}
      <h2
        // className='section__title section__title--animated'
        className='section__title services__title'
        ref={servicesTitle}
      >
        Чим я можу тобі допомогти
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
                <h3 className='services__item-title'>
                  <span>програма</span>
                  Менторінґ
                </h3>
                <p className='services__description'>
                  Моя "фішка" - допомагати тим, хто вже навчається на курсах
                  програмування. За свою багаторічну практику я познайомився з
                  основними курсами з веб-програмування та з їх сильними та
                  слабкими сторонами. Зможу пояснити тобі будь-яку складну тему
                  простою мовою, допомогти з вирішенням домашніх завдань та
                  заповнити прогалини в твоїх знаннях - і все це в рамках твого
                  курсу.
                </p>
              </div>
            </li>
            <li className='services__item'>
              <div className='services__image-container'>
                <img src={beginner} alt='' className='services__image' />
              </div>
              <div className='services__content'>
                <h3 className='services__item-title'>
                  <span>програма</span>
                  Початківець
                </h3>
                <p className='services__description'>
                  Якщо ти хочеш почати вивчати веб-розробку з 0 та ще не
                  впевнений, чи це "твоє" та чи сподобається тобі ця діяльність
                  - можеш спробувати позайматись зі мною без того, щоб вкладати
                  великі гроші у повноцінний курс, і матимеш змогу швидко
                  зрозуміти, чи подобається тобі веб-розробка та чи хочеш ти
                  входити в неї всерйоз та надовго.
                </p>
              </div>
            </li>
            <li className='services__item'>
              <div className='services__image-container'>
                <img src={switcher} alt='' className='services__image' />
              </div>
              <div className='services__content'>
                <h3 className='services__item-title'>
                  <span>програма</span>
                  Свічер
                </h3>
                <p className='services__description'>
                  Якщо ти - новачок та вже знаєш, що хочеш вивчати веб-розробку,
                  тобі цікаві комп'ютери та програмування - я зможу допомогти
                  тобі пройти цей шлях у комфортному для тебе темпі, без стресу,
                  дедлайнів та інших обмежень, які так чи інакше притаманні
                  традиційним курсам програмування. По закінченню курсу в твоєму
                  портфоліо буде 5 робіт, які тобі не соромно буде показати
                  своєму майбутньому роботодавцю.
                </p>
              </div>
            </li>
          </ul>

          <div
            className='services__guarantee guarantee'
            ref={guarantee}
            onScroll={(e) => {
              console.log(e.target, 'scrolling');
            }}
          >
            <h2 className='guarantee__title'>
              Я <span className='vivid-red'>гарантую</span>, що ти вивчиш
              веб-розробку
            </h2>
            <ul className='guarantee__list'>
              <li className='guarantee__item'>
                <img className='guarantee__image' src={check} alt='Guarantee' />
              </li>
              <li className='guarantee__item'>
                <img
                  className='guarantee__image'
                  src={shield}
                  alt='Guarantee'
                />
              </li>
              <li className='guarantee__item'>
                <img className='guarantee__image' src={thumb} alt='Guarantee' />
              </li>
            </ul>
            <p className='guarantee__text'>
              якщо будеш систематично та старанно вчитися, виконувати домашні
              завдання та регулярно займатися зі мною два рази на тиждень
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
