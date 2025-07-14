import React from 'react';

const Header = () => {
  return (
    <header className="w-full h-16 shadow-sm px-4 md:px-8 flex items-center justify-between">
      <h1 className="text-xl font-bold">SmartKart</h1>
      <nav className="flex items-center space-x-6">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">Contact</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline font-semibold">Sign Up</a>
      </nav>
      <div>
        <input
          type="text"
          placeholder="What are you looking for?"
          className="px-3 py-1 border rounded-md text-sm"
        />
      </div>
    </header>
  );
};

export default Header;

