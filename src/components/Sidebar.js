import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 h-full fixed md:relative">
      <div className="flex flex-col p-4">
        <div className="text-lg font-bold mb-6">Logo</div>
        <Link to="/" className="flex items-center mb-4">
          <i className="fas fa-home mr-2"></i> Home
        </Link>
        <Link to="/projects" className="flex items-center mb-4">
          <i className="fas fa-folder mr-2"></i> Projects
        </Link>
        <Link to="/forum" className="flex items-center mb-4">
          <i className="fas fa-comments mr-2"></i> Forum
        </Link>
        <Link to="/notifications" className="flex items-center mb-4">
          <i className="fas fa-bell mr-2"></i> Notifications
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
