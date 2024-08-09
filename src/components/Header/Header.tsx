import React from 'react';
import './Header.scss';
import sprite from '../../assets/images/icons/sprite.svg';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';

type Props = {
  currentSection: string | null;
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
                <NavLink
                  to=''
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#services',
                  })}
                >
                  Допомога
                </NavLink>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('products');
                }}
              >
                <NavLink
                  to=''
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#products',
                  })}
                >
                  Технології
                </NavLink>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('about');
                }}
              >
                <NavLink
                  to=''
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#about',
                  })}
                >
                  Про мене
                </NavLink>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('portfolio');
                }}
              >
                <NavLink
                  to=''
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#portfolio',
                  })}
                >
                  Портфоліо
                </NavLink>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('reviews');
                }}
              >
                <NavLink
                  to=''
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#reviews',
                  })}
                >
                  Відгуки
                </NavLink>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('faq');
                }}
              >
                <NavLink
                  to=''
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#faq',
                  })}
                >
                  ЧаПи
                </NavLink>
              </li>
              <li
                className='nav__item'
                onClick={() => {
                  onSelect('contacts');
                }}
              >
                <NavLink
                  to=''
                  className={classNames('nav__link', {
                    'nav__link--active': currentSection === '#contacts',
                  })}
                >
                  Контакти
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className='header__buttons'>
            <a
              href='https://t.me/js_mentor'
              target='_blank'
              className='header__link tg'
            >
              <svg className='header__icon'>
                <use href={`${sprite}#telegram`}></use>
              </svg>
            </a>
            <div className='header__button'>
              <Button variant='small'>Безкоштовний урок</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
