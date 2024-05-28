import React from 'react';
import './Header.scss';
import sprite from '../../assets/images/icons/sprite.svg';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const { hash } = useLocation();

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__content'>
          <a href='/' className='header__logo logo'>
            <svg>
              <use href={`${sprite}#main-logo`}></use>
            </svg>
          </a>

          <nav className='nav'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a
                  href='#services'
                  className={classNames('nav__link', {
                    'nav__link--active': hash === '#services',
                  })}
                >
                  Допомога
                </a>
              </li>
              <li className='nav__item'>
                <a
                  href='#products'
                  className={classNames('nav__link', {
                    'nav__link--active': hash === '#products',
                  })}
                >
                  Технології
                </a>
              </li>
              <li className='nav__item'>
                <a
                  href='#about'
                  className={classNames('nav__link', {
                    'nav__link--active': hash === '#about',
                  })}
                >
                  Про мене
                </a>
              </li>
              <li className='nav__item'>
                <a
                  href='#portfolio'
                  className={classNames('nav__link', {
                    'nav__link--active': hash === '#portfolio',
                  })}
                >
                  Порфтфоліо
                </a>
              </li>
              <li className='nav__item'>
                <a
                  href='#reviews'
                  className={classNames('nav__link', {
                    'nav__link--active': hash === '#reviews',
                  })}
                >
                  Відгуки
                </a>
              </li>
              <li className='nav__item'>
                <a
                  href='#faq'
                  className={classNames('nav__link', {
                    'nav__link--active': hash === '#faq',
                  })}
                >
                  ЧаПи
                </a>
              </li>
              <li className='nav__item'>
                <a
                  href='#contacts'
                  className={classNames('nav__link', {
                    'nav__link--active': hash === '#contacts',
                  })}
                >
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
