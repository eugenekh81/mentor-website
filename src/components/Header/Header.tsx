import React from 'react';
import './Header.scss';
import sprite from '../../assets/images/icons/sprite.svg';
import classNames from 'classnames';

type Props = {
  currentSection: string | null;
  handleScroll: () => void;
  onSelect: (id: string) => void;
};

export const Header: React.FC<Props> = ({ currentSection, onSelect }) => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__content'>
          <a href='/mentor-website' className='header__logo logo'>
            <svg>
              <use href={`${sprite}#main-logo`}></use>
            </svg>
          </a>

          <nav className='nav'>
            <ul className='nav__list'>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('services');
                }}
              >
                <a
                  href='#services'
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#services',
                  })}
                >
                  Допомога
                </a>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('products');
                }}
              >
                <a
                  href='#products'
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#products',
                  })}
                >
                  Технології
                </a>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('about');
                }}
              >
                <a
                  href='#about'
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#about',
                  })}
                >
                  Про мене
                </a>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('portfolio');
                }}
              >
                <a
                  href='#portfolio'
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#portfolio',
                  })}
                >
                  Портфоліо
                </a>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('reviews');
                }}
              >
                <a
                  href='#reviews'
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#reviews',
                  })}
                >
                  Відгуки
                </a>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('faq');
                }}
              >
                <a
                  href='#faq'
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#faq',
                  })}
                >
                  ЧаПи
                </a>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('contacts');
                }}
              >
                <a
                  href='#contacts'
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#contacts',
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
