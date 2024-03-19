import React, { ButtonHTMLAttributes } from 'react';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  textOnly?: boolean;
  className?: string;
}

const Button: React.FC<Button> = ({
  children,
  className,
  textOnly,
  ...props
}) => {
  return (
    <>
      {!textOnly ? (
        <button
          className={`font-inherit cursor-pointer bg-yellow-500 border border-yellow-500 text-stone-900 py-2 px-6 rounded-[4px] active:bg-yellow-600 active:border-yellow-600 active:text-stone-900 hover:bg-yellow-600 hover:border-yellow-600 hover:text-stone-900 ${className}`}
          {...props}
        >
          {children}
        </button>
      ) : (
        <button
          className={`font-inherit cursor-pointer bg-transparent border-none text-yellow-500 active:text-yellow-600 hover:text-yellow-600 ${className}`}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
