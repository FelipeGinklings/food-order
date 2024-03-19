import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  open: boolean;
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
};

interface Dialog extends HTMLDialogElement {}

const Modal: React.FC<Props> = ({ open, children, className, onClose }) => {
  const dialog = useRef<Dialog>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  return createPortal(
    <dialog
      open
      className={`bg-orange-50 border-0 rounded-md shadow-lg p-4 w-4/5 max-w-[40rem] animate-fade-slide-up backdrop:bg-black-opacity-55 overscroll-none ${className}`}
      ref={dialog}
      onClose={onClose}
    >
      {children}
    </dialog>,
    document.getElementById('modals')!
  );
};

export default Modal;
