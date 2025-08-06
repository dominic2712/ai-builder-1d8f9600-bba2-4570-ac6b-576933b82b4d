import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="text-white text-xl font-bold">AI Future</div>
          <div>
            <Link to="/" className="text-white mx-2">Home</Link>
            <Link to="/about" className="text-white mx-2">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
