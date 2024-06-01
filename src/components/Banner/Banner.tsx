import React from 'react';
import { useEffect, useRef } from 'react';
import './Banner.scss';
import { Button } from '../Button';
const titleText = [
  'П',
  'р',
  'и',
  'в',
  'і',
  'т',
  '!<br />М',
  'е',
  'н',
  'е',
  ' ',
  'з',
  'в',
  'а',
  'т',
  'и',
  ' ',
  '<span class="vivid-red">Є</span>',
  '<span class="vivid-red">в</span>',
  '<span class="vivid-red">г</span>',
  '<span class="vivid-red">е</span>',
  '<span class="vivid-red">н</span><br />',
  'Я',
  ' ',
  '-',
  ' ',
  '<span class="vivid-red">м</span>',
  '<span class="vivid-red">е</span>',
  '<span class="vivid-red">н</span>',
  '<span class="vivid-red">т</span>',
  '<span class="vivid-red">о</span>',
  '<span class="vivid-red">р</span>',
  ' ',
  'з',
  ' ',
  '<span class="vivid-red">в</span>',
  '<span class="vivid-red">е</span>',
  '<span class="vivid-red">б</span>',
  '<span class="vivid-red">-</span>',
  '<span class="vivid-red">р</span>',
  '<span class="vivid-red">о</span>',
  '<span class="vivid-red">з</span>',
  '<span class="vivid-red">р</span>',
  '<span class="vivid-red">о</span>',
  '<span class="vivid-red">б</span>',
  '<span class="vivid-red">к</span>',
  '<span class="vivid-red">и</span>',
];

export const Banner: React.FC = React.memo(() => {
  const title = useRef<HTMLHeadingElement | null>(null);
  const button = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (title.current) {
      for (let i = 0; i < titleText.length; i++) {
        const currentDelay = 60 * i + 60 * Math.random();
        setTimeout(() => {
          if (title.current) {
            title.current.innerHTML += titleText[i];
          }
        }, currentDelay);
        title.current.style.animationDelay = `${currentDelay}ms`;
      }
      setTimeout(() => {
        if (title.current) {
          title.current.classList.add('banner__title--no-cursor');
        }
      }, 4200);
    }
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      if (button.current) {
        button.current.style.transform = 'translateY(0)';
        button.current.style.opacity = '1';
      }
    }, 4000);
  }, [button]);

  return (
    <section className='section banner' id='banner'>
      <div className='container'>
        <div className='banner__content'>
          <div className='banner__title-container'>
            <h1 className='banner__title' ref={title}></h1>
          </div>
          <div className='banner__button' ref={button}>
            <Button>Пробний урок</Button>
          </div>
        </div>
      </div>
    </section>
  );
});
