import React from "react";
import {
  FaBell,
  FaBriefcase,
  FaBuilding,
  FaChartBar,
  FaCogs,
  FaFileAlt,
  FaSignOutAlt,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className=" bg-green-500 text-white flex flex-col min-h-screen">
      <div className="p-6 flex items-center gap-3 border-b border-green-400">
        <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center font-bold">
          JZ
        </div>
        <h3 className="text-lg font-semibold">JobZone</h3>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link to={'/'} className="flex items-center gap-3 px-3 py-2 rounded-md bg-green-700/40">
          <FaTachometerAlt /> Dashboard
        </Link>
        <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20">
          <FaBell /> Notifications
        </a>
        <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20">
          <FaUsers /> Users
        </a>
        <Link to={'/job-user'} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20">
          <FaBriefcase /> Jobs
        </Link>
        <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20">
          <FaBuilding /> Departments
        </a>
        <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20">
          <FaFileAlt /> Applications
        </a>
        <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20">
          <FaChartBar /> Analytics
        </a>
        <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20">
          <FaCogs /> Settings
        </a>
      </nav>

      <div className="px-4 pb-6">
        <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20">
          <FaSignOutAlt /> Logout
        </a>
      </div>

      <div className="p-4 text-sm text-green-50/80 border-t border-green-600">
        © 2025 JobZone
      </div>
    </aside>
  );
};

export default Sidebar;
