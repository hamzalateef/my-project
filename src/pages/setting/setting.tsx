import { Notebook, User } from "lucide-react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router";

const Setting = () => {
  const [active, setActive] = useState("Profile");

  const menuItems = [
    { name: "Profile", icon: <User size={18} /> },
    { name: "Content", icon: <Notebook size={18} /> },
  ];

  return (
    <div className="flex min-h-screen w-full bg-gray-100 p-6 gap-4">
      {/* Sidebar */}
      <aside className="w-60 h-fit bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 px-2">
          Settings
        </h2>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active === item.name
                  ? "bg-green-100 text-green-700 shadow-inner"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              to={item.name}
            >
              <span
                className={`${
                  active === item.name ? "text-green-700" : "text-gray-500"
                }`}
              >
                {item.icon}
              </span>
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 rounded-2xl bg-white shadow-sm border border-gray-200 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Setting;
