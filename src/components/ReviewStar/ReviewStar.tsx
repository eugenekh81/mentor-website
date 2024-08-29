import React from 'react';
import { SVGIcon } from '../SVGIcon';
import css from './ReviewStar.module.scss';

export const ReviewStar: React.FC = () => {
  return <SVGIcon className={css.star} iconId='star' />;
};
