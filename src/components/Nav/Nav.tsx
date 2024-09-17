import React from 'react';
import { NavLink } from 'react-router-dom';
import nav from './Nav.module.scss';
import cn from 'classnames';

type Props = {
  currentSection: string | null;
  onSelect: (id: string) => void;
};

export const Nav: React.FC<Props> = ({ currentSection, onSelect }) => {
  return (
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
            onSelect('results');
          }}
        >
          <NavLink
            to=''
            className={cn(nav.link, {
              [nav.active]: currentSection === '#results',
            })}
          >
            Результати
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
      </ul>
    </nav>
  );
};
