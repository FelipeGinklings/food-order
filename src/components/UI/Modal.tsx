import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Modal: React.FC<Props> = ({ children, className }) => {
  return (
    <dialog
      open
      className={`bg-orange-50 border-0 rounded-md shadow-lg p-4 w-4/5 max-w-[40rem] animate-fade-slide-up backdrop:bg-black-opacity-55 ${className}`}
    >
      {children}
    </dialog>
  );
};

export default Modal;
