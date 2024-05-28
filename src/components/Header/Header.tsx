import React from 'react';
import './Header.scss';
import sprite from '../../assets/images/icons/sprite.svg';

export const Header: React.FC = () => {
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
                <a href='#services' className='nav__link'>
                  Допомога
                </a>
              </li>
              <li className='nav__item'>
                <a href='#products' className='nav__link'>
                  Технології
                </a>
              </li>
              <li className='nav__item'>
                <a href='#about' className='nav__link'>
                  Про мене
                </a>
              </li>
              <li className='nav__item'>
                <a href='#portfolio' className='nav__link'>
                  Порфтфоліо
                </a>
              </li>
              <li className='nav__item'>
                <a href='#reviews' className='nav__link'>
                  Відгуки
                </a>
              </li>
              <li className='nav__item'>
                <a href='#faq' className='nav__link'>
                  ЧаПи
                </a>
              </li>
              <li className='nav__item'>
                <a href='#contacts' className='nav__link'>
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
