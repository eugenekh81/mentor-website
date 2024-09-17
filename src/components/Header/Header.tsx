import React from 'react';
import css from './Header.module.scss';
import cn from 'classnames';
import { Button } from '../Button';
import { SVGIcon } from '../SVGIcon';
import { Nav } from '../Nav';

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

          <Nav currentSection={currentSection} onSelect={onSelect} />

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
