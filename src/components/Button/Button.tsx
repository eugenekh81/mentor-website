import React, { ReactNode } from 'react';
import css from './Button.module.scss';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  variant?: string;
  className?: string;
};

export const Button: React.FC<Props> = ({ children, variant, className }) => {
  console.log(children, 'children');

  return (
    <button
      className={cn(css.button, className, {
        [css.small]: variant === 'small' || variant === 'services',
        ['header__button']: variant === 'button--header',
        ['services__button']: variant === 'services',
      })}
    >
      {children}
      <span className={css.arrow}></span>
    </button>
  );
};
