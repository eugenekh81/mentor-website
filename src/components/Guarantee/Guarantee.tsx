import { useEffect, useRef } from 'react';
import './Guarantee.scss';

import check from '../../assets/images/icons/check--white.svg';
import shield from '../../assets/images/icons/shield--white.svg';
import thumb from '../../assets/images/icons/thumb--white.svg';

const Guarantee: React.FC = () => {
  const guarantee = useRef<HTMLHeadingElement | null>(null);

  const handleScroll = () => {
    if (guarantee.current !== null) {
      const blockPosition = guarantee.current.getBoundingClientRect().top;
      if (blockPosition < window.innerHeight - 50) {
        guarantee.current.style.opacity = '1';
        guarantee.current.style.transform = 'translateY(0)';
      }
    }
  };

  useEffect(() => {
    if (guarantee.current !== null) {
      window.addEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='guarantee' ref={guarantee}>
      <h2 className='guarantee__title'>
        Я <span className='vivid-red'>гарантую</span>, що ти вивчиш веб-розробку
      </h2>
      <ul className='guarantee__list'>
        <li className='guarantee__item'>
          <div className='guarantee__background'></div>
          <img className='guarantee__image' src={check} alt='Guarantee' />
        </li>
        <li className='guarantee__item'>
          <div className='guarantee__background'></div>
          <img className='guarantee__image' src={shield} alt='Guarantee' />
        </li>
        <li className='guarantee__item'>
          <div className='guarantee__background'></div>
          <img className='guarantee__image' src={thumb} alt='Guarantee' />
        </li>
      </ul>
      <p className='guarantee__text'>
        якщо будеш систематично та старанно вчитися, виконувати домашні завдання
        та регулярно займатися зі мною два рази на тиждень
      </p>
    </div>
  );
};

export default Guarantee;
