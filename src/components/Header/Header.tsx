import React from 'react';
import './Header.scss';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { Button } from '../Button';
import { SVGIcon } from '../SVGIcon';

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
            <SVGIcon iconId='main-logo' />
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
                  className={cn('nav__link', {
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
                  className={cn('nav__link', {
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
                  className={cn('nav__link', {
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
                  className={cn('nav__link', {
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
                  className={cn('nav__link', {
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
                  className={cn('nav__link', {
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
                  className={cn('nav__link', {
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
              <SVGIcon className='header__icon' iconId='telegram' />
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
