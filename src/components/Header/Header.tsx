import React from 'react';
import logo from '../../assets/logo.jpg';
import Button from '../UI/Button';

// type Props = {}

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-12 px-[10%]">
      <div className="flex gap-4 items-center">
        <img
          className="w-16 h-16 object-contain rounded-[50%] border-2 border-l-yellow-400"
          src={logo}
          alt="Logo"
        />
        <h1 className="font-lato font-bold text-4xl m-0 text-yellow-500 tracking-widest uppercase">
          ReactFood
        </h1>
      </div>
      <nav>
        <Button
          className="text-2xl font-lato text-yellow-400"
          textOnly
          type="button"
        >
          Cart (0)
        </Button>
      </nav>
    </header>
  );
};

export default Header;
