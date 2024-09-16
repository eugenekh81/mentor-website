import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import css from './About.module.scss';

import { Statistics } from '../Statistics';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

export const About: React.FC = React.memo(() => {
  const ctaButton = useRef(null);

  useEffect(() => {
    if (ctaButton.current) {
      window.addEventListener('scroll', () => {
        const button: HTMLDivElement | null = document.querySelector(
          '.' + css.ctaButton
        );
        if (button) {
          const buttonPosition: number = button.offsetTop;

          const appearY = window.scrollY + window.innerHeight - 94;
          if (buttonPosition <= appearY) {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
          }
        }
      });
    }
  }, []);

  return (
    <section className={cn('section', css.about)} id='about'>
      <div className='container'>
        <div className='section__content'>
          <h2 className={cn('section__title', css.title)}>Про мене</h2>

          <p className={cn('section__description', css.description)}>
            <Avatar />Я вивчаю веб-розробку з 2020 року, викладаю - з 2022. Я
            навчався самотужки та витратив на це дуже багато часу. В процесі
            мені довелося самому стати тим вчителем, якого би я мріяв мати на
            початку свого шляху - спочатку для самого себе, а потім - для інших.
            Саме тому я зможу вберегти тебе від найпоширеніших помилок усіх
            початківців та зберегти тобі багато часу на пошук правильного шляху.
          </p>

          <div className={css.statistics}>
            <Statistics />
          </div>

          <p className={css.ctaText}>
            Зроби крок назустріч своєму <span className={css.future}>майбутньому</span>
            <br />
            та забронюй свій перший безкоштовний урок зі мною
            <br />
            <br />
            <br />
            <span className={css.now}>просто зараз!</span>
          </p>

          <div className={css.ctaButton} ref={ctaButton}>
            <Button>Безкоштовний урок</Button>
          </div>
        </div>
      </div>
    </section>
  );
});
