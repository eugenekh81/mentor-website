import { useEffect, useRef } from 'react';
import './Banner.scss';
const titleText = [
  'П',
  'р',
  'и',
  'в',
  'і',
  'т',
  '!<br /><br />М',
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
  '<span class="vivid-red">н</span><br /><br />',
  'я',
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
/*
type Props = {
  delay: number;
  setDelay: CallableFunction;
};
 */
export const Banner: React.FC = (/* { delay, setDelay } */) => {
  const title = useRef<HTMLHeadingElement | null>(null);
  const button = useRef<HTMLButtonElement | null>(null);

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
    <section className='section banner'>
      <div className='container'>
        <div className='banner__content'>
          <div className='banner__title-container'>
            <h1 className='banner__title' ref={title}></h1>
          </div>
          <button className='banner__button button' ref={button}>
            Безкоштовний пробний урок
          </button>
        </div>
      </div>
    </section>
  );
};
