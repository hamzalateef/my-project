import {
 
  Bell,
  Briefcase,
  Building2,

 
  LogOut,
} from "lucide-react";

import type { ISidebar } from "../types/sidebar";
import { AppWindow, Cog, Command, LayoutDashboard, Users } from "lucide-react";
import { Link, useLocation } from "react-router";

const Sidebar = () => {
  const location = useLocation();

  const menuItems: ISidebar[] = [
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      id: "jobs",
      title: "Jobs",
      path: "/jobs",
      icon: Users,
    },
    {
      id: "jobmanagement",
      title: "Manage Jobs",
      path: "/job-management",
      icon: Users,
    },
    {
      id: "department",
      title: "Department",
      path: "/department",
      icon: AppWindow,
    },
    {
      id: "companies",
      title: "Companies",
      path: "/companies",
      icon: Command,
    },
    {
      id: "settings",
      title: "Settings",
      path: "/settings",
      icon: Cog,
    },
    ];
  return (
    <aside className="bg-green-500 text-white flex flex-col min-h-screen">
      <div className="p-6 flex items-center gap-3 border-b border-green-400">
        <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center font-bold">
          JZ
        </div>
        <h3 className="text-lg font-semibold">JobZone</h3>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/40 ${location.pathname.includes(item.path) && 'bg-green-700/40'}`}
          >
            <item.icon size={18} /> {item.title}
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="px-4 pb-6">
        <button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20 w-full text-left">
          <LogOut size={18} /> Logout
        </button>
      </div>

      {/* Footer */}
      <div className="p-4 text-sm text-green-50/80 border-t border-green-600">
        © {new Date().getFullYear()} JobZone
      </div>
    </aside>
  );
};

export default Sidebar;
 