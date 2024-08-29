import React, { ForwardedRef, MouseEventHandler, ReactNode } from 'react';
import css from './Button.module.scss';
import cn from 'classnames';

type Props = {
  children: ReactNode;
  variant?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  // ref?: MutableRefObject<HTMLButtonElement | null>;
};

export const Button: React.FC<Props> = React.forwardRef(
  (
    { children, variant, className, onClick = () => {} },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        className={cn(css.button, className, {
          [css.small]: variant === 'small' || variant === 'services',
          ['header__button']: variant === 'button--header',
          ['services__button']: variant === 'services',
        })}
        onClick={onClick}
        ref={ref}
      >
        {children}
        {variant !== 'noArrow' && <span className={css.arrow}></span>}
      </button>
    );
  }
);
