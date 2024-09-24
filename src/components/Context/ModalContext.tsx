import React, { ReactNode, useState } from 'react';

const initialContextValue = {
  isOpen: false,
  setIsOpen: (v: boolean) => {},
};

export const ModalContext = React.createContext(initialContextValue);

type Props = {
  children: ReactNode;
};

export const ModalContextProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const save = (value: boolean) => {
    console.log('opening modal');

    setIsOpen(value);
  };

  const value = {
    isOpen,
    setIsOpen: save,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
