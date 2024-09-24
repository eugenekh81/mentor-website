import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.scss';
// import { ModalContext } from '../Context/ModalContext';

type Props = {
  children: ReactNode;
};

export const Modal: React.FC<Props> = ({ children }) => {
  // const { isOpen } = useContext(ModalContext);
  // if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={css.modal}>{children}</div>,
    document.getElementById('modal')!
  );
};
