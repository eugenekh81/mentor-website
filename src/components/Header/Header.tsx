import React from 'react';
import css from './Header.module.scss';
import nav from './Nav.module.scss';
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
    <header className={css.header}>
      <div className='container'>
        <div className={css.content}>
          <a href='/mentor-website' className={cn(css.headerLogo, css.logo)}>
            <SVGIcon iconId='main-logo' />
          </a>

          <nav className={nav.nav}>
            <ul className={nav.list}>
              <li
                className={nav.item}
                onClick={() => {
                  onSelect('services');
                }}
              >
                <NavLink
                  to=''
                  className={cn(nav.link, {
                    [nav.active]: currentSection === '#services',
                  })}
                >
                  Допомога
                </NavLink>
              </li>
              <li
                className={nav.item}
                onClick={() => {
                  onSelect('products');
                }}
              >
                <NavLink
                  to=''
                  className={cn(nav.link, {
                    [nav.active]: currentSection === '#products',
                  })}
                >
                  Технології
                </NavLink>
              </li>
              <li
                className={nav.item}
                onClick={() => {
                  onSelect('about');
                }}
              >
                <NavLink
                  to=''
                  className={cn(nav.link, {
                    [nav.active]: currentSection === '#about',
                  })}
                >
                  Про мене
                </NavLink>
              </li>
              <li
                className={nav.item}
                onClick={() => {
                  onSelect('portfolio');
                }}
              >
                <NavLink
                  to=''
                  className={cn(nav.link, {
                    [nav.active]: currentSection === '#portfolio',
                  })}
                >
                  Портфоліо
                </NavLink>
              </li>
              <li
                className={nav.item}
                onClick={() => {
                  onSelect('reviews');
                }}
              >
                <NavLink
                  to=''
                  className={cn(nav.link, {
                    [nav.active]: currentSection === '#reviews',
                  })}
                >
                  Відгуки
                </NavLink>
              </li>
              <li
                className={nav.item}
                onClick={() => {
                  onSelect('faq');
                }}
              >
                <NavLink
                  to=''
                  className={cn(nav.link, {
                    [nav.active]: currentSection === '#faq',
                  })}
                >
                  ЧаПи
                </NavLink>
              </li>
              <li
                className={nav.item}
                onClick={() => {
                  onSelect('contacts');
                }}
              >
                <NavLink
                  to=''
                  className={cn(nav.link, {
                    [nav.active]: currentSection === '#contacts',
                  })}
                >
                  Контакти
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={css.buttons}>
            <a
              href='https://t.me/js_mentor'
              target='_blank'
              className={cn('tg', css.link)}
            >
              <SVGIcon className={css.icon} iconId='telegram' />
            </a>
            <div className={css.button}>
              <Button variant='small'>Безкоштовний урок</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
