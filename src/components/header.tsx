
import { FaBriefcase, FaPlus, FaSearch } from "react-icons/fa";
import type { HJob } from "../types/header";

const Header = (jobs: HJob) => {
  return (
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold flex items-center gap-3 text-gray-800">
          <span className="p-2 bg-green-100 text-green-600 rounded-lg">
            <FaBriefcase />
          </span>
          {jobs.title}
        </h2>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-72">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder={jobs.inputtitle}
              className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-300 bg-white shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm font-medium rounded-lg shadow hover:shadow-md hover:scale-[1.02] transition-all">
            <FaPlus /> {jobs.jobmodel}
          </button>
        </div>
      </header>
  );
};

export default Header;
