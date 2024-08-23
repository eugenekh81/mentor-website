import React, { MouseEventHandler, ReactNode } from 'react';
import css from './Button.module.scss';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  variant?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Props> = ({
  children,
  variant,
  className,
  onClick = () => {},
}) => {
  return (
    <button
      className={cn(css.button, className, {
        [css.small]: variant === 'small' || variant === 'services',
        ['header__button']: variant === 'button--header',
        ['services__button']: variant === 'services',
      })}
      onClick={onClick}
    >
      {children}
      {variant !== 'noArrow' && <span className={css.arrow}></span>}
    </button>
  );
};
