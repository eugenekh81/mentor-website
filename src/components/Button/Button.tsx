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
        'button--header': variant === 'button--header',
        header__button: variant === 'button--header',
      })}
    >
      {content}
      <div className='button__arrow'></div>
    </button>
  );
};
