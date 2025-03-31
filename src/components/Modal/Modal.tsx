import React, { MutableRefObject, useContext, useEffect, useRef } from 'react';
import ReactDom from 'react-dom';
import css from './Modal.module.scss';
import { ModalContext } from '../Context/ModalContext';
import cn from 'classnames';
import { SVGIcon } from '../SVGIcon';
import { FreeLessonBlock } from '../FreeLessonBlock/FreeLessonBlock';

export const Modal: React.FC = () => {
  const { isOpen, setIsClosed } = useContext(ModalContext);

  const modal: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const modalBackdrop: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (modalBackdrop.current) {
      modalBackdrop.current.style.paddingRight = isOpen ? '17px' : '0';
    }

    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;
      document.body.style.paddingRight = scrollBarWidth + 'px';
      document.body.style.overflow = 'hidden';

      if (modal.current) {
        modal.current.style.zIndex = '10';
      }
    } else {
      setTimeout(() => {
        document.body.style.paddingRight = '0';
        document.body.style.overflow = 'visible';

        if (modal.current) {
          modal.current.style.zIndex = '-1';
        }
      }, 500);
    }
  }, [isOpen]);

  return ReactDom.createPortal(
    <div className={cn(css.modal, { [css.visible]: isOpen })} ref={modal}>
      <div className={css.backdrop} ref={modalBackdrop}>
        <div className={css.windowWrapper}>
          <div className={css.animationWrapper}>
            <div className={css.window}>
              {/*               <iframe
                src='https://scheduler.zoom.us/eugene-khablenko/trial-lesson?embed=true'
                style={{
                  display: 'block',
                  height: '100%',
                  width: '100%',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              ></iframe> */}

              <h2>
                Загальні умови проведення
                <br />
                <span className={css.accent}>
                  першого безкоштовного заняття
                </span>
              </h2>
              <ol>
                <li>
                  Заняття проводиться в Zoom
                  <br />
                  <span>посилання буде надіслано на твій email</span>
                </li>
                <li>
                  Тривалість заняття - 30 хвилин
                  <br />
                  <span>можливе продовження до 60 хвилин</span>
                </li>
                <li>
                  Заняття проводиться в зручний для тебе час
                  <br />
                  <span>
                    Доступний час - з 10 ранку до 19 вечора, понеділок -
                    пʼятниця, на вихідних - за домовленістю.
                  </span>
                </li>
              </ol>

              <h3 className={css.listTitle}>Під час заняття ми зможемо:</h3>
              {/*               <ul>
                <li>Визначити ваш рівень знань</li>
                <li>Визначити ваші цілі</li>
                <li>Обговорити програму навчання</li>
                <li>Обговорити вартість навчання</li>
                <li>Обговорити графік занять</li>
                <li>Обговорити ваші запитання</li>
              </ul> */}

              <FreeLessonBlock />

              <h3>
                Напиши мені в Telegram або на email, щоб забронювати свій
                <p className={css.accent}>перший безкоштовний урок!</p>
              </h3>

              <div className={css.buttons}>
                <a
                  href='https://t.me/js_mentor'
                  target='_blank'
                  className={css.tgIcon}
                >
                  <SVGIcon iconId='telegram' className={css.icon} />
                </a>

                <a
                  href='mailto:eugene.khablenko@gmail.com'
                  className={css.tgIcon}
                >
                  <SVGIcon iconId='gmail' className={css.icon} />
                </a>
              </div>
            </div>
          </div>
          <button
            type='button'
            className={css.button}
            onClick={() => setIsClosed()}
          ></button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')!
  );
};
