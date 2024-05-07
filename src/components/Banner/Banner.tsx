import { useEffect, useRef } from 'react';
import './Banner.scss';
const titleText = [
  'П',
  'р',
  'и',
  'в',
  'і',
  'т',
  '!',
  '<br />',
  '<br />',
  'М',
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
  'Є',
  'в',
  'г',
  'е',
  'н',
  '<br />',
  '<br />',
  'я',
  ' ',
  '-',
  ' ',
  'м',
  'е',
  'н',
  'т',
  'о',
  'р',
  ' ',
  'з',
  ' ',
  'в',
  'е',
  'б',
  '-',
  'р',
  'о',
  'з',
  'р',
  'о',
  'б',
  'к',
  'и',
];
export const Banner: React.FC = () => {
  const title = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    let totalDelay = 0;
    if (title.current) {
      for (let i = 0; i < titleText.length; i++) {
        const delay = 120 * i + 120 * Math.random();
        totalDelay += delay;
        setTimeout(() => {
          if (title.current) {
            title.current.innerHTML += titleText[i];
            console.log(delay, totalDelay);
          }
        }, delay);
        title.current.style.animationDelay = `${delay}ms`;
      }
    }
  }, [title]);

  return (
    <section className='section banner'>
      <div className='container'>
        <div className='banner__content'>
          <div className='banner__title-container'>
            <h1 className='banner__title' ref={title}></h1>
          </div>
        </div>
      </div>
    </section>
  );
};
