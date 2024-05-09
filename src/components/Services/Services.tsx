import { useEffect, useRef, useState } from 'react';
import './Services.scss';
import classNames from 'classnames';
const titleText = 'Чим я можу тобі допомогти';

export const Services = () => {
  const sectionTitle = useRef<HTMLHeadingElement | null>(null);
  const [showTitle, setShowTitle] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTitle(true);
    }, 7000);

    setTimeout(() => {

      setShowList(true);
    }, 10000);
  }, []);

  const textAnimation = () => {
    if (sectionTitle.current) {
      for (let i = 0; i < titleText.length; i++) {
        const delay = 120 * i + 120 * Math.random();
        setTimeout(() => {
          if (sectionTitle.current) {
            sectionTitle.current.innerHTML += titleText[i];
          }
        }, delay);
        sectionTitle.current.style.animationDelay = `${delay}ms`;
      }
    }
  };

  useEffect(() => {
    textAnimation();
    setTimeout(() => {
      if (sectionTitle.current) {
        sectionTitle.current.classList.add('section__title--no-cursor');
      }
    }, 18000);
  }, [showTitle]);

  return (
    <section className='section services'>
      <div className='container'>
        <div className='section__content'>
          {showTitle && (
            <h2
              className='section__title section__title--animated'
              ref={sectionTitle}
            ></h2>
          )}
          <ul
            className={classNames('services__list', {
              'services__list--activate': showList,
            })}
          >
            <li className='services__item'>
              Моя "фішка" - допомагати тим, хто вже навчається на курсах
              програмування. За свою багаторічну практику я познайомився з
              основними курсами з веб-програмування та з їх сильними та слабкими
              сторонами. Зможу пояснити тобі будь-яку складну тему простою
              мовою, допомогти з вирішенням домашніх завдань та заповнити
              прогалини в твоїх знаннях - і все це в рамках твого курсу.
            </li>
            <li className='services__item'>
              Якщо ти хочеш почати вивчати веб-розробку з 0 та ще не впевнений,
              чи це "твоє" та чи сподобається тобі ця діяльність - можеш
              спробувати позайматись зі мною без того, щоб вкладати великі гроші
              у повноцінний курс, і матимеш змогу швидко зрозуміти, чи
              подобається тобі веб-розробка та чи хочеш ти входити в неї всерйоз
              та надовго.
            </li>
            <li className='services__item'>
              Якщо ти - новачок та вже знаєш, що хочеш вивчати веб-розробку,
              тобі цікаві комп'ютери та програмування - я зможу допомогти тобі
              пройти цей шлях у комфортному для тебе темпі, без стресу,
              дедлайнів та інших обмежень, які так чи інакше притаманні
              традиційним курсам програмування. По закінченню курсу в твоєму
              портфоліо буде 5 робіт, які тобі не соромно буде показати своєму
              майбутньому роботодавцю.
            </li>
          </ul>

          <p className='section__description'>
            Я гарантую, що ти зможеш вивчити веб-розробку зі мною, якщо будеш
            систематично та старанно вчитися, виконувати домашні завдання та
            регулярно займатися зі мною два рази на тиждень.
          </p>
        </div>
      </div>
    </section>
  );
};
