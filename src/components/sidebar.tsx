import { AppWindowIcon, LogOut, User } from "lucide-react";
import type { ISidebar } from "../types/sidebar";
import { AppWindow, Cog, Command, LayoutDashboard, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useProfileStore } from "@/store/useProfileStore";
import { useState } from "react";
import React from "react";
import type { IUser } from "@/types/profile";

const Sidebar = () => {
  const user = useProfileStore((state) => state.userForm);
  const isStateTrue = useProfileStore((state) => state.isTrue);
  const [userForm, setUserForm] = React.useState<IUser>({
    name: "",
    email: "",
    total: 0,
  });
  const location = useLocation();

  const menuItems: ISidebar[] = [
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/",
      icon: LayoutDashboard,
    },
    {
      id: "users",
      title: "Users",
      path: "/users",
      icon: Users,
    },
    {
      id: "jobs",
      title: "Jobs",
      path: "/jobs",
      icon: LayoutDashboard,
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
      id: "profile",
      title: "Profile",
      path: "/profile",
      icon: User,
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
            className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/40 ${
              location.pathname.includes(item.path) && "bg-green-700/40"
            }`}
          >
            <item.icon size={18} /> {item.title}
          </Link>
        ))}
      </nav>

      <div className="px-4 pb-6">
        <Link
          to="/login"
          className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-green-700/20 w-full text-left"
        >
          <LogOut size={18} /> Logout
        </Link>
      </div>

      {/* <div className="border border-gray-300 p-2 rounded-xl w-52">
        {user.name}
        <br />
        {user.email}
        <br />
        {isStateTrue ? "DarkMode" : "LightMode"}
        <div>Total: {userForm.total}</div>
      </div> */}

      {/* Footer */}
      <div className="p-4 text-sm text-green-50/80 border-t border-green-600">
        © {new Date().getFullYear()} JobZone
      </div>
    </aside>
  );
};

export default Sidebar;
