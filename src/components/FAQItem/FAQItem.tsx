import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import './FAQItem.scss';

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

  console.log(content.current?.scrollHeight);
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
