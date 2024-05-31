import React from 'react';
import './Button.scss';
import classNames from 'classnames';

type Props = {
  content: string;
  variant?: string;
};

export const Button: React.FC<Props> = ({ content, variant }) => {
  return (
    <button
      className={classNames('button', {
        'button--small': variant === 'small' || variant === 'services',
        header__button: variant === 'button--header',
        services__button: variant === 'services'
      })}
    >
      {content}
      <div className='button__arrow'></div>
    </button>
  );
};
