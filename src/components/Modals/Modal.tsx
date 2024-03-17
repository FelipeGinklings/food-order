import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ children }) => {
  return <dialog>{children}</dialog>;
};

export default Modal;
