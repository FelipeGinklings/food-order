import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
  error?: string;
}

const Input: React.FC<Props> = ({ label, htmlFor, error, ...props }) => {
  return (
    <p className="m-2 flex flex-col">
      <label className="font-extrabold mb-2" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="w-full max-w-xs font-inherit p-2 rounded border border-slate-400"
        {...props}
      />
      {error && (
        <span className="text-red-400 mt-1 font-bold text-sm">{error}</span>
      )}
    </p>
  );
};

export default Input;
