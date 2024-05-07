import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

type Props = {
  id: number;
  title: string;
  text: string;
  selectedId: number;
  setSelectedId: (id: number | null) => void;
};

export const FAQItem: React.FC<Props> = ({
  id,
  title,
  text,
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
      className='consultations__item'
      onClick={() => {
        setSelectedId(selectedId === id ? null : id);
      }}
    >
      <h3
        className={classNames('consultations__topic', {
          'consultations__topic--open': id === selectedId,
        })}
      >
        {title}
      </h3>
      <p
        className='consultations__description'
        style={{ height }}
        ref={content}
      >
        <br />
        {text}
        <br />
        <br />
      </p>
    </li>
  );
};
