import React from 'react';
import sprite from '../../assets/images/icons/sprite.svg';

type Props = {
  className?: string;
  iconId: string;
};

export const SVGIcon: React.FC<Props> = ({ className, iconId }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${iconId}`}></use>
    </svg>
  );
};
