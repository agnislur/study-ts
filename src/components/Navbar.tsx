import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Aplikasi Buatan Simple</div>
        <div>
          <Link to="/" className="text-white px-3 py-2 rounded hover:bg-blue-700">Home</Link>
          <Link to="/about" className="text-white px-3 py-2 rounded hover:bg-blue-700">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
