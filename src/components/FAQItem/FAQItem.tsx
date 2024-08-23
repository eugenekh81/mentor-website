import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './FAQItem.scss';
import sprite from '../../assets/images/icons/sprite.svg';
import { SVGIcon } from '../SVGIcon/SVGIcon';

type Props = {
  id: number;
  q: string;
  a: string;
  selectedId: number;
  setSelectedId: (id: number) => void;
};

export const FAQItem: React.FC<Props> = ({
  id,
  q,
  a,
  selectedId,
  setSelectedId,
}) => {
  const [height, setHeight] = useState<string>('0');

  const content = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    setHeight(selectedId === id ? `${content.current?.scrollHeight}px` : '0');
  }, [selectedId]);

  return (
    <li
      className='FAQ__item'
      onClick={() => {
        setSelectedId(selectedId === id ? 0 : id);
      }}
    >
      <h3
        className={classNames('FAQ__question', {
          'FAQ__question--open': id === selectedId,
        })}
      >
        {q}
        <svg className='FAQ__icon'>
          <use href={`${sprite}#`}></use>
        </svg>
        <SVGIcon className='FAQ__icon' iconId='plus-icon' />
      </h3>
      <p
        className='FAQ__answer'
        style={{ height }}
        ref={content}
        dangerouslySetInnerHTML={{ __html: a }}
      ></p>
    </li>
  );
};
