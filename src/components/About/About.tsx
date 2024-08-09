import './About.scss';
import avatar from '../../assets/images/about/avatar.png';
import { Statistics } from '../Statistics';
import React, { useEffect, useRef } from 'react';
import { Button } from '../Button';

export const About: React.FC = React.memo(() => {
  const ctaButton = useRef(null);

  useEffect(() => {
    if (ctaButton.current) {
      window.addEventListener('scroll', () => {
        const button: HTMLDivElement | null =
          document.querySelector('.about__cta-button');
        if (button) {
          const buttonHeight = button?.getBoundingClientRect().height;
          console.log(buttonHeight, '<<<<');

          const buttonPosition: number = button.offsetTop;

          const appearY =
            window.scrollY + window.innerHeight - 94;
          if (buttonPosition <= appearY) {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
          }
        }
      });
    }
  }, []);
  return (
    <section className='section about' id='about'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title about__title'>Про мене</h2>

          <p className='section__description about__description'>
            <img src={avatar} alt='Avatar' className='about__image' />Я вивчаю
            веб-розробку з 2020 року, викладаю - з 2022. Я навчався самотужки та
            витратив на це дуже багато часу. В процесі мені довелося самому
            стати тим вчителем, якого би я мріяв мати на початку свого шляху -
            спочатку для самого себе, а потім - для інших. Саме тому я зможу
            вберегти тебе від найпоширеніших помилок усіх початківців та
            зберегти тобі багато часу на пошук правильного шляху.
          </p>

          <div className='about__statistics'>
            <Statistics />
          </div>

          <p className='about__cta-text'>
            Зроби крок назустріч своєму майбутньому
            <br />
            та забронюй свій перший безкоштовний урок зі мною
            <br />
            <br />
            <br />
            <span>просто зараз!</span>
          </p>

          <div className='about__cta-button' ref={ctaButton}>
            <Button>Безкоштовний урок</Button>
          </div>
        </div>
      </div>
    </section>
  );
});
