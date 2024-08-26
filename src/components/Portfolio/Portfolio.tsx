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
    externalUrl: 'https://eugenekh81.github.io/layout_miami/',
  },
  {
    id: 2,
    title: 'Інтернет-магазин',
    imgUrl: ecommerce,
    externalUrl: 'https://eugenekh81.github.io/react_phone-catalog/',
  },
  {
    id: 3,
    title: 'Психологічний центр The Soul',
    imgUrl: soul,
    externalUrl: 'https://ukrainiancircle.com.ua/en',
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
              {items.map((item) => (
                <li className={css.item} key={item.id}>
                  <a
                    href={item.externalUrl}
                    target='_blank'
                    className={css.link}
                  >
                    <h3 className={css.title}>{item.title}</h3>
                    <img
                      src={item.imgUrl}
                      alt={`Slide ${item.id}`}
                      className={css.image}
                    />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <Carousel>
              {items.map((item, i) => (
                <a href={item.externalUrl} className={css.link} target='_blank'>
                  <h3 className={css.title}>{item.title}</h3>
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
