import React, { ReactNode } from 'react';
import './Button.scss';
import classNames from 'classnames';

type Props = {
  children: ReactNode;
  variant?: string;
};

export const Button: React.FC<Props> = ({ children, variant }) => {
  console.log(children, 'children');

  return (
    <button
      className={classNames('button', {
        'button--small': variant === 'small' || variant === 'services',
        header__button: variant === 'button--header',
        services__button: variant === 'services',
      })}
    >
     {children}
      <div className='button__arrow'></div>
    </button>
  );
};
