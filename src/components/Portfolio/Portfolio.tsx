import React from 'react';
import cn from 'classnames';
import miami from '../../assets/images/portfolio/miami.jpg';
import soul from '../../assets/images/portfolio/the-soul.jpg';
import ecommerce from '../../assets/images/portfolio/ecommerce.jpg';
import css from './Portfolio.module.scss';
import { useDesktop } from '../../hooks/useDesktop.ts';
import { Carousel } from '../Carousel/Carousel.tsx';

const items = [
  {
    id: 1,
    title: 'Лендінг "Miami Kings',
    imgUrl: miami,
  },
  {
    id: 2,
    title: 'Інтернет-магазин мобільних пристроїв',
    imgUrl: ecommerce,
  },
  {
    id: 3,
    title: 'Психологічний центр The Soul',
    imgUrl: soul,
  },
];

export const Portfolio: React.FC = React.memo(() => {
  const isOnDesktop = useDesktop();
  console.log(isOnDesktop);

  return (
    <section className={cn('section', css.portfolio)} id='portfolio'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>Мої роботи</h2>
          <p className='section__description'>
            Нижче ти можеш подивитися на деякі мої роботі. Я не викладаю всі їх
            тут, щоб не перевантажувати тебе інформацією. Якщо тобі цікавий
            повний перелік моїх робіт - ти можеш ознайомитися з ними на моєму
            Гітхабі
          </p>

          {isOnDesktop ? (
            <ul className={css.list}>
              <li className={css.item}>
                <h3 className={css.title}>Лендінг "Miami Kings"</h3>
                <a href='#' className={css.link}>
                  <img src={miami} alt='' className={css.image} />
                </a>
              </li>
              <li className={css.item}>
                <h3 className={css.title}>
                  Інтернет-магазин мобільних пристроїв
                </h3>
                <a href='#' className={css.link}>
                  <img src={ecommerce} alt='' className={css.image} />
                </a>
              </li>
              <li className={css.item}>
                <h3 className={css.title}>Психологічний центр The Soul</h3>
                <a href='#' className={css.link}>
                  <img src={soul} alt='' className={css.image} />
                </a>
              </li>
            </ul>
          ) : (
            <Carousel>
              {items.map((item, i) => (
                <a href='#'>
                  <h3>{item.title}</h3>
                  <img
                    src={item.imgUrl}
                    className={css.image}
                    alt={`Slide ${i}`}
                  />
                </a>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
});
