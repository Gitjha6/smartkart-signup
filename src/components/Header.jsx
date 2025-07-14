import React from 'react';

const Header = () => {
  return (
    <header className="w-full shadow-sm px-4 md:px-8 py-4 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">SmartKart</h1>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-14">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline font-semibold">Sign Up</a>
        </nav>

        {/* Search */}
        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full md:w-64 px-4 py-2 border rounded-md text-sm"
          />
        </div>
        
      </div>
    </header>
  );
};

export default Header;
