import cn from 'classnames';

import css from './Contacts.module.scss';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { SVGIcon } from '../SVGIcon';
import { useDesktop } from '../../hooks/useDesktop';

export const Contacts = () => {
  const isOnDesktop = useDesktop();
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
                <Button variant={!isOnDesktop ? 'small' : ''}>
                  Безкоштовний урок
                </Button>

                <a href='https://t.me/js_mentor' target='_blank'>
                  <SVGIcon iconId='telegram' className={css.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
