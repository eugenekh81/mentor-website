import React, { useEffect, useRef, useState } from 'react';
import './ProductItem.scss';
import { SVGIcon } from '../SVGIcon';

type Props = {
  title: string;
  spriteId?: string;
  imgSrc?: string;
};

export const ProductsItem: React.FC<Props> = ({
  title,
  spriteId = '',
  imgSrc,
}) => {
  const item = useRef<HTMLLIElement | null>(null);

  const [top, setTop] = useState<string>('0');
  const [left, setLeft] = useState<string>('0');
  const [size, setSize] = useState<string>('0');
  const [borderRadius, setBorderRadius] = useState<string>('0%');

  const backdrop = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (item.current) {
      item.current.addEventListener('mouseenter', (e: MouseEvent) => {
        if (backdrop.current) {
          setTop(() => `${e.offsetY}px`);
          setLeft(() => `${e.offsetX}px`);
          setSize('700px');
          setBorderRadius('0%');
        }
      });

      item.current.addEventListener('mouseleave', (e: MouseEvent) => {
        setTop(() => `${e.offsetY}px`);
        setLeft(() => `${e.offsetX}px`);
        setSize('0');
        setBorderRadius('50%');
      });
    }
  }, []);

  return (
    <li className='products__item product' ref={item}>
      <div
        className='product__backdrop'
        ref={backdrop}
        style={{
          top,
          left,
          height: size,
          width: size,
          borderRadius,
        }}
      ></div>
      <div className='product__wrapper'>
        {imgSrc ? (
          <img src={imgSrc} alt='' className='product__icon' />
        ) : (
          <SVGIcon className='product__icon' iconId={spriteId} />
        )}
        <span className='product__title'>{title}</span>
      </div>
    </li>
  );
};
