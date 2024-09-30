import React, { MutableRefObject, useContext, useRef } from 'react';
import ReactDom from 'react-dom';
import css from './Modal.module.scss';
import { ModalContext } from '../Context/ModalContext';
import cn from 'classnames';

export const Modal: React.FC = () => {
  const { isOpen, setIsClosed } = useContext(ModalContext);

  const modal: MutableRefObject<HTMLDivElement | null> = useRef(null);

  if (modal.current) {
    modal.current.style.paddingRight = isOpen ? '17px' : '0';
  }

  if (isOpen) {
    const scrollBarWidth = window.innerWidth - document.body.clientWidth;
    document.body.style.paddingRight = scrollBarWidth + 'px';
    document.body.style.overflow = 'hidden';
  } else {
    setTimeout(() => {
      document.body.style.paddingRight = '0';
      document.body.style.overflow = 'auto';
    }, 500);
  }

  return ReactDom.createPortal(
    <div className={cn(css.modal, { [css.visible]: isOpen })}>
      <div className={css.backdrop} ref={modal}>
        <div className={css.window}>
          <iframe
            src='https://scheduler.zoom.us/eugene-khablenko/trial-lesson?embed=true'
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
            }}
          ></iframe>
          <button
            type='button'
            className={css.button}
            onClick={() => setIsClosed()}
          >
            x
          </button>
        </div>
      </div>{' '}
    </div>,
    document.getElementById('modal')!
  );
};
