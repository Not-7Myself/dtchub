import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = ({ pageTitle }) => {
  return (
    <div className="bg-gray-800 text-white h-12 flex items-center justify-between px-4">
      <h1>{pageTitle}</h1>
      <div className="flex items-center">
        <Link to="/profile" className="mr-4">
          <i className="fas fa-user-circle"></i>
        </Link>
        <Link to="/logout">
          <i className="fas fa-sign-out-alt"></i>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
