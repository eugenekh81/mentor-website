import React from 'react';
import './Button.scss';

type Props = {
  content: string;
};

export const Button: React.FC<Props> = ({ content }) => {
  return <button className='button'>{content}</button>;
};
