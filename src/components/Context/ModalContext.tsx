import React, { ReactNode, useState } from 'react';

const initialContextValue = {
  isOpen: false,
  setIsOpen: () => {},
  setIsClosed: () => {},
};

export const ModalContext = React.createContext(initialContextValue);

type Props = {
  children: ReactNode;
};

export const ModalContextProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };

  const value = {
    isOpen,
    setIsOpen: open,
    setIsClosed: close,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
