import './Portfolio.scss';
import miami from '../../assets/images/portfolio/miami.jpg';
import soul from '../../assets/images/portfolio/the-soul.jpg';
import ecommerce from '../../assets/images/portfolio/ecommerce.jpg';
import React from 'react';

export const Portfolio: React.FC = React.memo(() => {
  return (
    <section className='section portfolio' id='portfolio'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>
            {/* ПОРТФОЛІО */}
            Мої роботи
          </h2>
          <p className='section__description'>
            Нижче ти можеш подивитися на деякі мої роботі. Я не викладаю всі їх
            тут, щоб не перевантажувати тебе інформацією. Якщо тобі цікавий
            повний перелік моїх робіт - ти можеш ознайомитися з ними на моєму
            Гітхабі
          </p>

          <ul className='portfolio__list'>
            <li className='portfolio__item'>
              <h3 className='portfolio__item-title'>Лендінг "Miami Kings"</h3>
              <a href='' className='portfolio__link'>
                <img src={miami} alt='' className='portfolio__image' />
              </a>
            </li>
            <li className='portfolio__item'>
              <h3 className='portfolio__item-title'>
                Інтернет-магазин мобільних пристроїв
              </h3>
              <a href='' className='portfolio__link'>
                <img src={ecommerce} alt='' className='portfolio__image' />
              </a>
            </li>
            <li className='portfolio__item'>
              <h3 className='portfolio__item-title'>
                Психологічний центр The Soul
              </h3>
              <a href='' className='portfolio__link'>
                <img src={soul} alt='' className='portfolio__image' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});
