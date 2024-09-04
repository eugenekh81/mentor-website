import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import css from './FAQItem.module.scss';
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
      className={css.item}
      onClick={() => {
        setSelectedId(selectedId === id ? 0 : id);
      }}
    >
      <h3
        className={classNames(css.question, {
          [css.question_open]: id === selectedId,
        })}
      >
        {q}
        <SVGIcon className={css.icon} iconId='plus-icon' />
      </h3>
      <p
        className={css.answer}
        style={{ height }}
        ref={content}
        dangerouslySetInnerHTML={{ __html: a }}
      ></p>
    </li>
  );
};
