import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
}

const Input: React.FC<Props> = ({ label, htmlFor, ...props }) => {
  return (
    <p className="m-2 flex flex-col">
      <label className="font-extrabold mb-2" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="w-full max-w-xs font-inherit p-2 rounded border border-slate-400"
        {...props}
      />
    </p>
  );
};

export default Input;
