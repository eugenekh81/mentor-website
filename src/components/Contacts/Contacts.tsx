import cn from 'classnames';
import sprite from '../../assets/images/icons/sprite.svg';

import css from './Contacts.module.scss';
import { Avatar } from '../Avatar';
import { Button } from '../Button';

export const Contacts = () => {
  return (
    <section className={cn('section', css.contacts)} id='contacts'>
      <div className='container'>
        <div className='section__content'>
          <h2 className='section__title'>Контакти</h2>
          <div className={css.content}>
            <Avatar />
            <div className={css.description}>
              <p className={css.text}>
                Забронюй свій перший безкоштовний урок або напиши мені в
                Телеграм, якшо у тебе залишились питання
              </p>
              <div className={css.buttons}>
                  <Button>Безкоштовний урок</Button>

                  <a
                    href='https://t.me/js_mentor'
                    target='_blank'
                  >
                    <svg className={css.icon}>
                      <use href={`${sprite}#telegram`}></use>
                    </svg>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
