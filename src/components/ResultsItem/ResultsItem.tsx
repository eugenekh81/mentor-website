import React from 'react';
import css from './ResultsItem.module.scss';

type Props = {
  title: string;
  text: string;
  imgUrl: string;
};

export const ResultsItem: React.FC<Props> = ({ title, text, imgUrl }) => {
  return (
    <li className={css.result}>
      <div className={css.imageContainer}>
        <img src={imgUrl} alt='Result' />
      </div>
      <h2 className={css.title}>{title}</h2>
      <p className={css.text}>{text}</p>
    </li>
  );
};
