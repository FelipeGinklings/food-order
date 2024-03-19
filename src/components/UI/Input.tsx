import React from 'react';

// type Props = {}

const Input: React.FC = () => {
  return (
    <p className="m-2 flex flex-col">
      <label className="font-extrabold mb-2" htmlFor="name">
        Full Name
      </label>
      <input
        className="w-full max-w-xs font-inherit p-2 rounded border border-slate-400"
        type="text"
        id="name"
      />
    </p>
    // <p>
    //   <label htmlFor="email">E-Email Address</label>
    //   <input type="email" id="email" />
    // </p>
    // <p>
    //   <label htmlFor="address">Street</label>
    //   <input type="text" id="address" />
    // </p>
    // <p>
    //   <label htmlFor="postal">Postal Code</label>
    //   <input type="text" id="postal" />
    // </p>
    // <p>
    //   <label htmlFor="city">City</label>
    //   <input type="text" id="city" />
    // </p>
  );
};

export default Input;
