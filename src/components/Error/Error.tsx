import React from 'react';

type Props = {
  title: string;
  message: string;
};

const Error: React.FC<Props> = ({ title, message }) => {
  return (
    <div className="w-[90%] max-w-96 my-8 mx-auto p-4 bg-red-300 text-yellow-950 rounded-md">
      <h2 className="m-0">{title}</h2>
      <p className="m-0">{message}</p>
    </div>
  );
};

export default Error;
